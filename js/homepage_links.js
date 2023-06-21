// update for latest comic page series and number
// ss2 = space story 2 ; le = loose ends
const latestComicUpdate = 'ss2'
const latestComicPageNumber = 49;
// const comicTitle = "Space Story II";

// update for latest blog post
const latestBlogPostName = 'making_a_website_ii';
const blogTitle = "Making a Website II: Revenge of World";
const blogQuote = "Blog!!";
const postDate = "20 Jun 2023";

const comicPageURL = `/comics/space_story_2.html?pg=${latestComicPageNumber}#showComic`;
const comicPageImage = `/img/comics/${latestComicUpdate}/pg${latestComicPageNumber}.png`;
const blogPostURL = `/blog/2023/${latestBlogPostName}.html`;
const blogPostImage = `/img/blog/${latestBlogPostName}/header_illustration.png`;

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector(".indexPage").innerHTML = `
        <a href="${comicPageURL}" class="contentLink">
            <article class="contentLatest">
                <img src=${comicPageImage} class="contentImage"></img>
            </article>
        </a>
        <a href="${blogPostURL}" class="contentLink">
            <article class="contentLatest">
                <img src=${blogPostImage} class="contentImage"></img>
                <h3 class="contentTitle"><span class="postDate">${postDate}</span> ${blogTitle}</h3>
            </article>
        </a>
        `
    });
    
// <div class="descriptionIndex"><h3>Comic: ${comicTitle}</h3></div>
// <div class="descriptionIndex"><h3>Blog: ${blogTitle}</h3></div>

// <p class="contentDescription">${blogQuote}</p>