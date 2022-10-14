'use strict'

const digits = document.querySelector('.digits');

document.querySelector('.center').addEventListener('click', (event) => {
    if (event.target.type === 'button') {
        const btn = event.target.className;
        btn === 'zero-btn' ? digits.value += '0' : null
        btn === 'one-btn' ? digits.value += '1' : null
        btn === 'two-btn' ? digits.value += '2' : null
        btn === 'three-btn' ? digits.value += '3' : null
        btn === 'four-btn' ? digits.value += '4' : null
        btn === 'five-btn' ? digits.value += '5' : null
        btn === 'six-btn' ? digits.value += '6' : null
        btn === 'seven-btn' ? digits.value += '7' : null
        btn === 'eight-btn' ? digits.value += '8' : null
        btn === 'nine-btn' ? digits.value += '9' : null
        btn === 'dot-btn' ? digits.value += '.' : null
        btn === 'div-btn' ? digits.value += '/' : null
        btn === 'mul-btn' ? digits.value += '*' : null
        btn === 'sub-btn' ? digits.value += '-' : null
        btn === 'sum-btn' ? digits.value += '+' : null
        btn === 'clear-btn' ? digits.value = '' : null
        btn === 'del-btn' ? digits.value = digits.value.slice(0, digits.value.length - 1) : null
        btn === 'equal-btn' ? digits.value = eval(digits.value) : null
        sound();
    }
})

function sound(){
    var snd = new Audio('sound.mp3');
    snd.play();
}