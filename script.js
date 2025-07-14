const display = document.querySelector(".display");

let content = "";
let operator = "";
let leftOperand = "";
let rightOperand = "";
let displayingTotal = false;

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
	if (isNaN(rightOperand)) {
		return;
	}

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
			if (!b) {
				clearContent();
				display.textContent = "Can't divide by 0.";
				return;
			}

			total = divide(a, b);
			break;
	}

	leftOperand = total;
	rightOperand = "";
	content = parseFloat(total);
	display.textContent = content;
	// displayingTotal = true;
	// return parseFloat(total);
}

function clearContent() {
	content = "";
	operator = "";
	leftOperand = "";
	rightOperand = "";
	display.textContent = content;
}

function buttonToDisplay(event) {
	// if (displayingTotal) {
	// 	clearContent();
	// 	displayingTotal = false;
	// }

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
	} else {
		rightOperand = content;
		content = "";
		display.textContent = content;
	}

	return event.target.id;
}

function addDecimal() {
	// if (displayingTotal) {
	// 	clearContent();
	// 	displayingTotal = false;
	// }

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
			content = parseFloat(content);
			display.textContent = content;

			if (rightOperand) {
				operate(operator, leftOperand, rightOperand);
				leftOperand = content;
				content = "";
				rightOperand = "";
			}

			operator = getOperator(event);
			break;

		case "equalsTo":
			rightOperand = parseFloat(content);
			operate(operator, leftOperand, rightOperand);
			break;

		case "del":
			deleteFromDisplay(event);
			break;
		case "clear":
			clearContent();
			break;
	}
});
