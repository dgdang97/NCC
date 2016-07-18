function priceUpdate () {
  
  document.getElementById('cookieAmount').innerHTML = 'Points: ' + cookies.toFixed(0)
  document.getElementById('button1').innerHTML = 'Buy Auto-Clicker! <br/> [' + autoPrice.toFixed(0) + ']'
  document.getElementById('button2').innerHTML = 'Increase Auto-Clicker Gain! <br/> [' + autoIncreasePrice.toFixed(0) + ']'
  document.getElementById('button3').innerHTML = 'Increase Auto-Clicker Speed! <br/> [' + autoSpeedPrice.toFixed(0) + ']'
  document.getElementById('button4').innerHTML = 'Increase Point Gain! <br/> [' + increasePrice.toFixed(0) + ']'
}

function changeMenu () {
  if (menuList === 0) {
    menuList = 1
    document.getElementById('button1').innerHTML = 'Change Background Color! [300]'
    document.getElementById('button1').setAttribute('onclick', 'buyBackground()')
    document.getElementById('button5').innerHTML = 'Go back to Gameplay Purchases!'
  } else {
    menuList = 0
    priceUpdate()
    document.getElementById('button1').style.backgroundColor = '#00FF00'
    document.getElementById('button2').style.backgroundColor = '#00FF00'
    document.getElementById('button3').style.backgroundColor = '#00FF00'
    document.getElementById('button4').style.backgroundColor = '#00FF00'

    document.getElementById('button1').setAttribute('onclick', 'buyAuto()')
    document.getElementById('button2').setAttribute('onclick', 'increaseAuto()')
    document.getElementById('button3').setAttribute('onclick', 'autoSpeed()')
    document.getElementById('button4').setAttribute('onclick', 'increase()')
    document.getElementById('button5').innerHTML = 'Change the way the game looks!'
  }
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
