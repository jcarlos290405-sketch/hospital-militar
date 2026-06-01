
file_path = r'C:\Users\PC-Core i5\OneDrive\Desktop\hospital-militar\index.html'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# The user wants to remove the specific floating text "2026 Hospital Militar Dr. Manuel Siverio Castillo"
# that appears outside of the formal footer structure.
# Given the previous Read, it looked like <p>2026 Hospital Militar Dr. Manuel Siverio Castillo</p>
# but might just be the text.

target_text = '2026 Hospital Militar Dr. Manuel Siverio Castillo'

# To be safe and not remove the one inside the new footer, we can look for the one
# that is wrapped in a <p> but NOT inside the newly created footer,
# or simply remove the one that was there before.

# Since we just added a new footer with "2026 Hospital Militar Dr. Manuel Siverio Castillo Excelencia y Disciplina",
# we can specifically target the shorter string that was part of the corrupted old footer.

# Let's replace the specific pattern found in the previous Read: <p>2026 Hospital Militar Dr. Manuel Siverio Castillo</p>
# and also any stray </footer> tags that might be left over from the corruption.

import re

# Remove the specific floating paragraph if it exists
content = content.replace('<p>2026 Hospital Militar Dr. Manuel Siverio Castillo</p>', '')

# Also clean up any orphaned </footer> tags that aren't preceded by <footer>
# This is a bit trickier, but usually we can just replace the corrupted part.
# From the Read output: <p>2026 Hospital Militar Dr. Manuel Siverio Castillo</p></footer>
# Let's just remove the orphaned </footer> tag as well.

# We only want to remove </footer> if there isn't a matching <footer> before it in a way that
# suggests it's a legitimate pair. Since we know we added one pair,
# we can count them.

open_footers = content.count('<footer')
close_footers = content.count('</footer')

if close_footers > open_footers:
    # Remove the first orphaned </footer> found
    content = content.replace('</footer>', '', 1)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print('Listo')
