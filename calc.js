const sumBtn = document.querySelector('.sum-btn');
const subBtn = document.querySelector('.sub-btn');
const divBtn = document.querySelector('.div-btn');
const mulBtn = document.querySelector('.mul-btn');
const modBtn = document.querySelector('.mod-btn');
const clrBtn = document.querySelector('.clr-btn');
const num1 = document.querySelector('.calc-first-number');
const num2 = document.querySelector('.calc-second-number');
const result = document.querySelector('.result');

sumBtn.addEventListener('click', () => displayResult(+num1.value, +num2.value, 'sum'))

subBtn.addEventListener('click', () => displayResult(+num1.value, +num2.value, 'sub'))

divBtn.addEventListener('click', () => displayResult(+num1.value, +num2.value, 'div'))

mulBtn.addEventListener('click', () => multiply())
function multiply() {
    result.innerText = +num1.value * +num2.value;
}

const module = () => {
    result.innerText = +num1.value % +num2.value;
}
modBtn.addEventListener('click', () => module())


clrBtn.addEventListener('click', () => {
    num1.value = '';
    num2.value = '';
    result.innerText = '';
})


function calc(num1, num2, operation) {
    switch (operation) {
        case 'sum':
            return num1 + num2;
        case 'sub':
            return num1 - num2;
        case 'div':
            return num1 / num2;
        case 'mul':
            return num1 * num2;
        case 'mod':
            return num1 % num2;
        default:
            return;
        }
}


function displayResult(n1, n2, action) {
    result.innerText = 'Rezultatas: ' + calc(n1, n2, action);
}