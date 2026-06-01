import re

file_path = r'C:\Users\PC-Core i5\OneDrive\Desktop\hospital-militar\index.html'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Count occurrences of elemento1.png
count = content.count('elemento1.png')

if count > 1:
    # Pattern to match the entire logo section.
    # We look for the specific section that was created.
    # Note: Using a non-greedy match to find the section.
    pattern = re.compile(
        r'<section style="background: white; padding: 2.5rem; border-radius: 16px; margin-bottom: 3rem; box-shadow: 0 4px 20px rgba\(0,0,0,0\.08\);">.*?<\/section>',
        re.DOTALL
    )

    matches = pattern.findall(content)
    if matches:
        # Keep only the first match and remove all subsequent matches
        first_match = matches[0]
        # Replace all occurrences with just the first one
        # Since we want to keep exactly one, we can replace all matches of the pattern
        # with a placeholder or just handle it by replacing all but the first.

        # A simpler way to replace multiple occurrences of the same block with one:
        # Split by the pattern, keep the first part and the first match, then join the rest without the pattern.
        parts = pattern.split(content)
        # parts[0] is before first match, parts[1] is after first match.
        # Since split removes the pattern, the original content was: parts[0] + match1 + parts[1] + match2 + parts[2]...

        # We want: parts[0] + match1 + parts[1] + parts[2] + ...
        # Wait, pattern.split gives only the text between matches.

        # Let's use sub with a count of 1 to replace the first one with a unique token,
        # then remove all others, then put back the token.

        content = pattern.sub(r'__LOGOS_PLACEHOLDER__', content, count=1)
        content = pattern.sub('', content)
        content = content.replace('__LOGOS_PLACEHOLDER__', first_match)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print('Listo')
