//the footer of the site would be handled in this javascript file, so you don't have to copypaste the whole thing onto every page.
//at the bottom of your page, but before the js script calls and the closing body tag, put an empty div with a class of "writeFooter"
document.querySelector(".writeFooter").innerHTML = `
    <footer align="center">
        <div class="socialsNav">
            <a target="_blank" href="https://www.patreon.com/rdkieran"><img src="/img/socials/patreon.png" alt="Patreon"></img></a>
            <a target="_blank" href="https://ko-fi.com/rdkieran"><img src="/img/socials/kofi.png" alt="Ko-Fi"></img></a>
            <a target="_blank" href="https://bsky.app/profile/rdkieran.bsky.social"><img src="/img/socials/bluesky.png" alt="BlueSky"></img></a>
            <a target="_blank" href="https://www.instagram.com/rdkieran/"><img src="/img/socials/instagram.png" alt="Instagram"></img></a>
            <a target="_blank" href="https://github.com/rdkieran"><img src="/img/socials/github.png" alt="GitHub"></img></a>
            <a target="_blank" href="https://www.linkedin.com/in/rdkieran/"><img src="/img/socials/linkedin.png" alt="LinkedIn"></img></a>
        </div>
        <p>&copy; 2024 Robbie Kieran</p>
    </footer>
`;