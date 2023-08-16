writeNav(true);

console.log(pg)

writePageTitle(".writePageTitle", true, " - ");
writePageClickable(".writePageClickable",true);
writeAuthorNotes(".writeAuthorNotes");
keyNav();

function writePageClickable(div,clickable) {
    if (!clickable) {
        document.querySelector(div).innerHTML = `<div class="currentPage">${writePage()}</div>`;
    } else if (pg < maxpg) {
        document.querySelector(div).innerHTML = `<div class="currentPage"><a href="?pg=${pg + 1}${navScrollTo}"/>${writePage()}</a></div>`;
    } else {
        document.querySelector(div).innerHTML = `<div class="currentPage">${writePage()}</div>`;
    }
}

function writePageTitle(div,toggleNum, char) {
  if (pgData.length >= pg) {
    document.querySelector(div).innerHTML = `<h1>${pgData[pg - 1].title}</h1>`;
    if (toggleNum) {
        document.querySelector(div).innerHTML = `<h1>${pgData[pg - 1].title}</h1>`;
    }
  }
}

function writeAuthorNotes(div) {
  if (pgData.length >= pg) {
    return document.querySelector(div).innerHTML = `${pgData[pg-1].authorNotes}`
  }
}

function writePage() {
  let partExtension = "";
  let altText = "";
  let path = (folder != "" ? folder + "/" : "") + image + pg + partExtension + "." + ext;
  let page = ``;

  if (pgData.length < pg) {
    console.log("page code to insert - " + page);
    console.log("alt text to print - " + altText);
    
    page = `<img alt="` + altText + `" title="` + altText + `" src="` + path + `" />`;
    return page;
  } else if (pgData.length >= pg) { 

    altText = pgData[pg - 1].altText; 

    if (pgData[pg-1].imageFiles > 1) { 
    for (let i = 1; i < pgData[pg-1].imageFiles+1; i++) {
      partExtension = imgPart + i.toString();
      path = (folder != "" ? folder + "/" : "") + image + pg + partExtension + "." + ext;
      if (i > 1) {page += `<br/>`}
      page += `<img alt="` + altText + `" title="` + altText + `" src="` + path + `" />`; 
      }
    } else {
      page = `<img alt="` + altText + `" title="` + altText + `" src="` + path + `" />`;
    }

    console.log("page code to insert - " + page);
    console.log("alt text to print - " + altText);

    return page;
  }
}

console.log("array blank/not long enough? " + (pgData.length < pg));
console.log("array length - " + pgData.length);
console.log("current page - " + pg);
console.log("number of page segments - " + pgData[pg-1].imageFiles);
console.log("alt text - " + `"` + pgData[pg - 1].altText + `"`);

console.log("nav text - " + navText);
console.log("nav image file extension - " + navExt);

function imgOrText(setImg,navTextSet) {
  if (setImg) {
    return `<img src="` + navFolder + `/nav_` + navText[navTextSet].toLowerCase() + `.` + navExt + `" alt="` + navText[navTextSet] + `" />`;
  } else {
    return navText[navTextSet];
  }
}

function writeNav(imageToggle) {
    let writeNavDiv = document.querySelectorAll(".writeNav");
    writeNavDiv.forEach(function(element) {
      element.innerHTML = `<div class="comicNav">
        ${firstButton()}
        ${divider()}
        ${prevButton()}
        ${divider()}
        ${nextButton()}
        ${divider()}
        ${lastButton()}
        </div>
        `;})

    function firstButton() {
        if (pg > 1) {
            return `<a href="?pg=` + 1 + navScrollTo + `"/>` + imgOrText(imageToggle, 0) + `</a>`;
        } else {
            if (!imageToggle) {
                return imgOrText(imageToggle, 0);
            } else {
                return ``;
            }
        }
    }

    function divider() {
        if (!imageToggle) {
            return ` | `;
        }
        return ``;
    }

    function prevButton() {
        if (pg > 1) {
            return `<a href="?pg=` + (pg - 1) + navScrollTo + `"/>` + imgOrText(imageToggle, 1) + `</a>`;
        } else {
            if (!imageToggle) {
                return imgOrText(imageToggle, 1);
            } else {
                return ``;
            }
        }
    }

    function nextButton() {
        if (pg < maxpg) {
            return `<a href="?pg=` + (pg + 1) + navScrollTo + `"/>` + imgOrText(imageToggle, 2) + `</a>`;
        } else {
            if (!imageToggle) {
                return imgOrText(imageToggle, 2);
            } else {
                return ``;
            }
        }
    }

    function lastButton() {
        if (pg < maxpg) {
            return `<a href="?pg=` + maxpg + navScrollTo + `"/>` + imgOrText(imageToggle, 3) + `</a>`;
        } else {
            if (!imageToggle) {
                return imgOrText(imageToggle, 3);
            } else {
                return ``;
            }
        }
    }
}

//KEYBOARD NAVIGATION
function keyNav() {
  document.addEventListener("keydown", (e) => {
  if ((e.key == 'ArrowRight' || e.key.toLowerCase() == 'd') && pg < maxpg) { //right arrow or D goes to next page
    window.location.href = "?pg=" + (pg + 1) + navScrollTo;
  } else if ((e.key == "ArrowLeft" || e.key.toLowerCase() == "a") && pg > 1) { //left arrow or A goes to previous page
    window.location.href = "?pg=" + (pg - 1) + navScrollTo;
  } else if (e.key.toLowerCase() == "w") { //W scrolls up
    window.scrollBy({ top: -30 });
  } else if (e.key.toLowerCase() == "s") { //S scrolls down
    window.scrollBy({ top: 30 });
  }
});};
