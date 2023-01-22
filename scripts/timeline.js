/* ==========================================================================
thich-nhat-hanh.html JS
========================================================================== */
/**
 * Please note the intersection obsever code was inspired by the below video.
 * https://www.youtube.com/watch?v=2IbRtjez6ag
 */

// Store variable references to timeArticle class elements and the time image. These
// Are to be manipulated by the intersection observer and setInterval
let timelineArticles = document.querySelectorAll('.timelineArticle');
let timelineImage = document.getElementById('timelineImage');

/**
 * Loops through input array and toggles the show class if element is 
 * intersecting the screen
 * 
 * @param {array} entries - Collection of entries to the intersection observer
 */
const timelineIntersectionCallback = (entries) => {
    for (let i = 0; i < entries.length; i++) {
        entries[i].target.classList.toggle('show', entries[i].isIntersecting);
    }
}

// Define options for the observer
// Ensures the observer only recognizes fully onscreen elements
let options = {
    threshold: 1,
}

// Create Observer object to store intersection observer for timelineArticles
// It stores a reference to the callback timelineIntersectionCallback with the specified options
let observer = new IntersectionObserver(timelineIntersectionCallback, options)

// Apply the observer to each element in the timelineArticles array
timelineArticles.forEach(timelineArticle => {
    observer.observe(timelineArticle);
});

/**
 * Checks if global array timelineArticles has any elements
 * with the class show. If so it changes to the correct baxkground image
 */
function checkShow() {
    for (let i = 0; i < timelineArticles.length; i++) {
        if (timelineArticles[i].classList.contains('show')) {
            switch (i) {
                case 0:
                    timelineImage.src="../images/thich-nhat-hanh-images/1950s.jpg";
                    timelineImage.alt="Thich Nhat Hanh and 5 other monks pose for a photo";
                    break;
                case 1:
                    timelineImage.src="../images/thich-nhat-hanh-images/1962.jpg";
                    timelineImage.alt="Thich Nhat Hanh in the midts of teaching a class full of children";
                    break;
                case 2:
                    timelineImage.src="../images/thich-nhat-hanh-images/1966.jpg";
                    timelineImage.alt="Young monks posing for the camera in traditional monk clothing";
                    break;
                case 3:
                    timelineImage.src="../images/thich-nhat-hanh-images/1967.jpg";
                    timelineImage.alt="Martin Luther King and Thich Nhat Hanh listing to a conversation";
                    break;
                case 4:
                    timelineImage.src="../images/thich-nhat-hanh-images/1982.jpg";
                    timelineImage.alt="A forest pathway with monks in the midts of a communcal meditation";
                    break;
                case 5:
                    timelineImage.src="../images/thich-nhat-hanh-images/2014.jpg";
                    timelineImage.alt="An aged Thich Nhat Hanh poses for a photo";
                    break;
                case 6:
                    timelineImage.src="../images/thich-nhat-hanh-images/2022.jpg";
                    timelineImage.alt="Thich Nhat Hanh pictured meditating on his poems";
                    break;
                default:
            }
        }
    }
}

// Define timelineInterval to store a reference to the setInterval that calls checkShow every half-second
let timelineInterval = setInterval(checkShow, 500);

// If the user is on the page thich-nhat-hanh.html then apply timelineInterval 
// which calls the checkShow function every half-second to see which article is showing.
// Otherwise, clear the current set interval
if (document.URL.includes('thich-nhat-hanh.html')) {
    timelineInterval;
} else {
    clearInterval(timelineInterval);
}
