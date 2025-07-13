function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

const display = document.querySelector('.display');

let content = '';

const calculator = document.querySelector('.calculator-container');
calculator.addEventListener("click", (event) => {

    switch(event.target.id) {
        case '1':
            content += '1';
            display.textContent = content;
            break;
        case '2':
            content += '2';
            display.textContent = content;
            break;
        case '3':
            content += '3';
            display.textContent = content;
            break;
        case '4':
            content += '4';
            display.textContent = content;
            break;
        case '5':
            content += '5';
            display.textContent = content;
            break;
        case '6':
            content += '6';
            display.textContent = content;
            break;
        case '7':
            content += '7';
            display.textContent = content;
            break;
        case '8':
            content += '8';
            display.textContent = content;
            break;
        case '9':
            content += '9';
            display.textContent = content;
            break;
        case '0':
            content += '0';
            display.textContent = content;
            break;
    }
});