//the footer of the site would be handled in this javascript file, so you don't have to copypaste the whole thing onto every page.
//at the bottom of your page, but before the js script calls and the closing body tag, put an empty div with a class of "writeFooter"
document.addEventListener('DOMContentLoaded', function() {
document.querySelector(".rarebitCredit").innerHTML = `
    <p><strong>Powered by</strong></p>
    <a href="https://rarebit.neocities.org" target="_blank"><img src="/img/footer/rarebitlogo_small.png" height = "30" /></a>
    `
})