import re

file_path = r'C:\Users\PC-Core i5\OneDrive\Desktop\hospital-militar\index.html'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

logos_section = '''
<section style="background: white; padding: 2.5rem; border-radius: 16px; margin-bottom: 3rem; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
    <div style="display: flex; justify-content: center; align-items: center; gap: 3rem; flex-wrap: wrap;">
        <img src="./img/elemento1.png" style="height: 80px; width: auto; object-fit: contain;">
        <img src="./img/elemento2.png" style="height: 80px; width: auto; object-fit: contain;">
        <img src="./img/elemento3.png" style="height: 80px; width: auto; object-fit: contain;">
        <img src="./img/elemento4.png" style="height: 80px; width: auto; object-fit: contain;">
        <img src="./img/elemento5.png" style="height: 80px; width: auto; object-fit: contain;">
    </div>
</section>
'''

# We search for the opening footer tag (which may have attributes) and replace it with the logos section + the original tag.
# Using regex to find the exact opening tag <footer ... >
pattern = re.compile(r'(<footer[^>]*>)')
content = pattern.sub(r'\1' + logos_section.strip() + '\n' + r'\1', content)
# Wait, the prompt says "reemplazar la etiqueta de apertura footer por esa seccion de logos seguida de la etiqueta footer"
# This usually means: [Opening Footer Tag] -> [Logos Section] [Opening Footer Tag]
# However, if I just replace the tag with the section + tag, it just shifts the section above the footer.

# Correct interpretation of "replace opening footer tag with logos section followed by footer tag":
# Old: <footer ...>
# New: <section ...>...</section><footer ...>

content = pattern.sub(r' ' + logos_section.strip() + '\n\1', content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print('Listo')
