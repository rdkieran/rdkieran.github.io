# Code modified with the help of OpenAI's ChatGPT

# Description:
# This Python script converts a folder of Obsidian markdown files to a single HTML page,
# maintaining hash references to navigate between the individual markdown files in the Obsidian vault.
# It also converts double square brackets like '[[Link]]' to '<a href="#link">Link</a>',
# and double square brackets with two references like '[[Link|Links]]' to '<a href="#link">Links</a>'.
# Additionally, it corrects specific instances of capitalization, such as "Uss" to "USS" and "Ssss" to "sSss".

# Relevant Notes:
# - The script uses the markdown module to convert the markdown content to HTML.
# - It sorts the markdown files in the folder alphabetically for processing in order.
# - The anchor references for each markdown file are created by converting the file names
#   to lowercase and replacing spaces with underscores.
# - The script assumes the existence of image files in the 'img' folder with corresponding names,
#   which are used to include images in the generated HTML.
# - The corrections dictionary contains specific instances of capitalization to be corrected
#   in the HTML content outside of tag parameters.
# - The script utilizes regular expressions to perform pattern matching and replacements for the conversions.

# Special thanks to OpenAI for their ChatGPT language model, which provided valuable assistance in crafting this code.
# (This description was also ChatGPT, I'm just becoming so lazy)

import os
import re
import markdown

# Enter names in full
corrections = {
    # character names
    "Ssss": "sSss",
    "Sssteven":"sssteven",
    # other terms
    "Uss Voyeur":"USS Voyeur",
    "The Galactic Federation Of Consenting Planets":"The Galactic Federation of Consenting Planets",
    "The Royal Dominion Of Heavenly Bodies":"The Royal Dominion of Heavenly Bodies"
}

def convert_md_to_html(md_content):
    # Convert Markdown content to HTML using the markdown module
    html_content = markdown.markdown(md_content)

    # Convert hrefs in anchor tags to lowercase with underscores replacing spaces
    html_content = re.sub(r'<a class="wikiLink" href="#(.*?)">(.*?)</a>', lambda match: f'<a class="wikiLink" href="#{match.group(1).replace(" ", "_").lower()}">{match.group(2)}</a>', html_content)
    
    return html_content

def process_obsidian_folder(folder_path, img_files):
    # Sort the files in the folder to process them in order
    files = sorted([file for file in os.listdir(folder_path) if file.endswith(".md")])

    article_list_names, article_list_links = [], []
    for file in files:
        articleAnchor = "_".join(os.path.splitext(file)[0].lower().split())
        articleAnchorCapitalised = " ".join(corrections.get(word, word.capitalize()) for word in articleAnchor.split("_"))

        article_list_names.append(articleAnchorCapitalised)
        article_list_links.append(articleAnchor)

    html_content = """<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <link rel="icon" type="image/x-icon" href="/img/favicon.png">
        
        <title>Wiki</title>

        <link rel="stylesheet" href="/css/style.css">

        <script src="/js/wiki.js"></script>
        
        <script src="/js/header.js"></script>
        <script src="/js/footer.js"></script>
    </head>
    <body>
        <header class="writeHeader"></header>

        <article class="wiki" id="content">
            <nav class="wikiNav">wiki navigation: <a href="#home">home</a> | <a href="#characters">characters</a></nav>
            <div id="home" class="wikiEntry">
                <p>Wiki under construction. Links don't always lead anywhere, but the links below do.</p>
                <h2 class="wikiTitle">List of Articles</h2>
                <ul class="wikiArticleList">
"""

    for i in range(len(article_list_names)):
        html_content += f'<li><a href="#{article_list_links[i]}">{article_list_names[i]}</a></li>\n'

    html_content += '''
                </ul>
            </div>
'''

    for file in files:
        with open(os.path.join(folder_path, file), "r", encoding="utf-8") as f:
            md_content = f.read()
            
            # Use the file name as the anchor for the hash reference
            anchor = "_".join(os.path.splitext(file)[0].lower().split())
            anchorCapitalised = " ".join(corrections.get(word, word.capitalize()) for word in anchor.split("_"))

            # Apply corrections to md_content and update the links within the content
            for old_value, new_value in corrections.items():
                md_content = md_content.replace(old_value, new_value)

            md_content = re.sub(r'\[\[([^|\]]+)\|([^]]+)\]\]', r'<a class="wikiLink" href="#\1">\2</a>', md_content)
            md_content = re.sub(r'\[\[(.*?)\]\]', r'<a class="wikiLink" href="#\1">\1</a>', md_content)
            
            # Convert the double square brackets with two references to anchor tags
            md_content = re.sub(r'\[\[(.*?)\|(.*?)\]\]', r'<a class="wikiLink" href="#\1">\2</a>', md_content)

            # Convert the Markdown content to HTML and add hash reference
            if "_".join(anchor.lower().split(" "))+".png" in img_files:
                html_content += f'''
<div id="{anchor}" class="wikiEntry">
    <figure class="wikiDetailsRight">
        <img class="wikiPortrait" src="/img/wiki/{anchor}.png">
    </figure>
    <h2 class="wikiTitle">{anchorCapitalised}</h2>
'''
            else:
                html_content += f'''
<div id="{anchor}" class="wikiEntry">
    <h2 class="wikiTitle">{anchorCapitalised}</h2>
'''
            html_content += convert_md_to_html(md_content) + "\n</div>\n"
    
    html_content += '''
        </article>

        <footer class="writeFooter"></footer>
    </body>
</html>'''

    return html_content

def save_to_file(html_content, output_path):
    # Perform corrections on the HTML content outside of tag parameters
    for old_value, new_value in corrections.items():
        html_content = re.sub(rf'(?<=>){re.escape(old_value)}(?=</)', new_value, html_content)
 
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(html_content)

if __name__ == "__main__":
    # Replace "path/to/obsidian/folder" with the actual folder path containing your Markdown files
    obsidian_folder_path = "wiki/wiki-markdown"
    
    # Replace "output.html" with the desired output file path
    output_file_path = "wiki/index.html"

    img_folder_path = "img/wiki"
    
    # Sort the image files in the folder to process them in order
    img_files = sorted([file for file in os.listdir(img_folder_path) if file.endswith(".png")])
    
    # Process the Obsidian folder and convert it to one HTML page
    html_content = process_obsidian_folder(obsidian_folder_path, img_files)
    
    # Save the HTML content to a file
    save_to_file(html_content, output_file_path)
