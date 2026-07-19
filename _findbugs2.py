import re
js = open(r'C:\Users\ayushsom\stock-dashboard\_check.js', 'r', encoding='utf-8').read()

lines = js.split('\n')

# Find lines that have a closing } but no comma, followed by a line with opening {
# This catches missing commas between array elements
issues = []
for i in range(len(lines)-1):
    line = lines[i].rstrip()
    next_line = lines[i+1].strip()
    if line.endswith('}') and not line.endswith('},') and not line.endswith('};') and next_line.startswith('{symbol:'):
        issues.append((i+1, line.strip()[:100]))

print(f"Missing commas between stock objects: {len(issues)}")
for ln, text in issues[:20]:
    print(f"  L{ln}: {text}")

# Check for any line with basePrice that doesn't end with }, or }
price_issues = []
for i, line in enumerate(lines):
    stripped = line.rstrip()
    if 'basePrice:' in stripped:
        if not stripped.endswith('},') and not stripped.endswith('}') and not stripped.endswith('}];'):
            price_issues.append((i+1, stripped[-60:]))

print(f"\nStock lines with unusual endings: {len(price_issues)}")
for ln, text in price_issues[:20]:
    print(f"  L{ln}: ...{text}")

# Check for the specific line around L132 (GlaxoSmithKline) which had no comma in the output
print(f"\nLine 131-134:")
for i in range(130, min(134, len(lines))):
    print(f"  L{i+1}: {lines[i].rstrip()}")
