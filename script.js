const display = document.querySelector(".display");

let content = "";
let operator = "";
let leftOperand = "";
let rightOperand = "";
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
	if (isNaN(rightOperand)) {
		return;
	}

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
				return;
			}

			total = divide(a, b);
			break;
	}

	leftOperand = total;
	rightOperand = '';
	operator = '';
	operatorButtonPressed = false;

	content = total;
}

function getOperator(event) {
	operatorButtonPressed = true;
	content = '';
	display.textContent = content;
	return event.target.id;
}

function addDecimal() {
	if (!content) {
		content += "0.";
		display.textContent = content;
	}

	if (!content.includes(".")) {
		content += ".";
		display.textContent = content;
	}

	return;
}

function assignToOperand(content) {
	if (!operatorButtonPressed) {
		leftOperand = parseFloat(content);
	} else {
		rightOperand = parseFloat(content);
	}
}

function buttonToDisplay(event) {
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
	leftOperand = "";
	rightOperand = "";
	display.textContent = content;
}

const calculator = document.querySelector(".calculator-container");
calculator.addEventListener("click", (event) => {
	if (content == "0" && event.target.id == "0") {
		return;
	}

	if (isNaN(content)) {
		clearContent();
	}

	switch (event.target.id) {
		case "1":
		case "2":
		case "3":
		case "4":
		case "5":
		case "6":
		case "7":
		case "8":
		case "9":
		case "0":
			buttonToDisplay(event);
			break;

		case "decimal":
			addDecimal(event);
			break;

		case "plus":
		case "minus":
		case "divide":
		case "multiply":
			operator = getOperator(event);
			break;

		case "equalsTo":
			operate(operator, leftOperand, rightOperand);
			display.textContent = content;
			break;

		case "del":
			deleteFromDisplay(event);
			break;
		case "clear":
			clearContent();
			break;
	}
});
