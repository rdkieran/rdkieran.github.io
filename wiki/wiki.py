import os
import re
import markdown
from markdown.extensions import fenced_code, tables, nl2br
from markdown.extensions.toc import TocExtension

# Set input and output directories
INPUT_FOLDER = "I:\My Drive\obsidian\wiki"  # Change this to your actual Obsidian vault path
OUTPUT_FOLDER = "wiki/article"

os.makedirs(OUTPUT_FOLDER, exist_ok=True)

# Function to convert Obsidian-specific syntax
def preprocess_obsidian_syntax(md_content):
    # Convert Obsidian wikilinks [[link]] → [link](link.html)
    md_content = re.sub(r"\[\[([^\|\]]+)\]\]", r"[\1](\1.html)", md_content)
    # Convert Obsidian piped links [[link|text]] → [text](link.html)
    md_content = re.sub(r"\[\[([^\|\]]+)\|([^\]]+)\]\]", r"[\2](\1.html)", md_content)
    # Convert ==highlight== to <mark>highlight</mark>
    md_content = re.sub(r"==(.*?)==", r"<mark>\1</mark>", md_content)
    # Convert block references (^block-id) → Just remove them
    md_content = re.sub(r"\^([a-zA-Z0-9-]+)", "", md_content)
    
    # Convert Markdown headings (# Heading → <h1>Heading</h1>)
    md_content = re.sub(r"^# (.+)$", r"<h1>\1</h1>", md_content, flags=re.MULTILINE)
    md_content = re.sub(r"^## (.+)$", r"<h2>\1</h2>", md_content, flags=re.MULTILINE)
    md_content = re.sub(r"^### (.+)$", r"<h3>\1</h3>", md_content, flags=re.MULTILINE)
    md_content = re.sub(r"^#### (.+)$", r"<h4>\1</h4>", md_content, flags=re.MULTILINE)
    md_content = re.sub(r"^##### (.+)$", r"<h5>\1</h5>", md_content, flags=re.MULTILINE)

    return md_content

# Markdown conversion settings
md_extensions = [
    "fenced_code",
    "tables",
    "nl2br",
    TocExtension(permalink=True),
]


# Walk through all subdirectories and process Markdown files
for root, _, files in os.walk(INPUT_FOLDER):
    for filename in files:
        if filename.endswith(".md"):
            input_path = os.path.join(root, filename)

            with open(input_path, "r", encoding="utf-8") as f:
                md_content = f.read()

            # Preprocess Obsidian syntax
            md_content = preprocess_obsidian_syntax(md_content)

            # Convert Markdown to HTML
            html_content = markdown.markdown(md_content, extensions=md_extensions)

            # Generate a clean output filename (remove folder slashes)
            output_filename = filename.replace(".md", ".html")
            output_path = os.path.join(OUTPUT_FOLDER, output_filename)

            # Wrap in HTML template
            output_html = f"""<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="/css/styles.css">
    <title>{filename.replace('.md', '')}</title>
</head>
<body>
    {html_content}
</body>
</html>
"""
            # Save the HTML file
            with open(output_path, "w", encoding="utf-8") as f:
                f.write(output_html)

print("Conversion complete! Check the 'output_html' folder.")
