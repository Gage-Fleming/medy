/* ==========================================================================
search tool code
========================================================================== */

// Get reference to search button
let searchButton = document.getElementById('searchButton');

// Get reference to close button on search field
let closeButton = document.getElementById('closeButton');

// Get reference to search container
let searchContainer = document.getElementById('searchContainer');

// Get reference to search text input
let searchBar = document.getElementById('searchBar');

// Get Reference to results div to store positive search results
let results = document.getElementById('results');

// Get a reference to all standard articles
let standArticles = document.querySelectorAll('.standardArticle');

// Get a reference to all timeline articles
let timeArticles = document.querySelectorAll('.timelineArticle');

// Get a reference to all tools
let tools = document.querySelectorAll('.tool');

// Create empty variable to store reference to all .searchLink elements. This is to be updated whenever the user types in the search bar
let searchLinks;

// Create an article array to hold data for searchable items
let searchArray = [];

/**
 * Loop through all elements that have the class standard article and store the text in these articles in an array of objects. Each object will represent the article
 * in question. The information on the object properties can be found below.
 * 
 * author: Stores the author name {String}
 * date: Stores the article date {String}
 * heading: Stores the text in the heading of the article {String}
 * number: stores the number of the article {Int}
 * textBlurb: Stores the text in the body of the article {String}
 * type: Used to help javascript decide how to display the return result {String}
 */
for (let i = 0; i < standArticles.length; i++) {
    let currentArticleInfo = standArticles[i].children[1];
    searchArray.push(
        {
            author: currentArticleInfo.children[2].innerHTML,
            date: currentArticleInfo.children[3].innerHTML,
            heading: currentArticleInfo.children[0].children[0].innerHTML,
            number: i,
            textBlurb: currentArticleInfo.children[1].innerHTML,
            type: 'standard',
        }
    );
}

/**
 * Loop through all elements that have the class timeline article and store the text in these articles in an array of objects. Each object will represent the article
 * in question. The information on the object properties can be found below.
 * 
 * heading: Stores the text in the heading of the article {String}
 * number: stores the number of the article {Int}
 * textBlurb: Stores the text in the body of the article {String}
 * type: Used to help javascript decide how to display the return result {String}
 * year: Stores the year of the current timeline article {String}
 */
for (let i = 0; i < timeArticles.length; i++) {
    let currentArticleInfo = timeArticles[i];
    searchArray.push(
        {
            heading: currentArticleInfo.children[2].children[0].innerHTML,
            number: i,
            textBlurb: currentArticleInfo.children[2].children[1].innerHTML,
            type: 'timeline',
            year: currentArticleInfo.children[0].children[0].innerHTML,
        }
    );
}

/**
 * Loop through all elements that have the class tool and store the header in these tools in an array of objects. Each object will represent the article
 * in question. The information on the object properties can be found below.
 * 
 * heading: Stores the text in the heading of the article {String}
 * number: stores the number of the article {Int}
 * type: Used to help javascript decide how to display the return result {String}
 */
for (let i = 0; i < tools.length; i++) {
    let currentToolInfo = tools[i];
    searchArray.push(
        {
            heading: currentToolInfo.children[0].children[0].innerHTML,
            number: i,
            type: 'tool',
        }
    );
}

/**
 * Create function that adjusts the classlist of the search container. Which removes the show class and applies the hide class
 */
function hideSearchContainer() {
    searchContainer.classList.remove('searchContainerShow');
    searchContainer.classList.add('searchContainerHide');
    // Clear the search box if search container is being hidden.
    searchBar.value = '';
    // TODO Also clear any html from results
}

/**
 * Create function that adjusts the classlist of the search container. Which removes the hide class and applies the show class
 */
function showSearchContainer() {
    searchContainer.classList.add('searchContainerShow');
    searchContainer.classList.remove('searchContainerHide');
}

/**
 * Create onclick listener that calls the function showSearch Container when the search button is clicked
 */
searchButton.onclick = showSearchContainer;

/**
 * Create onclick listener that calls the function hideSearch Container when the close button is clicked
 */
closeButton.onclick = hideSearchContainer;

/**
 * Create event listener to track when input is entered into the search bar. When input is entered update the results to show items that contain the input wording
 */
searchBar.addEventListener('input', e => {
    const USERINPUT = e.target.value;
    results.innerHTML = '';
    for (let i = 0; i < searchArray.length; i++) {
        for (const key in searchArray[i]) {
            let currentValue = searchArray[i][key];
            if (typeof currentValue === 'string' && currentValue.includes(USERINPUT)) {
                results.innerHTML += `
                <div class="result">
                    <a class="searchLink" href="#standardArticle${i+1}"><h3>${searchArray[i]['heading']}</h3></a>
                </div>`;
            }
        }
    }

    // Every time the user types, reassign the showing links to searchLinks and add an event listener that closer to searchContainer if the link is clicked
    searchLinks = document.querySelectorAll('.searchLink');
    for (let i = 0; i < searchLinks.length; i++) {
        searchLinks[i].addEventListener('click', () => {
            hideSearchContainer();
        });
    }
})