// SELF-DESTRUCT SEQUENCE //

let pg = Number(findGetParameter("pg")); //make "pg" mean the current page number (this line doesnt work unless I put it here, if you're inexperienced with js dont worry about it)

const maxpg = 66; // UPDATE FOR EACH NEW PAGE

// COMIC PAGE SETTINGS
const folder = "/img/comics/sds"; //comic directory
const image = "pg"; //filename prefix (ie pg1, pg2, etc)
const imgPart = "_" //special character for multi-file page (ie pg2_1, pg2_2, etc)
const ext = "png"; //file extension of your comic pages

//THUMBNAIL SETTINGS
//const thumbFolder = "img/thumbs" //thumbnail directory
//const thumbExt = "png" //file extension of thumbnails
//const thumbDefault = "default" //name of default thumbnail file

//NAVIGATION SETTINGS
const navText = ["First","Previous","Next","Last"]; //alt text for your nav images
const navFolder = "/img/comicnav"; //directory where nav images are stored
const navExt = "png" //file extension of nav images
const navScrollTo = "#showComic"; //id of the div you want the page to automatically scroll to

//if (pg == 0) {pg = maxpg} //display MOST RECENT PAGE
if (pg == 0) {pg = 1;} //display FIRST PAGE

//pgData holds all the parameters for each of your pages. copypaste this and fill out accordingly:
/* 
    {
        pgNum: ,
        title: "",
        date: writeDate([YEAR],[MONTH],[DAY]),
        altText: "",
        imageFiles: "",
        authorNotes: ``
    },
*/
//Note: the formatting is important! The whole thing won't show up if you forget to include the commas or curly braces in the right place.

const pgData = [
//    {
//        pgNum: 1,
//        title: "The First Page Title", 
//        date: writeDate(2021, 3, 16),
//        altText: "Here's some alt text!", 
//        imageFiles: 1,
//        authorNotes: `
//            <p></p>
//            `,
//    },
];

//below is a function you dont rly need to mess with but if you're more experienced with js you can

function findGetParameter(parameterName) { //function used to write a parameter to append to the url, to give each comic page its own unique url
    let result = null,
    tmp = []; 
    let items = location.search.substr(1).split("&");
    for (let index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}

function writeDate(year,month,day) { //write date of comic page
    const date = new Date(year,month-1,day)
    .toDateString() //format date as Day Month Date Year
    .toString() //convert it to a string
    .slice(4) //remove the Day
    return date
}
