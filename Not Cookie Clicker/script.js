let cookies = 300000
let increaseMultiplier = 1.0
let autoClickers = 0
let autoMultiplier = 1
let autoTimer = 2000

let autoPrice = 15
let autoIncreasePrice = 25
let autoSpeedPrice = 50
let increasePrice = 70
let cBackgroundCost = 300000

let menuList = 0

let purpleBool = false
let greenBool = false
let orangeBool = false

function priceInflation (price) {
  return (price * 1.15)
}

function canHeAfford (it) {
  if (cookies >= it) {
    return true
  } else {
    displayInfo('Not enough points!')
    return false
  }
}

// Creates a clicking feel to the button by reducing size when pressed
function mouseDown () {
  document.getElementById('buttonM').style.fontSize = '190px'
  document.getElementById('buttonM').style.margin = 'auto'
}

function mouseUp () {
  document.getElementById('buttonM').style.fontSize = '200px'
  document.getElementById('buttonM').style.margin = 'auto'
}
