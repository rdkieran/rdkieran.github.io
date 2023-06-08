//the footer of the site would be handled in this javascript file, so you don't have to copypaste the whole thing onto every page.
//at the bottom of your page, but before the js script calls and the closing body tag, put an empty div with a class of "writeFooter"
document.querySelector(".writeFooter").innerHTML = `
    <footer align="center">
        <nav class="socialLinks">
        <a href=""><img src="" alt="Twitter"></img></a>
        <a href=""><img src="" alt="Instagram"></img></a>
        <a href=""><img src="" alt="Ko-Fi"></img></a>
        <a href=""><img src="" alt="Patreon"></img></a>
        <a href=""><img src="" alt="LinkedIn"></img></a>
        <a href="mailto:rdkieran.illu@gmail.com"><img src="" alt="email"></img></a>
        <p><strong>Powered by</strong></p>
        <a href="https://rarebit.neocities.org"><img src="img/rarebitlogo_small.png" height = "30" /></a>
    </footer>
`;
