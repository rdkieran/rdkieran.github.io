document.addEventListener("DOMContentLoaded", function() {
  // Get all article divs for the blog section
  const blogEntries = document.querySelectorAll(".blogPost");

  // Show Article 1 of the blog section by default
  blogEntries[0].style.display = "block";

  // Get all article divs for the wiki section
  const wikiEntries = document.querySelectorAll(".wikiEntry");

  // Show Article 1 of the wiki section by default
  wikiEntries[0].style.display = "block";

  // Function to show the target article and update the URL hash for both sections
  function showArticle(targetId) {
    blogEntries.forEach(function(article) {
      if (article.id === targetId) {
        article.style.display = "block";
      } else {
        article.style.display = "none";
      }
    });

    wikiEntries.forEach(function(article) {
      if (article.id === targetId) {
        article.style.display = "block";
      } else {
        article.style.display = "none";
      }
    });

    // Determine the section and use the appropriate identifier in the URL hash
    const identifier = targetId.startsWith("wiki_") ? "@" : "#";
    window.location.hash = identifier + targetId;
  }

  // Function to handle hash changes for both sections
  function handleHashChange() {
    const hash = window.location.hash;
    if (hash.startsWith("#") || hash.startsWith("@")) {
      const targetId = hash.substring(1);
      showArticle(targetId);
    }
  }

  // Add click event listeners to the navigation links for both sections
  const links = document.querySelectorAll("article a");
  links.forEach(function(link) {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      let targetId = this.getAttribute("href").substring(1);
      if (targetId.startsWith("@")) {
        targetId = "wiki_" + targetId.substring(1); // Add "wiki_" for wiki section
      }
      showArticle(targetId);
    });
  });

  // Handle initial hash on page load for both sections
  if (window.location.hash) {
    handleHashChange();
  }

  // Handle hash changes in the URL for both sections
  window.addEventListener("hashchange", handleHashChange);
});
