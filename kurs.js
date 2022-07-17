
// counter of coins
var counter = 0

// divs
const marioDiv = document.getElementsByClassName('mario')[0]

var jump = function() {
    alert("Skaczemy");
    marioDiv.classList.add('jump')
}

var jumpEnd = function() {
    alert("Ladujemy");
    counter++
    alert(`Wyskakalismy juz ${counter}`);

}

// add button actions
const button = document.getElementById('jump')
button.addEventListener("click",  jump);

const block = document.querySelector('div.mario')
block.addEventListener('animationend', jumpEnd)