let currentInput = '';
let currentOperator = '';
let result = 0;

function updateDisplay() {
  document.getElementById('display').innerText = currentInput === '' ? '0' : currentInput;
}

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function appendOperator(operator) {
  if (currentOperator !== '') {
    calculate();
  }
  currentOperator = operator;
  result = parseFloat(currentInput);
  currentInput = '';
}

function calculate() {
  const inputNumber = parseFloat(currentInput);
  switch (currentOperator) {
    case '+':
      result += inputNumber;
      break;
    case '-':
      result -= inputNumber;
      break;
    case '*':
      result *= inputNumber;
      break;
    case '/':
      result /= inputNumber;
      break;
  }
  currentInput = result.toString();
  currentOperator = '';
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  currentOperator = '';
  result = 0;
  updateDisplay();
}
