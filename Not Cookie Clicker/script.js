let cookies = 0
let increaseMultiplier = 1.0
let autoClickers = 0
let autoMultiplier = 1
let autoTimer = 2000

let autoPrice = 15
let autoIncreasePrice = 25
let autoSpeedPrice = 50
let increasePrice = 70

function priceInflation(price) {
  return (price * 1.25)
}

function canHeAfford(it) {
  return (cookies >= it)
}

function format(id) {
  document.getElementById("cookieAmount").innerHTML = "Points: " + cookies.toFixed(0)
  document.getElementById(id).style.backgroundColor = "#00FF00"
  document.getElementById(id).style.padding = "10px 15px"
  document.getElementById(id).style.fontSize = "20px"
  document.getElementById(id).style.border = "2px solid black"
  document.getElementById(id).style.borderTop = "1px dashed black"
  document.getElementById(id).style.borderBottom = "1px dashed black"
}

let autoTime = setInterval(() => {
  cookies = cookies + ((autoClickers/5) * autoMultiplier)
  document.getElementById("cookieAmount").innerHTML = "Points: " + cookies.toFixed(0)
}, autoTimer)

function getCookie() {
  cookies = cookies + (1 * increaseMultiplier)
  document.getElementById("cookieAmount").innerHTML = "Points: " + cookies.toFixed(0)
}

function buyAuto() {
  if (canHeAfford(autoPrice)) {
    cookies = cookies - autoPrice
    autoClickers = autoClickers + 1
    autoPrice = priceInflation(autoPrice)

    format("ACAmount")
    document.getElementById("ACAmount").innerHTML = "Auto-Clickers: " + autoClickers
    document.getElementById("AC").innerHTML = "Buy Auto-Clicker! <br/> [" + autoPrice.toFixed(0) + "]"
   }
}

function increaseAuto() {
  if (canHeAfford(autoIncreasePrice)) {
    cookies = cookies - autoIncreasePrice
    autoMultiplier = autoMultiplier + .1
    autoIncreasePrice = priceInflation(autoIncreasePrice)

    format("ACMulti")
    document.getElementById("ACMulti").innerHTML = "Auto-Clicker Multiplier: " + (autoMultiplier - 1).toFixed(1)
    document.getElementById("ACM").innerHTML = "Increase Auto-Clicker Gain! <br/> [" + autoIncreasePrice.toFixed(0) + "]"

  }
}

function autoSpeed() {
  if (canHeAfford(autoSpeedPrice)) {
    cookies = cookies - autoSpeedPrice
    autoTimer = autoTimer - 50
    autoSpeedPrice = priceInflation(autoSpeedPrice)

    clearInterval(autoTime)
    autoTime = setInterval(() => {
      cookies = cookies + (autoClickers * autoMultiplier)
      document.getElementById("cookieAmount").innerHTML = "Points: " + cookies.toFixed(0)
    }, autoTimer)

    format("ACSpeed")
    document.getElementById("ACSpeed").innerHTML = "Auto-Clicker Speed: " + (2000 - autoTimer)
    document.getElementById("ACS").innerHTML = "Increase Auto-Clicker Speed! <br/> [" + autoSpeedPrice.toFixed(0) + "]"
  }
}

function increase() {
  if (canHeAfford(increasePrice)) {
    cookies = cookies - increasePrice
    increasePrice = priceInflation(increasePrice)
    increaseMultiplier = increaseMultiplier + .2

    format("IPAmount")
    document.getElementById("IPAmount").innerHTML = "Point Multiplier: " + (increaseMultiplier - 1).toFixed(1)
    document.getElementById("IP").innerHTML = "Increase Point Gain! <br/> [" + increasePrice.toFixed(0) + "]"
  }
}
