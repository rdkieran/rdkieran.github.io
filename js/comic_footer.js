//the footer of the site would be handled in this javascript file, so you don't have to copypaste the whole thing onto every page.
//at the bottom of your page, but before the js script calls and the closing body tag, put an empty div with a class of "writeFooter"
document.addEventListener('DOMContentLoaded', function() {
document.querySelector(".writeFooter").innerHTML = `
    <nav class="socialLinks">
        <a href="https://twitter.com/rdkieran" target="_blank"><img src="/img/footer/twitter.png" alt="Twitter"></img></a>
        <a href="https://github.com/rdkieran" target="_blank"><img src="/img/footer/github.png" alt="GitHub"></img></a>
        <a href="https://www.instagram.com/rdkieran/" target="_blank"><img src="/img/footer/instagram.png" alt="Instagram"></img></a>
        <a href="https://www.linkedin.com/in/rdkieran/" target="_blank"><img src="/img/footer/linkedin.png" alt="LinkedIn"></img></a>
        <a href="mailto:rdkieran.illu@gmail.com" target="_blank"><img src="/img/footer/email.png" alt="email"></img></a>
    </nav>
    <p class="copyright">© 2023 Robbie Kieran</p>
    `
})