
// Get a reference to all standard articles
let standArticles = document.querySelectorAll('.standardArticle');

// Get a reference to all timeline articles
let timeArticles = document.querySelectorAll('.timelineArticle');

console.log(timeArticles[0]);

// Create an article array to hold data for searchable items
let searchArray = [];

/**
 * Loop through all elements that have the class standard article and store the text in these articles in an array of objects. Each object will represent the article
 * in question. The information on the object properties can be found below.
 * 
 * articleNumber: stores the number of the article {int}
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
 * Loop through all elements that have the class standard article and store the text in these articles in an array of objects. Each object will represent the article
 * in question. The information on the object properties can be found below.
 * 
 * articleNumber: stores the number of the article {int}
 * author: Stores the author name {String}
 * date: Stores the article date {String}
 * heading: Stores the text in the heading of the article {String}
 * textBlurb: Stores the text in the body of the article {String}
 * type: Used to help javascript decide how to display the return result {String}
 */
for (let i = 0; i < timeArticles.length; i++) {
    let currentArticleInfo = timeArticles[i];
    searchArray.push(
        {
            articleNumber: i,
            heading: currentArticleInfo.children[2].children[0].innerHTML,
            year: currentArticleInfo.children[0].children[0].innerHTML,
            textBlurb: currentArticleInfo.children[2].children[1].innerHTML,
            type: 'timeline',
        }
    );
}

console.log(searchArray);