
// counter of coins
var counter = 0

// click action
const coinDiv = document.getElementsByClassName('coin')[0]
const blockDiv = document.getElementsByClassName('coin')[0]
const marioDiv = document.getElementsByClassName('mario')[0]

var updateCounter = function() {
    document.getElementById('counter').innerHTML = counter
}

var jump = function() {
    alert("Skaczemy");
  marioDiv.classList.add('jump') 
  blockDiv.classList.add('bounce')
  coinDiv.classList.add('appear')
}

var jumpEnd = function() {
    alert("Ladujemy");
    marioDiv.classList.remove('jump') 
    blockDiv.classList.remove('bounce')
    coinDiv.classList.remove('appear')
    counter++
    alert(`Wyskakalismy juz ${counter}`);
    updateCounter(counter)
}


// add button actions
const button = document.getElementById('jump')
button.addEventListener("click",  jump);

const block = document.querySelector('div.mario')
block.addEventListener('animationend', jumpEnd)