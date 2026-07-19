import re

nse = open(r'C:\Users\ayushsom\stock-dashboard\stocks-nse.js', 'r', encoding='utf-8').read()
bse = open(r'C:\Users\ayushsom\stock-dashboard\stocks-bse.js', 'r', encoding='utf-8').read()
nasdaq = open(r'C:\Users\ayushsom\stock-dashboard\stocks-nasdaq.js', 'r', encoding='utf-8').read()
logic = open(r'C:\Users\ayushsom\stock-dashboard\_logic.js', 'r', encoding='utf-8').read()
html = open(r'C:\Users\ayushsom\stock-dashboard\index.html', 'r', encoding='utf-8').read()

# Find everything before the inline <script> and after </script></body></html>
# The CDN tag is <script src="..."></script> — different from inline <script>
# Find inline <script> (the one NOT immediately followed by space+src)
idx = 0
while True:
    pos = html.find('<script>', idx)
    if pos == -1:
        print("ERROR: No inline <script> found")
        break
    # Check if this is followed by src (CDN) or by actual code
    after = html[pos+8:pos+12]
    if after.strip().startswith('src'):
        idx = pos + 8
        continue
    # This is our inline script
    close_pos = html.find('</script>', pos)
    header = html[:pos+8] + '\n'
    footer = '\n</script>' + html[close_pos+9:]
    break

map_line = 'const EXCHANGE_MAP = {nse: NSE_STOCKS, bse: BSE_STOCKS, nasdaq: NASDAQ_STOCKS};'
script = nse + '\n\n' + bse + '\n\n' + nasdaq + '\n\n' + map_line + '\n\n' + logic

final = header + script + footer

with open(r'C:\Users\ayushsom\stock-dashboard\index.html', 'w', encoding='utf-8') as f:
    f.write(final)

print(f'Written: {len(final)} chars ({len(final)//1024}KB)')
print(f'Backticks in final: {final.count(chr(96))}')
# Count <script occurrences
print(f'<script tags: {final.count("<script")}')
print(f'</script> tags: {final.count("</script>")}')
