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
let operator;
let leftOperand;
let rightOperand;

function clearContent() {
    content = '';
    operator = '';
    leftOperand = '';
    rightOperand = '';
    display.textContent = content;
}

function addToDisplay(event) {
    content += event.target.id;
    display.textContent = content;
}

function deleteFromDisplay(event) {
    content = content.slice(0, -1);
    display.textContent = content;
}

const calculator = document.querySelector('.calculator-container');
calculator.addEventListener("click", (event) => {

    switch(event.target.id) {
        case '1':
            addToDisplay(event);
            break;
        case '2':
            addToDisplay(event);
            break;
        case '3':
            addToDisplay(event);
            break;
        case '4':
            addToDisplay(event);
            break;
        case '5':
            addToDisplay(event);
            break;
        case '6':
            addToDisplay(event);
            break;
        case '7':
            addToDisplay(event);
            break;
        case '8':
            addToDisplay(event);
            break;
        case '9':
            addToDisplay(event);
            break;
        case '0':
            addToDisplay(event);
            break;
        case 'plus':
            operator = 'plus';
            break;
        case 'minus':
            operator = 'minus';
            break;
        case 'divide':
            operator = 'divide';
            break;
        case 'multiply':
            operator = 'multiply';
            break;
        case 'del':
            deleteFromDisplay(event);
            break;
        case 'clear':
            clearContent();
            break;
    }
});