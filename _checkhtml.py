html = open(r'C:\Users\ayushsom\stock-dashboard\index.html', 'r', encoding='utf-8').read()

# Find script tag boundaries
idx1 = html.find('<script>')
idx2 = html.find('</script>')
print(f'First script tag at: {idx1}')
print(f'First /script at: {idx2}')

# Count script tags
count_open = html.count('<script>')
count_close = html.count('</script>')
print(f'Script tags: {count_open} open, {count_close} close')

# Check chart.js CDN
has_cdn = 'cdn.jsdelivr' in html
print(f'Has Chart.js CDN: {has_cdn}')

# If CDN is before the main script, good. If not, that's the issue
cdn_idx = html.find('cdn.jsdelivr')
print(f'CDN at char: {cdn_idx}')
print(f'Main script at char: {idx1}')

if cdn_idx > idx1 or cdn_idx == -1:
    print('BUG: Chart.js CDN is AFTER or MISSING from the main script! Charts wont work.')

# Check the HTML head section
head_end = html.find('</head>')
print(f'</head> at: {head_end}')
print(f'Content between first <script> and CDN region:')
# Find all script src references
import re
srcs = re.findall(r'<script src="([^"]+)"', html)
print(f'External scripts: {srcs}')

# Check if the regex replacement ate the chart.js script tag
chart_tag = '<script src="https://cdn.jsdelivr.net/npm/chart.js'
if chart_tag in html:
    print('Chart.js tag EXISTS in HTML')
else:
    print('BUG: Chart.js tag is MISSING! The regex replacement removed it!')
