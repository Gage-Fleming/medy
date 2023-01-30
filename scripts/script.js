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