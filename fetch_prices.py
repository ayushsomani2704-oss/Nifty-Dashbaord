"""
fetch_prices.py — Fetches real historical prices and fundamentals from Yahoo Finance
for all stocks in the dashboard. Outputs data/prices.json and data/fundamentals.json.

Usage: python fetch_prices.py
Requires: pip install yfinance pandas
"""

import json
import os
import re
import time
from datetime import datetime, timedelta
from pathlib import Path

import pandas as pd
import yfinance as yf

# Paths
BASE_DIR = Path(__file__).parent
DATA_DIR = BASE_DIR / "data"
DATA_DIR.mkdir(exist_ok=True)

# Symbol mapping for known problematic tickers on Yahoo Finance
SYMBOL_MAP = {
    # ETFs and special instruments
    "GOLD1-E": "GOLDBEES.NS",
    "SILVERIETF-E": "SILVERBEES.NS",
    # Problematic NSE symbols
    "M&M": "M&M.NS",
    "BAJAJ-AUTO": "BAJAJ-AUTO.NS",
    # BSE-specific mappings (some need .BO, others work with .NS)
    "NYKAA": "NYKAA.NS",  # FSN E-Commerce
    "GROWW": "GROWW.BO",
    "TMCV": "TATAMOTORS.NS",  # Tata Motors CV — demerged, try parent
    "TMPV": "TATAMOTORS.NS",  # Tata Motors PV — demerged, try parent
}


def parse_js_symbols(filepath):
    """Parse stock symbols from a JS file like stocks-nse.js"""
    symbols = []
    try:
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
        # Match symbol:'VALUE' patterns
        matches = re.findall(r"symbol\s*:\s*['\"]([^'\"]+)['\"]", content)
        symbols = list(set(matches))  # deduplicate
    except FileNotFoundError:
        print(f"  Warning: {filepath} not found, skipping.")
    return symbols


def get_yahoo_symbol(symbol, exchange):
    """Convert a local symbol + exchange to Yahoo Finance ticker."""
    # Check manual mapping first
    if symbol in SYMBOL_MAP:
        return SYMBOL_MAP[symbol]

    # Exchange-based suffix
    if exchange == "nasdaq":
        return symbol
    elif exchange == "bse":
        return f"{symbol}.BO"
    else:  # nse
        return f"{symbol}.NS"


def load_portfolio():
    """Load portfolio.json and return list of {symbol, exchange}."""
    pf_path = BASE_DIR / "portfolio.json"
    if not pf_path.exists():
        return []
    with open(pf_path, "r", encoding="utf-8") as f:
        return json.load(f)


def fetch_batch_prices(symbols_with_exchange, days=260):
    """
    Fetch historical prices for a list of (symbol, exchange) tuples.
    Returns dict: {symbol: {"prices": [...], "volume": [...]}}
    """
    results = {}
    end_date = datetime.now()
    start_date = end_date - timedelta(days=int(days * 1.6))  # extra buffer for weekends/holidays

    # Group by Yahoo ticker
    ticker_map = {}  # yahoo_ticker -> original_symbol
    for symbol, exchange in symbols_with_exchange:
        yahoo_sym = get_yahoo_symbol(symbol, exchange)
        ticker_map[yahoo_sym] = symbol

    yahoo_tickers = list(ticker_map.keys())

    # Process in batches of 20
    batch_size = 20
    for i in range(0, len(yahoo_tickers), batch_size):
        batch = yahoo_tickers[i : i + batch_size]
        batch_str = " ".join(batch)
        print(f"  Fetching batch {i // batch_size + 1}/{(len(yahoo_tickers) + batch_size - 1) // batch_size}: {len(batch)} tickers...")

        try:
            data = yf.download(
                batch_str,
                start=start_date.strftime("%Y-%m-%d"),
                end=end_date.strftime("%Y-%m-%d"),
                progress=False,
                group_by="ticker",
                auto_adjust=True,
            )

            for ticker in batch:
                original_symbol = ticker_map[ticker]
                try:
                    if len(batch) == 1:
                        # Single ticker — data is not nested
                        df = data
                    else:
                        df = data[ticker]

                    # Get last N trading days of close prices and volume
                    close = df["Close"].dropna()
                    vol = df["Volume"].dropna()

                    if len(close) < 10:
                        # Try fallback: .NS if .BO failed
                        if ticker.endswith(".BO"):
                            fallback = ticker.replace(".BO", ".NS")
                            print(f"    {ticker} has insufficient data, trying {fallback}...")
                            fb_data = yf.download(
                                fallback,
                                start=start_date.strftime("%Y-%m-%d"),
                                end=end_date.strftime("%Y-%m-%d"),
                                progress=False,
                                auto_adjust=True,
                            )
                            close = fb_data["Close"].dropna()
                            vol = fb_data["Volume"].dropna()

                    if len(close) >= 10:
                        # Take last `days` trading days
                        prices_list = close.tail(days).tolist()
                        vol_list = vol.tail(days).tolist()
                        results[original_symbol] = {
                            "prices": [round(p, 2) for p in prices_list],
                            "volume": [int(v) if pd.notna(v) else 0 for v in vol_list],
                        }
                    else:
                        print(f"    Skipping {original_symbol} ({ticker}): only {len(close)} data points")
                except Exception as e:
                    print(f"    Error processing {original_symbol} ({ticker}): {e}")

        except Exception as e:
            print(f"  Batch download error: {e}")

        # Rate limit delay between batches
        if i + batch_size < len(yahoo_tickers):
            time.sleep(2)

    return results


