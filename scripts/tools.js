/* ==========================================================================
tools.html Code
========================================================================== */

/**
 * Please note some of the timer code was inspired by the below walkthrough:
 * https://css-tricks.com/how-to-create-an-animated-countdown-timer-with-html-css-and-javascript/
 */

/* meditation timer code
========================================================================== */

// Declare variables to store reference to submit and pause buttons on meditation form
let meditationFormSubmit = document.getElementById('meditationFormSubmit');
let meditationFormPause = document.getElementById('meditationFormPause');

// Declare variables to store references to options on timer meditation form
let soundTypeOptions = document.querySelectorAll('input[name="sounds"]');
let durationSelector = document.getElementById('duration');
let intervalBellSelector = document.getElementById('intervalBell');
let bellVolumeSelector = document.getElementById('sound');

// Create reference to p tag to store updated time
let outputTime = document.getElementById('outputTime');

// Create variables to hold audio files for bells
let gong = new Audio('../audio/gong.wav');
let chime = new Audio('../audio/chime.wav');
let bell = new Audio('../audio/bell.wav');

// Create timer interval variable
let timerInterval;

// Create variable to store if interval is running or not.
let intervalOn = false;

// Create variables to store the time that has passed since the select button has been clicked.
// And a variable to store the timeleft when subtracting timePassed from timeLeft
let timePassed;
let timeLeft;

// Decalre variables that will hold the value of the elements in the user form
// Any time variable is to be stored in seconds
let soundType;
let duration;

// Make interval default to null in the case no bells is selected.
let interval = null;

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

/**
 * Creates a timer that runs every second. It updates the time variables and the output timer.
 * It also runs a check to see if the timer is over and if so, clears the current interval
 */
function setTimer() {
    // Create timer interval to count the clock down.
    timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = duration - timePassed;

    outputTime.innerHTML = formatTime(timeLeft);

    if ((timePassed % interval) == 0) {
        switch (soundType) {
            case 'gong':
                gong.play();
                break;
            case 'chime':
                chime.play();
                break;
            case 'bell':
                bell.play();
                break;
        }
    }

    if (timeLeft <= 0) {
        stopTimer();
        intervalOn = false;
    }}, 1000);

    intervalOn = true;
}

/**
 * Stops the current timer
 */
function stopTimer() {
    clearInterval(timerInterval);
    intervalOn = false;
}

/* onclick handlers
========================================================================== */

/**
 * handles click action on submit button
 */
meditationFormSubmit.onclick = function() {
    // Ensure Interval is cleared at start.
    clearInterval(timerInterval);
    intervalOn = false;

    // Get the sound type the user has selected from radio buttons
    for (let i = 0; i < soundTypeOptions.length; i++) {
        if (soundTypeOptions[i].checked) {
            soundType = soundTypeOptions[i].value;
            break;
        }
    }

    // Retrieve the selected duration and convert it to seconds
    duration = Number(durationSelector.value.slice(0, 3)) * 60;

    timePassed = 0;
    timeLeft = duration;

    // Update outputTime to display chosen time
    outputTime.innerHTML = formatTime(timeLeft);
    
    // Check to see if user selected no bells. If so leave value of interval as null.
    // Otherwise, get seconds of chosen interval
    intervalBellSelector.value == "No Bells" ? interval : interval = intervalBellSelector.value.slice(0, 3) * 60;

    gong.volume = bellVolumeSelector.value;
    chime.volume = bellVolumeSelector.value;
    bell.volume = bellVolumeSelector.value;

    setTimer();
};

/**
 * Handles click action on pause button
 */
meditationFormPause.onclick = function() {
    // If the timer is running upon click stop the timer, change the inner html of the buton and output timer.
    // Also change global intervalOn variable to be off.
    if (intervalOn && meditationFormPause.innerHTML == 'Pause') {
        stopTimer();
        outputTime.innerHTML = 'Paused';
        meditationFormPause.innerHTML = 'Continue'
        intervalOn = false;
    // If inertval is not on and continue is showing.
    // Start timer back up and change relevant innerhtml
    } else if (!intervalOn && meditationFormPause.innerHTML == 'Continue') {
        outputTime.innerHTML = formatTime(timeLeft);
        setTimer();
        meditationFormPause.innerHTML = 'Pause'
        intervalOn = true;
    }
};

/**
 * If the user selects the gong radio button the sound will play
 */
soundTypeOptions[0].onclick = function() {
    gong.play();
};

/**
 * If the user selects the chime radio button the sound will play
 */
soundTypeOptions[1].onclick = function() {
    chime.play();
};

/**
 * If the user selects the bell radio button the sound will play
 */
soundTypeOptions[2].onclick = function() {
    bell.play();
};

/**
 * Updates the sound if the user adjusts the bell slider input
 */
bellVolumeSelector.onchange = function() {
    gong.volume = bellVolumeSelector.value;
    chime.volume = bellVolumeSelector.value;
    bell.volume = bellVolumeSelector.value;
};

/* scene sounds code
========================================================================== */

// variables to store reference to radio buttons and slider
let sceneVolume = document.getElementById('sceneSound');
let sceneOptions = document.querySelectorAll('input[name="scenes"]');

// Create variables to hold audio files for scenes. This is also set to loop.
let forrest = new Audio('../audio/forrest.mp3');
let river = new Audio('../audio/river.mp3');
let rain = new Audio('../audio/rain.mp3');

console.log(rain);

sceneVolume.onchange = function () {
    forrest.volume = sceneVolume.value;
    rain.volume = sceneVolume.value;
    river.volume = sceneVolume.value;
};

sceneOptions[0].onchange = function () {
    forrest.play();
    rain.pause();
    river.pause();
};

sceneOptions[1].onchange = function () {
    forrest.pause();
    rain.play();
    river.pause();
};

sceneOptions[2].onchange = function () {
    forrest.pause();
    rain.pause();
    river.play();
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
