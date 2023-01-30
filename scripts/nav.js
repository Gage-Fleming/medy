/* ==========================================================================
navbar code to handle hamburger menu and search button
========================================================================== */

// Get reference to Hamburger menu button and set a boolean variable to track if menu is shown or not
let hamburgerMenu = document.getElementById('hamburgerButton');
let menuShown = false;

// Get reference to the header nav
let headerNav = document.getElementById('headerNav');

/**
 * When called this function adds showHeaderNav to the headerNav classlist and removes hideHeaderNav
 */
function showMenu() {
    headerNav.classList.add('showHeaderNav');
    headerNav.classList.remove('hideHeaderNav');
}

/**
 * When called this function adds hideHeaderNav to the headerNav classlist and removes showHeaderNav
 */
function hideMenu() {
    headerNav.classList.remove('showHeaderNav');
    headerNav.classList.add('hideHeaderNav');
}

/**
 * When the user clicks on or touches the hamburger menu, it will either show the navbar or hide it.
 * Also changes the boolean value of menuShown
 */
hamburgerMenu.onclick = function() {
    if (menuShown) {
        hideMenu();
        menuShown = !menuShown;
    } else {
        showMenu();
        menuShown = !menuShown;
    }
};