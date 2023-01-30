/* ==========================================================================
Basic scripts JS
========================================================================== */
/**
 * Basic functions and tools to be used across all pages 
 */

/**
 * Create event listener for when donation button is clicked and create pop-up to alert user
 */
let donationButton = document.getElementById('donate');

donationButton.onclick = () => {
    window.alert('Thank you for your donation!');
};

/**
 * Create event listener for when book buy button is clicked and create pop-up to alert user
 */
let buyBook = document.getElementById('buyBook');

buyBook.onclick = () => {
    window.alert('Thank you for your purchase!');
};

/**
 * Create event listener for when calm button is clicked and create pop-up to alert user
 */
let calmSubscribe = document.getElementById('calmSubscribe');

calmSubscribe.onclick = () => {
    window.alert('Thank you for your subscription!');
};

/* Poll code    
========================================================================== */

// Get reference to all poll buttons
let pollButtons = document.querySelectorAll('.pollButton');
console.log(pollButtons)
// Create variables to hold reference to all poll buttons
let answerOne = pollButtons[0];
let answerTwo = pollButtons[1];
let answerThree = pollButtons[2];
let answerFour = pollButtons[3];

// Create variables to hold fake statistics for all answer in poll.
let answerOneCount = 534;
let answerTwoCount = 213;
let answerThreeCount = 786;
let answerFourCount = 124;

function showPoll() {
    for (let i = 0; i < pollButtons.length; i++) {
        
    }
}

answerOne.onclick = function () {
    answerOneCount++;
    showPoll();
}

answerTwo.onclick = function () {
    answerTwoCount++;
    showPoll();
}

answerThree.onclick = function () {
    answerThreeCount++;
    showPoll();
}

answerFour.onclick = function () {
    answerFourCount++;
    showPoll();
}
