import re
js = open(r'C:\Users\ayushsom\stock-dashboard\_check.js', 'r', encoding='utf-8').read()

# Find all name:'...' values and check for unescaped apostrophes
lines = js.split('\n')
issues = []
for i, line in enumerate(lines):
    if "name:'" in line:
        idx = line.find("name:'") + 6
        # Find closing quote (not preceded by backslash)
        j = idx
        while j < len(line):
            if line[j] == "'" and (j == 0 or line[j-1] != '\\'):
                break
            j += 1
        name_val = line[idx:j]
        # Now check if there's content after the first unescaped quote that looks wrong
        # Actually the real test: try to parse symbol:'...',name:'...',sector:'...'
        # Check if the line has the right number of single-quoted fields

# Better approach: just find lines where name field has unescaped ' inside
pattern = re.compile(r"name:'([^'\\]*(?:\\.[^'\\]*)*)'")
for i, line in enumerate(lines):
    if "name:" in line and "'" in line:
        m = pattern.search(line)
        if m is None and "name:'" in line:
            issues.append((i+1, line.strip()[:120]))

print(f"Lines where name pattern fails to match: {len(issues)}")
for ln, text in issues[:20]:
    print(f"  L{ln}: {text}")

# Also check: find any "Dr." or apostrophe names
apos_lines = [(i+1, l.strip()[:100]) for i, l in enumerate(lines) if "name:" in l and ("'s " in l or "Dr." in l or "O'" in l)]
print(f"\nLines with apostrophes/Dr.: {len(apos_lines)}")
for ln, text in apos_lines[:20]:
    print(f"  L{ln}: {text}")
