let cookies = 0
let increaseMultiplier = 1.0
let autoClickers = 0
let autoMultiplier = 1
let autoTimer = 2000

let autoPrice = 15
let autoIncreasePrice = 25
let autoSpeedPrice = 50
let increasePrice = 70

function priceInflation (price) {
  return (price * 1.25)
}

function canHeAfford (it) {
  return (cookies >= it)
}

function displayInfo (message) {
  document.getElementById('info').style.backgroundColor = '#00FF00'
  document.getElementById('info').style.padding = '10px 15px'
  document.getElementById('info').style.border = '4px groove black'
  document.getElementById('info').style.marginBottom = '-10px'
  document.getElementById('info').innerHTML = message
  setTimeout(() => {
    document.getElementById('info').style.backgroundColor = ''
    document.getElementById('info').style.padding = ''
    document.getElementById('info').style.border = ''
    document.getElementById('info').style.marginBottom = 'auto'
    document.getElementById('info').innerHTML = ''
  }, 2000)
}

function format (id) {
  document.getElementById('cookieAmount').innerHTML = 'Points: ' + cookies.toFixed(0)
  document.getElementById(id).style.backgroundColor = '#00FF00'
  document.getElementById(id).style.padding = '10px 15px'
  document.getElementById(id).style.border = '4px solid black'
  document.getElementById(id).style.borderTop = '1px dashed black'
  document.getElementById(id).style.borderBottom = '1px dashed black'
}

let autoTime = setInterval(() => {
  cookies = cookies + ((autoClickers / 5) * autoMultiplier)
  document.getElementById('cookieAmount').innerHTML = 'Points: ' + cookies.toFixed(0)
}, autoTimer)

function getCookie () {
  cookies = cookies + (1 * increaseMultiplier)
  document.getElementById('cookieAmount').innerHTML = 'Points: ' + cookies.toFixed(0)
}

function buyAuto () {
  if (canHeAfford(autoPrice)) {
    cookies = cookies - autoPrice
    autoClickers = autoClickers + 1
    autoPrice = priceInflation(autoPrice)

    format('ACAmount')
    document.getElementById('ACAmount').innerHTML = 'Auto-Clickers: ' + autoClickers
    displayInfo('Auto-Clicker purchased!')
    document.getElementById('AC').innerHTML = 'Buy Auto-Clicker! <br/> [' + autoPrice.toFixed(0) + ']'
  } else {
    displayInfo('Not enough points!')
  }
}

function increaseAuto () {
  if (canHeAfford(autoIncreasePrice)) {
    cookies = cookies - autoIncreasePrice
    autoMultiplier = autoMultiplier + 0.1
    autoIncreasePrice = priceInflation(autoIncreasePrice)

    format('ACMulti')
    document.getElementById('ACMulti').innerHTML = 'Auto-Clicker Multiplier: ' + (autoMultiplier - 1).toFixed(1)
    displayInfo('Auto-Clicking power increased!')
    document.getElementById('ACM').innerHTML = 'Increase Auto-Clicker Gain! <br/> [' + autoIncreasePrice.toFixed(0) + ']'
  } else {
    displayInfo('Not enough points!')
  }
}

function autoSpeed () {
  if (canHeAfford(autoSpeedPrice)) {
    cookies = cookies - autoSpeedPrice
    autoTimer = autoTimer - 50
    autoSpeedPrice = priceInflation(autoSpeedPrice)

    clearInterval(autoTime)
    autoTime = setInterval(() => {
      cookies = cookies + (autoClickers * autoMultiplier)
      document.getElementById('cookieAmount').innerHTML = 'Points: ' + cookies.toFixed(0)
    }, autoTimer)

    format('ACSpeed')
    document.getElementById('ACSpeed').innerHTML = 'Auto-Clicker Speed: ' + (2000 - autoTimer)
    displayInfo('Auto-Clickers click faster!')
    document.getElementById('ACS').innerHTML = 'Increase Auto-Clicker Speed! <br/> [' + autoSpeedPrice.toFixed(0) + ']'
  } else {
    displayInfo('Not enough points!')
  }
}

function increase () {
  if (canHeAfford(increasePrice)) {
    cookies = cookies - increasePrice
    increasePrice = priceInflation(increasePrice)
    increaseMultiplier = increaseMultiplier + 0.2

    format('IPAmount')
    document.getElementById('IPAmount').innerHTML = 'Point Multiplier: ' + (increaseMultiplier - 1).toFixed(1)
    displayInfo('Clicking power increased!')
    document.getElementById('IP').innerHTML = 'Increase Point Gain! <br/> [' + increasePrice.toFixed(0) + ']'
  } else {
    displayInfo('Not enough points!')
  }
}

function mouseDown () {
  document.getElementById('button').style.fontSize = '190px'
  document.getElementById('button').style.margin = 'auto'
}

function mouseUp () {
  document.getElementById('button').style.fontSize = '200px'
  document.getElementById('button').style.margin = 'auto'
}
