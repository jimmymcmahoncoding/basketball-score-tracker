let homeScore = 0;
let guestScore = 0;

homeScoreElement = document.getElementById("home-score")
guestScoreElement = document.getElementById("guest-score")

function plusOneHome() {
    homeScore += 1;
    homeScoreElement.textContent = homeScore;
}

function plusTwoHome() {
    homeScore += 2;
    homeScoreElement.textContent = homeScore;
}

function plusThreeHome() {
    homeScore += 3;
    homeScoreElement.textContent = homeScore;
}

function plusOneGuest() {
    guestScore += 1;
    guestScoreElement.textContent = guestScore;
}

function plusTwoGuest() {
    guestScore += 2;
    guestScoreElement.textContent = guestScore;
}

function plusThreeGuest() {
    guestScore += 3;
    guestScoreElement.textContent = guestScore;
}

function reset() {
    homeScore = 0;
    guestScore = 0;
    homeScoreElement.textContent = 0;
    guestScoreElement.textContent = 0;
}