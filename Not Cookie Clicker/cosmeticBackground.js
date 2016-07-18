// Modifies the existing purchase buttons to buy background colors
function buyBackground() {

    setButton('button1', '#008080', 'Teal', true)
    setButton('button2', '#DA70D6', 'Purple', false, 'purpleBool = buyColor(purpleBool, document.getElementById("button2").style.backgroundColor)')
    setButton('button3', '#00FF00', 'Green', false, 'greenBool = buyColor(greenBool, document.getElementById("button3").style.backgroundColor)')
    setButton('button4', '#FFA500', 'Orange', false, 'orangeBool = buyColor(orangeBool, document.getElementById("button4").style.backgroundColor)')
}

function setcolor (color) {
  document.getElementById('div1').style.backgroundColor = color
  document.getElementById('div2').style.backgroundColor = color
  document.getElementById('div3').style.backgroundColor = color
}

function setButton (buttonId, colorCode, color, teal, cFunction) {
  document.getElementById(buttonId).style.backgroundColor = colorCode
  document.getElementById(buttonId).innerHTML = color + '!'
  if (teal === true) {
    document.getElementById(buttonId).setAttribute('onclick', 'getTeal()')
  } else {
    document.getElementById(buttonId).setAttribute('onclick', cFunction)
  }
}
// Changes background back to base color
function getTeal () {
  setcolor('#008080')
}

function buyColor (boolean, color) {
  if (boolean === true) {
    setcolor(color)
    return true
  } else {
    if (canHeAfford(cBackgroundCost)) {
      cookies = cookies - cBackgroundCost
      document.getElementById('cookieAmount').innerHTML = 'Points: ' + cookies.toFixed(0)
      setcolor(color)
      return true
    }
  }
  return false
}
