document.addEventListener('DOMContentLoaded', function() {
    // JavaScript code to create and insert the footer
    
    var header = document.createElement('header');
    header.className = 'header';
    header.innerHTML = '<nav><a class="homepage" href="/">Robbie Kieran</a><a class="subpage" href="/">home</a><a class="subpage" href="/about.html">about</a><a class="subpage" href="/blog.html">blog</a><a class="subpage" href="/comics.html">comics</a></nav>';

    var footer = document.createElement('footer');
    footer.className = 'footer';
    footer.innerHTML = '<nav><a><img src="/img/nav/github.png"></a><a><img src="/img/nav/twitter.png"></a><a><img src="/img/nav/instagram.png"></a><a><img src="/img/nav/linkedin.png"></a><a><img src="/img/nav/email.png"></a></nav><p class="copyright">Copyright 2023, Robbie Kieran</p>';
    
    // find header and footer elements in HTML
    var headerElement = document.querySelector('header');
    var footerElement = document.querySelector('footer');

    // append header and footer text to HTML elements
    if (headerElement) {
        headerElement.appendChild(header);
    }
    if (footerElement) {
        footerElement.appendChild(footer);
    }
  });