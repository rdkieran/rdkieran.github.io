//the header of the site would be handled in this javascript file, so you don't have to copypaste the whole thing onto every page.
//at the bottom of your page, but before the js script calls and the closing body tag, put an empty div with a class of "writeHeader"

const extraBannerImages = ["/img/banner/robbie-1.png","/img/banner/robbie-2.png","/img/banner/robbie-3.png","/img/banner/robbie-4.png","/img/banner/robbie-5.png","/img/banner/robbie-6.png","/img/banner/robbie-7.png","/img/banner/robbie-8.png","/img/banner/robbie-9.png"];

if (Math.floor(Math.random() * 5) > 0) {
    var bannerImage = "/img/banner/default.png";
} else {
    var bannerImage = extraBannerImages[Math.floor(Math.random() * extraBannerImages.length)];
};

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector(".writeHeader").innerHTML = `
    <div class="bannerImage">
        <a href="/index.html"><img src="${bannerImage}" alt="banner" /></a> 
    </div>
    <nav>
        <a href="/index.html">home</a>
        <a href="/about.html">about</a>
        <a href="/comics.html">comics</a>
        <a href="/blog.html">blog</a>
    </nav>
`;
})