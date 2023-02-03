/* podcast code  
========================================================================== */

/**
 * Create code to have a window alert pop up when the user clicks on a podcast button
 */
let podcastButtons = document.querySelectorAll('.podcastButton');

for (let i = 0; i < podcastButtons.length; i++) {
    podcastButtons[i].onclick = () => {
        window.alert('Thank you for subscribing!');
    };
}


/* Poll code    
========================================================================== */

// Get reference to all poll buttons
let pollButtons = document.querySelectorAll('.pollButton');

// Create variables to hold reference to all poll buttons
let answerOne = pollButtons[0];
let answerTwo = pollButtons[1];
let answerThree = pollButtons[2];
let answerFour = pollButtons[3];

// Create variables to hold fake statistics for all answer in poll.
let answerOneCount = 30;
let answerTwoCount = 25;
let answerThreeCount = 20;
let answerFourCount = 10;

// Create total votes variable to store the sum of all 4 above variables.
let totalVotes;

/**
 * Assigns the total votes variable to the current vote count.
 */
function getTotalVotes() {
    totalVotes = answerOneCount + answerTwoCount + answerThreeCount + answerFourCount;
}

/**
 * Function serves to hide the poll buttons and show the poll results. The switch loops through the button and assigned a width of the vote percentage to help the   
 * animation take effect.
 */
function showPoll() {
    for (let i = 0; i < pollButtons.length; i++) {
        let currentButton = pollButtons[i]
        let currentButtonParent = currentButton.parentElement;
        currentButton.classList.add('pollButtonHide');
    
        switch (i) {
            case 0:
                currentButtonParent.classList.add('pollResponseBacking');
                currentButtonParent.children[1].style.width = `${100*(answerOneCount / totalVotes)}%`;
                currentButtonParent.children[1].innerHTML = `${Math.round(100*(answerOneCount / totalVotes))}%`;
                break;
            case 1:
                currentButtonParent.classList.add('pollResponseBacking');
                currentButtonParent.children[1].style.width = `${100*(answerTwoCount / totalVotes)}%`;
                currentButtonParent.children[1].innerHTML = `${Math.round(100*(answerTwoCount / totalVotes))}%`;
                break;
            case 2:
                currentButtonParent.classList.add('pollResponseBacking');
                currentButtonParent.children[1].style.width = `${100*(answerThreeCount / totalVotes)}%`;
                currentButtonParent.children[1].innerHTML = `${Math.round(100*(answerThreeCount / totalVotes))}%`;
                break;
            case 3:
                currentButtonParent.classList.add('pollResponseBacking');
                currentButtonParent.children[1].style.width = `${100*(answerFourCount / totalVotes)}%`;
                currentButtonParent.children[1].innerHTML = `${Math.round(100*(answerFourCount / totalVotes))}%`;
                break;
        }
    }
}

/**
 * Apply a listener that increments the respective vote count and shows the poll results after click
 */
answerOne.onclick = function () {
    answerOneCount++;
    getTotalVotes()
    showPoll();
}

/**
 * Apply a listener that increments the respective vote count and shows the poll results after click
 */
answerTwo.onclick = function () {
    answerTwoCount++;
    getTotalVotes()
    showPoll();
}

/**
 * Apply a listener that increments the respective vote count and shows the poll results after click
 */
answerThree.onclick = function () {
    answerThreeCount++
    getTotalVotes()
    showPoll();
}

/**
 * Apply a listener that increments the respective vote count and shows the poll results after click
 */
answerFour.onclick = function () {
    answerFourCount++;
    getTotalVotes()
    showPoll();
}
