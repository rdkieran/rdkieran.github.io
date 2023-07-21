
document.addEventListener('DOMContentLoaded', function() {
    toggleBlog();
    toggleComic();
    toggleWiki();
})

function toggleLatest() {
    var x = document.getElementById("latest");
    var y = document.getElementById("latestButton");
    
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.opacity = "100%";
    } else {
        x.style.display = "none";
        y.style.opacity = "50%";
    }
}
function toggleComic() {
    var x = document.getElementById("comic");
    var y = document.getElementById("comicButton");
    
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.opacity = "100%";
    } else {
        x.style.display = "none";
        y.style.opacity = "50%";
    }
}
function toggleBlog() {
    var x = document.getElementById("blog");
    var y = document.getElementById("blogButton");
    
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.opacity = "100%";
    } else {
        x.style.display = "none";
        y.style.opacity = "50%";
    }
}
function toggleWiki() {
    var x = document.getElementById("wiki");
    var y = document.getElementById("wikiButton");
    
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.opacity = "100%";
    } else {
        x.style.display = "none";
        y.style.opacity = "50%";
    }
}