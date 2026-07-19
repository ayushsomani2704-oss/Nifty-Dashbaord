"""
send_alert.py — Generates alerts when portfolio stock signals change.

Reads data/prices.json and portfolio.json, computes Buy/Hold/Sell signals using
the same weighted algorithm as the dashboard, compares with previous signals,
and outputs alerts if any portfolio stock changed signal.

Usage: python send_alert.py
"""

import json
import os
from datetime import datetime
from pathlib import Path

BASE_DIR = Path(__file__).parent
DATA_DIR = BASE_DIR / "data"


def calc_sma(prices, n):
    """Simple Moving Average of last n prices."""
    if len(prices) < n:
        return None
    return sum(prices[-n:]) / n


def calc_ema(prices, n):
    """Exponential Moving Average."""
    if len(prices) < n:
        return None
    k = 2 / (n + 1)
    ema = sum(prices[:n]) / n
    for i in range(n, len(prices)):
        ema = prices[i] * k + ema * (1 - k)
    return ema


def calc_rsi(prices, n=14):
    """Relative Strength Index."""
    if len(prices) < n + 1:
        return 50
    gains = 0
    losses = 0
    for i in range(len(prices) - n, len(prices)):
        delta = prices[i] - prices[i - 1]
        if delta > 0:
            gains += delta
        else:
            losses -= delta
    if losses == 0:
        return 100
    rs = (gains / n) / (losses / n)
    return 100 - 100 / (1 + rs)


def strength_factor(cur, ma):
    """Trend strength multiplier based on distance from MA."""
    if ma is None:
        return 1
    dist = abs((cur - ma) / ma * 100)
    if dist < 1:
        return 0.5
    elif dist < 3:
        return 0.8
    elif dist < 8:
        return 1.0
    elif dist < 15:
        return 1.2
    return 0.9  # overextended


def volume_confirmation(volumes):
    """Volume-based signal confirmation."""
    if len(volumes) < 21:
        return 0
    recent = volumes[-1]
    avg20 = sum(volumes[-21:-1]) / 20
    if avg20 == 0:
        return 0
    if recent > avg20 * 1.5:
        return 0.5
    if recent < avg20 * 0.6:
        return -0.5
    return 0


def get_signal(prices, volumes):
    """
    Compute Buy/Hold/Sell signal using the weighted algorithm.
    Returns (signal, score).
    """
    if len(prices) < 50:
        return "HOLD", 0

    cur = prices[-1]
    sma20 = calc_sma(prices, 20)
    sma50 = calc_sma(prices, 50)
    sma200 = calc_sma(prices, 200)
    ema12 = calc_ema(prices, 12)
    ema26 = calc_ema(prices, 26)
    rsi = calc_rsi(prices, 14)
    macd = (ema12 - ema26) if (ema12 and ema26) else 0

    score = 0

    # SMA20 — weight 0.5
    str20 = strength_factor(cur, sma20)
    if cur > sma20:
        score += 0.5 * str20
    else:
        score -= 0.5 * str20

    # SMA50 — weight 1.0
    str50 = strength_factor(cur, sma50)
    if cur > sma50:
        score += 1.0 * str50
    else:
        score -= 1.0 * str50

    # SMA200 — weight 1.5
    if sma200:
        str200 = strength_factor(cur, sma200)
        if cur > sma200:
            score += 1.5 * str200
        else:
            score -= 1.5 * str200

    # RSI gradient
    if rsi < 30:
        score += 1.5
    elif rsi < 40:
        score += 0.5
    elif rsi > 70:
        score -= 1.5
    elif rsi > 60:
        score -= 0.5

    # MACD — weight 1.0
    if macd > 0:
        score += 1.0
    else:
        score -= 1.0

    # Golden/Death Cross — weight 1.5
    if sma50 and sma200:
        if sma50 > sma200:
            score += 1.5
        else:
            score -= 1.5

    # Volume confirmation
    vol_signal = volume_confirmation(volumes) if volumes else 0
    if vol_signal != 0:
        score += vol_signal * (1 if score > 0 else -1)

    # Determine signal (using threshold 3.0 / -3.0 as default without fundamentals)
    if score >= 3.0:
        signal = "BUY"
    elif score <= -3.0:
        signal = "SELL"
    else:
        signal = "HOLD"

    return signal, round(score, 2)


