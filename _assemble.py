"""
Assembles the stock dashboard from:
1. A hardcoded HTML template (CSS + body structure)
2. stocks-nse.js, stocks-bse.js, stocks-nasdaq.js (data)
3. _logic.js (application logic)
"""

# Read data files
nse = open(r'C:\Users\ayushsom\stock-dashboard\stocks-nse.js', 'r', encoding='utf-8').read()
bse = open(r'C:\Users\ayushsom\stock-dashboard\stocks-bse.js', 'r', encoding='utf-8').read()
nasdaq = open(r'C:\Users\ayushsom\stock-dashboard\stocks-nasdaq.js', 'r', encoding='utf-8').read()
logic = open(r'C:\Users\ayushsom\stock-dashboard\_logic.js', 'r', encoding='utf-8').read()

map_line = 'const EXCHANGE_MAP = {nse: NSE_STOCKS, bse: BSE_STOCKS, nasdaq: NASDAQ_STOCKS};'
script_content = nse + '\n\n' + bse + '\n\n' + nasdaq + '\n\n' + map_line + '\n\n' + logic

# The HTML template - read from separate file
template = open(r'C:\Users\ayushsom\stock-dashboard\_template.html', 'r', encoding='utf-8').read()

# Replace the placeholder
final = template.replace('/* SCRIPT_CONTENT_PLACEHOLDER */', script_content)

with open(r'C:\Users\ayushsom\stock-dashboard\index.html', 'w', encoding='utf-8') as f:
    f.write(final)

import os
size = os.path.getsize(r'C:\Users\ayushsom\stock-dashboard\index.html')
print(f'Written: {size} bytes ({size//1024}KB)')
print(f'<script count: {final.count("<script")}')
print(f'</script> count: {final.count("</script>")}')
