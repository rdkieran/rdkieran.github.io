//the footer of the site would be handled in this javascript file, so you don't have to copypaste the whole thing onto every page.
//at the bottom of your page, but before the js script calls and the closing body tag, put an empty div with a class of "writeFooter"
document.addEventListener('DOMContentLoaded', function() {
document.querySelector(".writeFooter").innerHTML = `
    <nav class="socialLinks">
        <a href="https://twitter.com/rdkieran" target="_blank">X</a> //
        <a href="https://bsky.app/profile/rdkieran.bsky.social" target="_blank">BlueSky</a> //
        <a href="https://github.com/rdkieran" target="_blank">GitHub</a> //
        <a href="https://www.instagram.com/rdkieran/" target="_blank">Instagram</a> //
        <a href="mailto:rdkieran.illu@gmail.com" target="_blank">eMail</a>
    </nav>
    <p class="copyright">© 2023 Robbie Kieran</p>
    `
})

// ALL LINKS W/ HTML

// TWITTER
// <a href="https://twitter.com/rdkieran" target="_blank"><img src="/img/footer/twitter.png" alt="Twitter"></img></a>
// BLUESKY
// <a href="https://bsky.app/profile/rdkieran.bsky.social" target="_blank"><img src="" alt="Bluesky"></img></a>
// INSTAGRAM
// <a href="https://www.instagram.com/rdkieran/" target="_blank"><img src="/img/footer/instagram.png" alt="Instagram"></img></a>

// GITHUB
// <a href="https://github.com/rdkieran" target="_blank"><img src="/img/footer/github.png" alt="GitHub"></img></a>

// LINKEDIN
// <a href="https://www.linkedin.com/in/rdkieran/" target="_blank"><img src="/img/footer/linkedin.png" alt="LinkedIn"></img></a>
// EMAIL
// <a href="mailto:rdkieran.illu@gmail.com" target="_blank"><img src="/img/footer/email.png" alt="email"></img></a>