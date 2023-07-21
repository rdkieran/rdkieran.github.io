//the header of the site would be handled in this javascript file, so you don't have to copypaste the whole thing onto every page.
//at the bottom of your page, but before the js script calls and the closing body tag, put an empty div with a class of "writeHeader"

const extraBannerImages = ["/img/banner/default.png","/img/banner/robbie-1.png","/img/banner/robbie-2.png","/img/banner/robbie-3.png","/img/banner/robbie-4.png","/img/banner/robbie-5.png","/img/banner/robbie-6.png","/img/banner/robbie-7.png","/img/banner/robbie-8.png","/img/banner/robbie-9.png"];

if (Math.floor(Math.random() * 3) > 0) {
    var bannerImage = "/img/banner/default.png";
} else {
    var bannerImage = extraBannerImages[Math.floor(Math.random() * extraBannerImages.length)];
};

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector(".writeHeader").innerHTML = `
    <a href="/"><img src="${bannerImage}" alt="banner" class="bannerImage" /></a> 
    <nav>
        <a href="/">home</a>
        <a href="/about">about</a>
        <a href="/about">windowed mode (WIP)</a>
    </nav>
`;
})

/* old links to comics and blog indices, now found on main index
        <a href="/comics.html">comics</a>
        <a href="/blog.html">blog</a>
*/