def fetch_fundamentals(symbols_with_exchange):
    """
    Fetch fundamental data for stocks using yfinance .info.
    Returns dict: {symbol: {pe, eps, revenue, profitMargin, roce, roe, debtEquity, ...}}
    """
    results = {}
    batch_size = 20

    all_items = list(symbols_with_exchange)

    for i in range(0, len(all_items), batch_size):
        batch = all_items[i : i + batch_size]
        print(f"  Fundamentals batch {i // batch_size + 1}/{(len(all_items) + batch_size - 1) // batch_size}...")

        for symbol, exchange in batch:
            yahoo_sym = get_yahoo_symbol(symbol, exchange)
            try:
                ticker = yf.Ticker(yahoo_sym)
                info = ticker.info

                if not info or info.get("regularMarketPrice") is None:
                    # Try fallback
                    if yahoo_sym.endswith(".BO"):
                        yahoo_sym = yahoo_sym.replace(".BO", ".NS")
                        ticker = yf.Ticker(yahoo_sym)
                        info = ticker.info

                if info and info.get("regularMarketPrice") is not None:
                    fund = {
                        "pe": info.get("trailingPE") or info.get("forwardPE"),
                        "eps": info.get("trailingEps"),
                        "revenue": info.get("totalRevenue"),
                        "profitMargin": info.get("profitMargins"),
                        "roce": info.get("returnOnAssets"),  # proxy — yfinance doesn't have ROCE directly
                        "roe": info.get("returnOnEquity"),
                        "debtEquity": info.get("debtToEquity"),
                        "dividendYield": info.get("dividendYield"),
                        "pb": info.get("priceToBook"),
                        "marketCap": info.get("marketCap"),
                        "52wHigh": info.get("fiftyTwoWeekHigh"),
                        "52wLow": info.get("fiftyTwoWeekLow"),
                        "sector": info.get("sector"),
                        "industry": info.get("industry"),
                    }
                    # Clean None values and convert
                    clean_fund = {}
                    for k, v in fund.items():
                        if v is not None:
                            if isinstance(v, float):
                                # Convert ratios to percentages where appropriate
                                if k in ("profitMargin", "roce", "roe", "dividendYield"):
                                    clean_fund[k] = round(v * 100, 2)
                                else:
                                    clean_fund[k] = round(v, 2)
                            else:
                                clean_fund[k] = v
                        else:
                            clean_fund[k] = None

                    results[symbol] = clean_fund
                else:
                    print(f"    No fundamental data for {symbol} ({yahoo_sym})")

            except Exception as e:
                print(f"    Error fetching fundamentals for {symbol} ({yahoo_sym}): {e}")

        # Rate limit
        if i + batch_size < len(all_items):
            time.sleep(2)

    return results


