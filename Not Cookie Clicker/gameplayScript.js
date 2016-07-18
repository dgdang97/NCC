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
    priceUpdate()
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
    priceUpdate()
  }
}

function autoSpeed () {
  if (canHeAfford(autoSpeedPrice)) {
    cookies = cookies - autoSpeedPrice
    autoTimer = autoTimer - 75
    autoSpeedPrice = priceInflation(autoSpeedPrice)

    clearInterval(autoTime)
    autoTime = setInterval(() => {
      cookies = cookies + ((autoClickers / 5) * autoMultiplier)
      document.getElementById('cookieAmount').innerHTML = 'Points: ' + cookies.toFixed(0)
    }, autoTimer)

    format('ACSpeed')
    document.getElementById('ACSpeed').innerHTML = 'Auto-Clicker Speed: ' + (2000 - autoTimer)
    displayInfo('Auto-Clickers click faster!')
    priceUpdate()
  }
}

function increase () {
  if (canHeAfford(increasePrice)) {
    cookies = cookies - increasePrice
    increasePrice = priceInflation(increasePrice)
    increaseMultiplier = increaseMultiplier * 1.25

    format('IPAmount')
    document.getElementById('IPAmount').innerHTML = 'Point Multiplier: ' + (increaseMultiplier - 1).toFixed(1)
    displayInfo('Clicking power increased!')
    priceUpdate()
  }
}
