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

let totalVotes;

function getTotalVotes() {
    totalVotes = answerOneCount + answerTwoCount + answerThreeCount + answerFourCount;
}

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

answerOne.onclick = function () {
    answerOneCount++;
    getTotalVotes()
    showPoll();
}

answerTwo.onclick = function () {
    answerTwoCount++;
    getTotalVotes()
    showPoll();
}

answerThree.onclick = function () {
    answerThreeCount++
    getTotalVotes()
    showPoll();
}

answerFour.onclick = function () {
    answerFourCount++;
    getTotalVotes()
    showPoll();
}
