let displayValue = '';
let operator = '';
let firstOperand = null;
let secondOperand = null;

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function setOperator(op) {
    if (operator) {
        calculate();
    }
    firstOperand = parseFloat(displayValue);
    operator = op;
    displayValue += ` ${op} `;
    updateDisplay();
}

function calculate() {
    const parts = displayValue.split(' ');
    if (parts.length < 3) {
        return;
    }
    firstOperand = parseFloat(parts[0]);
    operator = parts[1];
    secondOperand = parseFloat(parts[2]);

    let result;
    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = secondOperand !== 0 ? firstOperand / secondOperand : 'Error';
            break;
        default:
            return;
    }

    displayValue = result.toString();
    operator = '';
    firstOperand = null;
    secondOperand = null;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    operator = '';
    firstOperand = null;
    secondOperand = null;
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById('display');
    display.value = displayValue;
}
