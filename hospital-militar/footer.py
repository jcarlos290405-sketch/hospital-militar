import re

file_path = r'C:\Users\PC-Core i5\OneDrive\Desktop\hospital-militar\index.html'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Check if there is any <footer tag in the content
if '<footer' not in content:
    footer_html = '''
<footer style="background-color: #001f3f; color: white; text-align: center; padding: 2rem; margin-top: 2rem;">
    <p>2026 Hospital Militar Dr. Manuel Siverio Castillo Excelencia y Disciplina</p>
</footer>
'''
    # Insert before </body>
    if '</body>' in content:
        content = content.replace('</body>', footer_html + '</body>')
    else:
        # Fallback if </body> is missing
        content += footer_html

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print('Listo')
