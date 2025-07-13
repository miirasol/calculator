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

function operate(operator, leftOperand, rightOperand) {
    let total;
    switch(operator) {
        case 'plus':
            total = add(leftOperand, rightOperand);
            break;
        case 'minus':
            total = subtract(leftOperand, rightOperand);
            break;
        case 'multiply':
            total = multiply(leftOperand, rightOperand);
            break;
        case 'divide':
            total = divide(leftOperand, rightOperand);
            break;
    }
    
    return total;
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

function deleteFromDisplay() {
    content = content.slice(0, -1);
    display.textContent = content;
}

function getOperator(event) {
    return event.target.id;
}

const calculator = document.querySelector('.calculator-container');
calculator.addEventListener("click", (event) => {

    if (!content && event.target.id == '0') {
        return;
    }

    switch(event.target.id) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
            addToDisplay(event);
            break;

        case 'plus':
        case 'minus':
        case 'divide':
        case 'multiply':
            operator = getOperator(event);
            break;


        case 'del':
            deleteFromDisplay(event);
            break;
        case 'clear':
            clearContent();
            break;
    }
});