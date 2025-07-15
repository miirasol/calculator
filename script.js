const display = document.querySelector(".display");

let content = "";
let operator = "";
let leftOperand = null;
let rightOperand = null;
let displayingTotal = false;
let operatorButtonPressed = false;

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

function operate(op, a, b) {
	if (b === null) return;

	let total;

	switch (op) {
		case "plus":
			total = add(a, b);
			break;
		case "minus":
			total = subtract(a, b);
			break;
		case "multiply":
			total = multiply(a, b);
			break;
		case "divide":
			if (b === 0) {
				clearContent();
				content = "Can't divide by 0.";
				operatorButtonPressed = false;
				display.textContent = content;
				return;
			}
			total = divide(a, b);
			break;
	}

	leftOperand = total;
	rightOperand = null;
	operator = '';
	operatorButtonPressed = false;
	content = total.toString();
	display.textContent = content;
	displayingTotal = true;
}

function getOperator(event) {
	if (operator && rightOperand !== null) {
		operate(operator, leftOperand, rightOperand);
	}
	operator = event.target.id;
	operatorButtonPressed = true;
	displayingTotal = false;
	content = '';
}

function addDecimal() {
	if (displayingTotal) {
		clearContent();
	}
	if (!content.includes(".")) {
		content += content ? "." : "0.";
		display.textContent = content;
	}
}

function assignToOperand(value) {
	const number = parseFloat(value);
	if (operatorButtonPressed) {
		rightOperand = number;
	} else {
		leftOperand = number;
	}
}

function buttonToDisplay(event) {
	if (displayingTotal) {
		clearContent();
	}
	content += event.target.id;
	assignToOperand(content);
	display.textContent = content;
}

function deleteFromDisplay() {
	content = content.slice(0, -1);
	assignToOperand(content);
	display.textContent = content;
}

function clearContent() {
	content = "";
	operator = "";
	leftOperand = null;
	rightOperand = null;
	displayingTotal = false;
	operatorButtonPressed = false;
	display.textContent = content;
}

const calculator = document.querySelector(".calculator-container");

calculator.addEventListener("click", (event) => {
	if (!event.target.id || (content == "0" && event.target.id == "0")) return;

	switch (event.target.id) {
		case "0": case "1": case "2": case "3": case "4":
		case "5": case "6": case "7": case "8": case "9":
			buttonToDisplay(event);
			break;
		case "decimal":
			addDecimal();
			break;
		case "plus":
		case "minus":
		case "divide":
		case "multiply":
			getOperator(event);
			break;
		case "equalsTo":
			operate(operator, leftOperand, rightOperand);
			break;
		case "del":
			deleteFromDisplay();
			break;
		case "clear":
			clearContent();
			break;
	}
});

document.addEventListener("keypress", (event) => {
	if (!event.target.id) return;
});