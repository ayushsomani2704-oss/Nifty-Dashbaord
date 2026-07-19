import re

js = open(r'C:\Users\ayushsom\stock-dashboard\_check.js', 'r', encoding='utf-8').read()

# The issue might be that genPrices is called with stock that has 'sector' undefined
# or the sector-relative function iterates over too many stocks causing perf issues

# Check if there's a circular call: renderSummary -> getSignal -> getAnalysis -> getSectorReturn10d -> genPrices (for EACH stock in sector)
# This means for 1080 stocks, each calling getSectorReturn10d which iterates 10 stocks and calls genPrices(s,15)
# That's 1080 * 10 = 10,800 genPrices calls just for sector-relative
# Plus 1080 genPrices(stock,260) for main analysis
# Plus 1080 genPrices(stock,5) for getPrice
# Total: ~13,000 genPrices calls on page load

# With 260 iterations per genPrices call for the main ones: 1080 * 260 = 280,800 loop iterations
# For sector relative: 10,800 * 15 = 162,000
# For getPrice: 1080 * 5 = 5,400

# TOTAL loop iterations: ~450,000 - this should be fine

# BUT WAIT: renderSummary calls getStocks() then maps ALL stocks through getSignal
# getSignal calls getAnalysis which calls getSectorReturn10d
# getSectorReturn10d does: (EXCHANGE_MAP[exch]||[]).filter(...)
# Then for each of 10 sample stocks: genPrices(s, 15) and accesses pr[pr.length-11]
# If genPrices returns only 15 elements, pr.length-11 = 4, which is valid

# The REAL issue: getFundamentalQuality calls genFund(stock)
# genFund uses seededRng which is fine
# BUT genFund references 'exch' in the currency check? No - it checks stock.currency

# Let me check if there's a call to getAnalysis that happens before exch is defined
# getSectorReturn10d uses EXCHANGE_MAP[exch] where exch is a let variable
# At the time renderSummary is called (from init), exch should be 'nse'

# Actually check: the genVolume function - does it exist correctly?
if 'function genVolume(' in js:
    print("genVolume function exists")
    idx = js.find('function genVolume(')
    print(f"  at position {idx}")
    snippet = js[idx:idx+200]
    print(f"  {snippet[:200]}")
else:
    print("BUG: genVolume function MISSING!")

# Check O'Reilly or similar that might break JS
# Look for name:' followed by content with unescaped '
lines = js.split('\n')
for i, line in enumerate(lines):
    if "name:'" in line:
        # Extract everything after name:'
        start = line.find("name:'") + 6
        rest = line[start:]
        # Walk to find matching close quote
        j = 0
        while j < len(rest):
            if rest[j] == "'":
                if j > 0 and rest[j-1] == '\\':
                    j += 1
                    continue
                break
            j += 1
        name_val = rest[:j]
        # Check if there's still an unescaped ' we missed
        # The escaped version is \' - check for ' not preceded by \
        unescaped = re.findall(r"(?<!\\)'", name_val)
        if unescaped:
            print(f"UNESCAPED QUOTE at line {i+1}: {line.strip()[:100]}")

print("\nDone checking.")

# Final check: does the O'Reilly stock exist?
if "O'" in js:
    idx = js.find("O'")
    print(f"Found O' at position {idx}: {repr(js[idx-20:idx+40])}")
