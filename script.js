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

function operate(operator, a, b) {
	let total;

	switch (operator) {
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
			total = divide(a, b);
			break;
	}

	leftOperand = total;
	rightOperand = "";
	return parseFloat(total);
}

const display = document.querySelector(".display");

let content = "";
let operator = "";
let leftOperand = "";
let rightOperand = "";
let displayingTotal = false;

function clearContent() {
	content = "";
	operator = "";
	leftOperand = "";
	rightOperand = "";
	display.textContent = content;
}

function buttonToDisplay(event) {
	content += event.target.id;
	if (leftOperand) {
		rightOperand = parseFloat(content);
	}
	display.textContent = content;
}

function deleteFromDisplay() {
	content = content.slice(0, -1);
	display.textContent = content;
}

function getOperator(event) {
	if (!leftOperand) {
		leftOperand = content;
		content = "";
		display.textContent = content;
		console.log(leftOperand);
	} else {
		rightOperand = content;
		content = "";
		display.textContent = content;
		console.log(rightOperand);
	}

	return event.target.id;
}

const calculator = document.querySelector(".calculator-container");
calculator.addEventListener("click", (event) => {
	if (!content && event.target.id == "0") {
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

		case "plus":
		case "minus":
		case "divide":
		case "multiply":
			content = parseFloat(content);
			display.textContent = content;

			if (rightOperand) {
				content = operate(operator, leftOperand, rightOperand);
				display.textContent = content;
				leftOperand = content;
				content = "";
				rightOperand = "";
			}

			operator = getOperator(event);
			break;

		case "equalsTo":
			rightOperand = parseFloat(content);
			content = operate(operator, leftOperand, rightOperand);
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
