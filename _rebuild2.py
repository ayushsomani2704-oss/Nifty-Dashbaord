import os

# Read source files
nse = open(r'C:\Users\ayushsom\stock-dashboard\stocks-nse.js', 'r', encoding='utf-8').read()
bse = open(r'C:\Users\ayushsom\stock-dashboard\stocks-bse.js', 'r', encoding='utf-8').read()
nasdaq = open(r'C:\Users\ayushsom\stock-dashboard\stocks-nasdaq.js', 'r', encoding='utf-8').read()
logic = open(r'C:\Users\ayushsom\stock-dashboard\_logic.js', 'r', encoding='utf-8').read()

# Read JUST the HTML template (CSS + body structure) from the current file
# We know the structure starts with <!DOCTYPE html> and the CSS/body ends right before <script>
html = open(r'C:\Users\ayushsom\stock-dashboard\index.html', 'r', encoding='utf-8').read()

# Extract the HTML template: everything from start to first standalone <script>\n
# The CDN is: <script src="https://cdn..."></script> (self-contained, one line)
# The inline script starts after the body HTML

# Find the LAST occurrence of <script> (which should be the inline one)
# Actually find it by looking for <script>\n (inline has newline after opening tag)
pos = html.rfind('<script>\n')
if pos == -1:
    pos = html.rfind('<script>\r\n')

print(f'Last <script> with newline at position: {pos}')

# The HTML template is everything up to and including <script>\n
template_header = html[:pos + len('<script>\n')]

# The footer is just </script>\n</body>\n</html>
template_footer = '\n</script>\n</body>\n</html>\n'

# Check that template_header ends correctly
print(f'Template header ends with: {repr(template_header[-30:])}')
print(f'Template header length: {len(template_header)}')

# Check how many <script tags are in the header
header_scripts = template_header.count('<script')
print(f'Script tags in header: {header_scripts}')

# If there are too many, the file is corrupted. Extract just the CSS+body from the FIRST valid section
if header_scripts > 2:
    print('File corrupted with duplicates. Extracting clean portion...')
    # Find the first </style> and use everything from start to there, then find body
    style_end = html.find('</style>')
    head_end = html.find('</head>', style_end)
    # Find the body content up to first <script> after </head>
    body_start = html.find('<body>', head_end)
    first_inline_script = html.find('<script>', body_start)
    # But wait - that <script> might be another CDN copy. Let's be more precise.
    # Find <script> that is NOT <script src=
    idx = body_start
    while True:
        p = html.find('<script>', idx)
        if p == -1:
            break
        if not html[p:p+20].startswith('<script src=') and not html[p:p+15].startswith('<script src'):
            # Check next few chars after <script>
            after8 = html[p+8:p+12].strip()
            if not after8.startswith('src'):
                first_inline_script = p
                break
        idx = p + 8

    template_header = html[:first_inline_script + len('<script>\n')]
    # Re-count
    header_scripts = template_header.count('<script')
    print(f'After fix - header scripts: {header_scripts}')
    print(f'Header length: {len(template_header)}')

# Build script content
map_line = 'const EXCHANGE_MAP = {nse: NSE_STOCKS, bse: BSE_STOCKS, nasdaq: NASDAQ_STOCKS};'
script_content = nse + '\n\n' + bse + '\n\n' + nasdaq + '\n\n' + map_line + '\n\n' + logic

# Assemble final file
final = template_header + script_content + template_footer

with open(r'C:\Users\ayushsom\stock-dashboard\index.html', 'w', encoding='utf-8') as f:
    f.write(final)

size = os.path.getsize(r'C:\Users\ayushsom\stock-dashboard\index.html')
print(f'\nFinal file: {size} bytes ({size//1024}KB)')
print(f'<script tags: {final.count("<script")}')
print(f'</script> tags: {final.count("</script>")}')
print(f'Backticks: {final.count(chr(96))}')
print(f'Has renderSummary: {"renderSummary()" in final}')
print(f'Has Chart.js: {"chart.js" in final}')
