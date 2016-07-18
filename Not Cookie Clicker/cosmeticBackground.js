function buyBackground() {
    document.getElementById('button1').style.backgroundColor = '#008080'
    document.getElementById('button1').innerHTML = 'Teal!'
    document.getElementById('button1').setAttribute('onclick', 'getTeal()')

    document.getElementById('button2').style.backgroundColor = '#DA70D6'
    document.getElementById('button2').innerHTML = 'Purple!'
    document.getElementById('button2').setAttribute('onclick', 'buyPurple()')

    document.getElementById('button3').style.backgroundColor = '#00FF00'
    document.getElementById('button3').innerHTML = 'Green!'
    document.getElementById('button3').setAttribute('onclick', 'buyGreen()')

    document.getElementById('button4').style.backgroundColor = '#FFA500'
    document.getElementById('button4').innerHTML = 'Orange!'
    document.getElementById('button4').setAttribute('onclick', 'buyOrange()')
}
function setcolor (color) {
  document.getElementById('div1').style.backgroundColor = color
  document.getElementById('div2').style.backgroundColor = color
  document.getElementById('div3').style.backgroundColor = color
}

function getTeal () {
  setcolor('#008080')
}

function buyPurple () {
  if (purpleBool === true) {
    setcolor('#DA70D6')
  } else {
    if (canHeAfford(cBackgroundCost)) {
      cookies = cookies - cBackgroundCost
      purpleBool = true
      setcolor('#DA70D6')
    }
  }
}

function buyGreen () {
  if (greenBool === true) {
    setcolor('#00FF00')
  } else {
    if (canHeAfford(cBackgroundCost)) {
      cookies = cookies - cBackgroundCost
      greenBool = true
      setcolor('#00FF00')
    }
  }
}

function buyOrange () {
  if (orangeBool === true) {
    setcolor('#FFA500')
  } else {
    if (canHeAfford(cBackgroundCost)) {
      cookies = cookies - cBackgroundCost
      orangeBool = true
      setcolor('#FFA500')
    }
  }
}
