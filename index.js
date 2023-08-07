

let homeEl = document.getElementById("homeScore");
let guestEl = document.getElementById("guestScore");
let homeScore = 0;
let guestScore = 0;

function addOnePoint(){
    homeScore += 1;
    homeEl.textContent = homeScore;
}

function addTwoPoints(){
    homeScore += 2;
    homeEl.textContent = homeScore;
}

function addThreePoints(){
    homeScore += 3;
    homeEl.textContent = homeScore;
}

function addOnePointG(){
    guestScore += 1;
    guestEl.textContent = guestScore;
}

function addTwoPointsG(){
    guestScore += 2;
    guestEl.textContent = guestScore;
}

function addThreePointsG(){
    guestScore += 3;
    guestEl.textContent = guestScore;
}

