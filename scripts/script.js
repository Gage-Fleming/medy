/* ==========================================================================
Basic scripts JS
========================================================================== */

/**
 * Create event listener for when donation button is clicked
 */

let donationButton = document.getElementById('donate');

donationButton.onclick = () => {
    window.alert('Thank you for your donation!');
};

let buyBook = document.getElementById('buyBook');

buyBook.onclick = () => {
    window.alert('Thank you for your purchase!');
};

let calmSubscribe = document.getElementById('calmSubscribe');

calmSubscribe.onclick = () => {
    window.alert('Thank you for your subscription!');
};