def main():
    print("=" * 60)
    print("Stock Dashboard — Price & Fundamental Data Fetcher")
    print("=" * 60)

    # 1. Collect all symbols from JS files
    print("\n[1/5] Parsing stock symbols from JS files...")
    nse_symbols = parse_js_symbols(BASE_DIR / "stocks-nse.js")
    bse_symbols = parse_js_symbols(BASE_DIR / "stocks-bse.js")
    nasdaq_symbols = parse_js_symbols(BASE_DIR / "stocks-nasdaq.js")

    print(f"  NSE: {len(nse_symbols)} symbols")
    print(f"  BSE: {len(bse_symbols)} symbols")
    print(f"  NASDAQ: {len(nasdaq_symbols)} symbols")

    # 2. Load portfolio symbols
    print("\n[2/5] Loading portfolio symbols...")
    portfolio = load_portfolio()
    portfolio_symbols = [(item["symbol"], item["exchange"]) for item in portfolio]
    print(f"  Portfolio: {len(portfolio_symbols)} holdings")

    # 3. Build combined list (deduplicated)
    all_symbols = set()
    for sym in nse_symbols:
        all_symbols.add((sym, "nse"))
    for sym in bse_symbols:
        all_symbols.add((sym, "bse"))
    for sym in nasdaq_symbols:
        all_symbols.add((sym, "nasdaq"))
    for sym, exch in portfolio_symbols:
        all_symbols.add((sym, exch))

    # Deduplicate by symbol (prefer the portfolio exchange if conflict)
    symbol_exchange_map = {}
    for sym, exch in all_symbols:
        if sym not in symbol_exchange_map:
            symbol_exchange_map[sym] = exch

    # Override with portfolio exchanges
    for sym, exch in portfolio_symbols:
        symbol_exchange_map[sym] = exch

    combined = [(sym, exch) for sym, exch in symbol_exchange_map.items()]
    print(f"\n  Total unique symbols: {len(combined)}")

    # 4. Fetch historical prices
    print("\n[3/5] Fetching historical prices (260 trading days)...")
    prices = fetch_batch_prices(combined, days=260)
    print(f"  Successfully fetched: {len(prices)} stocks")

    # Write prices.json
    prices_output = {
        "updated": datetime.now().isoformat(timespec="seconds"),
        "stocks": prices,
    }
    prices_path = DATA_DIR / "prices.json"
    with open(prices_path, "w", encoding="utf-8") as f:
        json.dump(prices_output, f)
    print(f"  Written: {prices_path} ({os.path.getsize(prices_path) // 1024} KB)")

    # 5. Fetch fundamentals (only for portfolio + top stocks to save time)
    print("\n[4/5] Fetching fundamental data...")
    # Prioritize portfolio stocks + a sample of others
    priority_symbols = list(portfolio_symbols)
    # Add some large-cap NSE/BSE stocks
    large_caps = [s for s in nse_symbols if s in [
        "RELIANCE", "TCS", "HDFCBANK", "INFY", "ICICIBANK", "ITC", "SBIN",
        "BHARTIARTL", "LT", "AXISBANK", "BAJFINANCE", "MARUTI", "TITAN",
        "SUNPHARMA", "TATAMOTORS", "NTPC", "WIPRO", "HCLTECH"
    ]]
    for sym in large_caps:
        if (sym, "nse") not in priority_symbols:
            priority_symbols.append((sym, "nse"))

    # Add NASDAQ large caps
    nasdaq_priority = ["AAPL", "MSFT", "GOOGL", "AMZN", "NVDA", "META", "TSLA", "NFLX", "AMD", "ADBE"]
    for sym in nasdaq_priority:
        if (sym, "nasdaq") not in priority_symbols:
            priority_symbols.append((sym, "nasdaq"))

    fundamentals = fetch_fundamentals(priority_symbols)
    print(f"  Successfully fetched: {len(fundamentals)} stocks")

    # Write fundamentals.json
    fund_output = {
        "updated": datetime.now().isoformat(timespec="seconds"),
        "stocks": fundamentals,
    }
    fund_path = DATA_DIR / "fundamentals.json"
    with open(fund_path, "w", encoding="utf-8") as f:
        json.dump(fund_output, f)
    print(f"  Written: {fund_path} ({os.path.getsize(fund_path) // 1024} KB)")

    # Summary
    print("\n[5/5] Done!")
    print(f"  Prices: {len(prices)} stocks with historical data")
    print(f"  Fundamentals: {len(fundamentals)} stocks with fundamental data")
    print(f"  Updated: {prices_output['updated']}")


if __name__ == "__main__":
    main()
