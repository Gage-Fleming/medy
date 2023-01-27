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