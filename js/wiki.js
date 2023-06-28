document.addEventListener("DOMContentLoaded", function() {
    // Get all article divs
    const wikiEntries = document.querySelectorAll(".wikiEntry");
  
    // Show Article 1 by default
    wikiEntries[0].style.display = "block";
  
    // Function to show the target article and update the URL hash
    function showArticle(targetId) {
      wikiEntries.forEach(function(article) {
        if (article.id === targetId) {
          article.style.display = "block";
        } else {
          article.style.display = "none";
        }
      });
      window.location.hash = targetId;
    }
  
    // Function to handle hash changes
    function handleHashChange() {
      const targetId = window.location.hash.substring(1);
      showArticle(targetId);
    }
  
    // Add click event listeners to the navigation links
    const links = document.querySelectorAll("article a");
    links.forEach(function(link) {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        showArticle(targetId);
      });
    });
  
    // Handle initial hash on page load
    if (window.location.hash) {
      handleHashChange();
    }
  
    // Handle hash changes in the URL
    window.addEventListener("hashchange", handleHashChange);
  });
  