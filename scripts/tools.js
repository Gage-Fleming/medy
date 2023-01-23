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
let soundType;
let duration;
let interval;
let volume;

meditationFormSubmit.onclick = function() {
    // Get the sound type the user has selected form radio buttons
    for (let i = 0; i < soundTypeOptions.length; i++) {
        if (soundTypeOptions[i].checked) {
            soundType = soundTypeOptions[i].value;
            break;
        }
    }

    duration = durationSelector.value;
    
    interval = intervalBellSelector.value;

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
