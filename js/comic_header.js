//the header of the site would be handled in this javascript file, so you don't have to copypaste the whole thing onto every page.
//at the bottom of your page, but before the js script calls and the closing body tag, put an empty div with a class of "writeHeader"
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector(".writeHeader").innerHTML = `
    <header align="center">
        <div id="nav">
            <a href="/index.html">home</a>
            <a href="/about.html">about</a>
            <a href="/comics.html">comics</a>
            <a href="/blog.html">blog</a>
        </div>
    </header>
`;
})