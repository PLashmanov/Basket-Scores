let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

let homePlus1El = document.getElementById("home-plus1")
let homePlus2El = document.getElementById("home-plus2")
let homePlus3El = document.getElementById("home-plus3")

let guestPlus1El = document.getElementById("guest-plus1")
let guestPlus2El = document.getElementById("guest-plus2")
let guestPlus3El = document.getElementById("guest-plus3")


let homeCount = 0
let guestCount = 0

function plus1(id) {
    if(id === "home-plus1") {
        homeCount +=1
        homeScoreEl.textContent = homeCount
    }
    else if(id === "guest-plus1") {
        guestCount +=1
        guestScoreEl.textContent = guestCount
    }
}

function plus2(id) {
    if(id === "home-plus2") {
        homeCount +=2
        homeScoreEl.textContent = homeCount
    }
    else if(id === "guest-plus2") {
        guestCount +=2
        guestScoreEl.textContent = guestCount
    }
}
function plus3(id) {
    if(id === "home-plus3") {
        homeCount +=3
        homeScoreEl.textContent = homeCount
    }
    else if(id === "guest-plus3") {
        guestCount +=3
        guestScoreEl.textContent = guestCount
    }
}