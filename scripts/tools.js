/* ==========================================================================
tools.html Code
========================================================================== */

/**
 * Please note this code was inspired by the below walkthrough:
 * https://css-tricks.com/how-to-create-an-animated-countdown-timer-with-html-css-and-javascript/
 */

// Declare the variables to references to all the elements in the user form
let meditationFormSubmit = document.getElementById('meditationFormSubmit');
let soundTypeOptions = document.querySelectorAll('input[name="sounds"]');
let durationSelector = document.getElementById('duration');
let intervalBellSelector = document.getElementById('intervalBell');
let bellVolumeSelector = document.getElementById('sound');

// Decalre variables that will hold the value of the elements in the user form
// Any time variable is to be stored in seconds
let soundType;
let duration;
// Make interval default to null in the case no bells is selected.
let interval = null;
let volume;

/**
 * 
 * @param {Number} time - a Time in seconds
 * @returns {String} - The input time formatted in MM:SS format.
 * 
 * Please note this function was taken almost directly from 
 * https://css-tricks.com/how-to-create-an-animated-countdown-timer-with-html-css-and-javascript/
 * 
 */
function formatTime(time) {
    // Retrieve the largest round number when dividing the input time in seconds to get the current minute
    let minutes = String(Math.floor(time / 60));

    // Reteieve the seconds left by getting the remainder of modulo 60
    let seconds = String(time % 60);

    // If seconds is less than 10 add a leading zero for formatting
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    // Output the remaining time in MM:SS
    return `${minutes}:${seconds}`
}

console.log(formatTime(654));

meditationFormSubmit.onclick = function() {
    // Get the sound type the user has selected from radio buttons
    for (let i = 0; i < soundTypeOptions.length; i++) {
        if (soundTypeOptions[i].checked) {
            soundType = soundTypeOptions[i].value;
            break;
        }
    }

    // Retrieve the selected duration and convert it to seconds
    duration = Number(durationSelector.value.slice(0, 3)) * 60;
    
    // Check to see if user selected no bells. If so leave value of interval as null.
    // Otherwise, get seconds of chosen interval
    if (intervalBellSelector.value == "No Bells") {

    } else {
        interval = intervalBellSelector.value.slice(0, 3) * 60;
    };

    // Get volume user has selected
    volume = bellVolumeSelector.value;
};
/* ==========================================================================
Section comment block
========================================================================== */

/* Sub-section comment block
========================================================================== */

/**
 * Short description using Doxygen-style comment format
 *
 * The first sentence of the long description starts here and continues on this
 * line for a while finally concluding here at the end of this paragraph.
 *
 * The long description is ideal for more detailed explanations and
 * documentation. It can include example HTML, URLs, or any other information
 * that is deemed necessary or useful.
 *
 * @tag This is a tag named 'tag'
 *
 * TODO: This is a todo statement that describes an atomic task to be completed
 *   at a later date. It wraps after 80 characters and following lines are
 *   indented by 2 spaces.
 */

/* Basic comment */

/* ==========================================================================
CSS sorting information
========================================================================== */