def main():
    print("=" * 60)
    print("Stock Dashboard — Signal Alert Generator")
    print("=" * 60)

    # Load prices
    prices_path = DATA_DIR / "prices.json"
    if not prices_path.exists():
        print("ERROR: data/prices.json not found. Run fetch_prices.py first.")
        return

    with open(prices_path, "r", encoding="utf-8") as f:
        prices_data = json.load(f)

    stocks_data = prices_data.get("stocks", {})

    # Load portfolio
    portfolio_path = BASE_DIR / "portfolio.json"
    if not portfolio_path.exists():
        print("ERROR: portfolio.json not found.")
        return

    with open(portfolio_path, "r", encoding="utf-8") as f:
        portfolio = json.load(f)

    # Load previous signals
    prev_signals_path = DATA_DIR / "prev_signals.json"
    prev_signals = {}
    if prev_signals_path.exists():
        with open(prev_signals_path, "r", encoding="utf-8") as f:
            prev_signals = json.load(f)

    # Compute current signals for portfolio stocks
    print(f"\nComputing signals for {len(portfolio)} portfolio stocks...")
    current_signals = {}
    alerts = []

    for item in portfolio:
        symbol = item["symbol"]
        if symbol not in stocks_data:
            print(f"  {symbol}: No price data available, skipping.")
            continue

        stock_info = stocks_data[symbol]
        prices = stock_info.get("prices", [])
        volumes = stock_info.get("volume", [])

        if len(prices) < 50:
            print(f"  {symbol}: Insufficient data ({len(prices)} days), skipping.")
            continue

        signal, score = get_signal(prices, volumes)
        current_signals[symbol] = {
            "signal": signal,
            "score": score,
            "price": prices[-1] if prices else None,
        }

        # Check if signal changed
        prev = prev_signals.get(symbol, {})
        prev_signal = prev.get("signal", None)

        if prev_signal and prev_signal != signal:
            change_desc = f"{prev_signal} -> {signal}"
            alerts.append({
                "symbol": symbol,
                "exchange": item["exchange"],
                "qty": item["qty"],
                "avgPrice": item["avgPrice"],
                "currentPrice": prices[-1],
                "prevSignal": prev_signal,
                "newSignal": signal,
                "score": score,
                "change": change_desc,
                "timestamp": datetime.now().isoformat(timespec="seconds"),
            })
            print(f"  ** ALERT: {symbol} changed from {prev_signal} to {signal} (score: {score})")
        else:
            status = "NEW" if prev_signal is None else "unchanged"
            print(f"  {symbol}: {signal} (score: {score}) [{status}]")

    # Save current signals for next comparison
    with open(prev_signals_path, "w", encoding="utf-8") as f:
        json.dump(current_signals, f, indent=2)
    print(f"\nSaved current signals to {prev_signals_path}")

    # Save alerts
    alerts_path = DATA_DIR / "alerts.json"
    alerts_output = {
        "generated": datetime.now().isoformat(timespec="seconds"),
        "alertCount": len(alerts),
        "alerts": alerts,
    }
    with open(alerts_path, "w", encoding="utf-8") as f:
        json.dump(alerts_output, f, indent=2)

    # Generate GitHub Actions summary
    summary_lines = []
    summary_lines.append("## Stock Dashboard Signal Alerts")
    summary_lines.append(f"**Generated:** {datetime.now().strftime('%Y-%m-%d %H:%M:%S UTC')}")
    summary_lines.append(f"**Portfolio stocks tracked:** {len(current_signals)}")
    summary_lines.append("")

    if alerts:
        summary_lines.append(f"### {len(alerts)} Signal Change(s) Detected!")
        summary_lines.append("")
        summary_lines.append("| Stock | Exchange | Change | Score | Current Price | Qty | Avg Cost |")
        summary_lines.append("|-------|----------|--------|-------|---------------|-----|----------|")
        for a in alerts:
            emoji = "BUY" if a["newSignal"] == "BUY" else ("SELL" if a["newSignal"] == "SELL" else "HOLD")
            summary_lines.append(
                f"| **{a['symbol']}** | {a['exchange'].upper()} | "
                f"{a['prevSignal']} -> **{a['newSignal']}** | {a['score']} | "
                f"{a['currentPrice']:.2f} | {a['qty']} | {a['avgPrice']:.2f} |"
            )
        summary_lines.append("")
        summary_lines.append("---")
        summary_lines.append("*Action recommended: Review the changed signals above.*")
    else:
        summary_lines.append("### No Signal Changes")
        summary_lines.append("All portfolio stocks maintain their previous signals. No action needed.")
        summary_lines.append("")
        # Show current signal distribution
        buy_count = sum(1 for s in current_signals.values() if s["signal"] == "BUY")
        sell_count = sum(1 for s in current_signals.values() if s["signal"] == "SELL")
        hold_count = sum(1 for s in current_signals.values() if s["signal"] == "HOLD")
        summary_lines.append(f"**Signal Distribution:** {buy_count} Buy | {hold_count} Hold | {sell_count} Sell")

    summary_text = "\n".join(summary_lines)

    # Write to GitHub Actions summary if available
    github_summary_file = os.environ.get("GITHUB_STEP_SUMMARY")
    if github_summary_file:
        with open(github_summary_file, "a", encoding="utf-8") as f:
            f.write(summary_text + "\n")
        print("\nWritten to GitHub Actions step summary.")
    else:
        print("\n" + summary_text)

    print(f"\nAlerts saved to: {alerts_path}")
    print(f"Total alerts: {len(alerts)}")


if __name__ == "__main__":
    main()
