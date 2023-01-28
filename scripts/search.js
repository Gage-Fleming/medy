/* ==========================================================================
search tool code
========================================================================== */

// Get reference to search button
let searchButton = document.getElementById('searchButton');

// Get reference to close button on search field
let closeButton = document.getElementById('closeButton');

// Get reference to search container
let searchContainer = document.getElementById('searchContainer');

// Get a reference to all standard articles
let standArticles = document.querySelectorAll('.standardArticle');

// Get a reference to all timeline articles
let timeArticles = document.querySelectorAll('.timelineArticle');

// Get a reference to all tools
let tools = document.querySelectorAll('.tool');

// Create an article array to hold data for searchable items
let searchArray = [];

/**
 * Loop through all elements that have the class standard article and store the text in these articles in an array of objects. Each object will represent the article
 * in question. The information on the object properties can be found below.
 * 
 * articleNumber: stores the number of the article {Int}
 * author: Stores the author name {String}
 * date: Stores the article date {String}
 * heading: Stores the text in the heading of the article {String}
 * textBlurb: Stores the text in the body of the article {String}
 * type: Used to help javascript decide how to display the return result {String}
 */
for (let i = 0; i < standArticles.length; i++) {
    let currentArticleInfo = standArticles[i].children[1];
    searchArray.push(
        {
            articleNumber: i,
            author: currentArticleInfo.children[2].innerHTML,
            date: currentArticleInfo.children[3].innerHTML,
            heading: currentArticleInfo.children[0].children[0].innerHTML,
            textBlurb: currentArticleInfo.children[1].innerHTML,
            type: 'standard',
        }
    );
}

/**
 * Loop through all elements that have the class timeline article and store the text in these articles in an array of objects. Each object will represent the article
 * in question. The information on the object properties can be found below.
 * 
 * articleNumber: stores the number of the article {Int}
 * heading: Stores the text in the heading of the article {String}
 * textBlurb: Stores the text in the body of the article {String}
 * type: Used to help javascript decide how to display the return result {String}
 * year: Stores the year of the current timeline article {Int}
 */
for (let i = 0; i < timeArticles.length; i++) {
    let currentArticleInfo = timeArticles[i];
    searchArray.push(
        {
            articleNumber: i,
            heading: currentArticleInfo.children[2].children[0].innerHTML,
            textBlurb: currentArticleInfo.children[2].children[1].innerHTML,
            type: 'timeline',
            year: Number(currentArticleInfo.children[0].children[0].innerHTML),
        }
    );
}

/**
 * Loop through all elements that have the class tool and store the header in these tools in an array of objects. Each object will represent the article
 * in question. The information on the object properties can be found below.
 * 
 * heading: Stores the text in the heading of the article {String}
 * toolNumber: stores the number of the article {Int}
 * type: Used to help javascript decide how to display the return result {String}
 */
for (let i = 0; i < tools.length; i++) {
    let currentToolInfo = tools[i];
    searchArray.push(
        {
            heading: currentToolInfo.children[0].children[0].innerHTML,
            toolNumber: i,
            type: 'tool',
        }
    );
}

/**
 * Create onclick listener to add a show class and remove the hide class for the search container when the search button is clicked
 */
searchButton.onclick = function () {
    searchContainer.classList.add('searchContainerShow');
    searchContainer.classList.remove('searchContainerHide');
}

/**
 * Create onclick listener to add a hide class and remove the show class for the search container when the close button is clicked
 */
closeButton.onclick = function () {
    searchContainer.classList.remove('searchContainerShow');
    searchContainer.classList.add('searchContainerHide');
}