let displayNumber = 0;
let storedNumber = 0;
let command;

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  if (y === 0) {
    alert("Error divide by zero");
    clear();
    return 0;
  }
  return x / y;
}

function operate(command, num1, num2) {
  switch (command) {
    case 'add':
      return add(num1, num2);
    case 'subtract':
      return subtract(num1, num2);
    case 'multiply':
      return multiply(num1, num2);
    case 'divide':
      return divide(num1, num2);
  }
}

function calculate(e) {
  const btn = e.target;
  if (btn.className === 'number') {
    const buttonNumber = btn.innerHTML;
    changeDisplay(buttonNumber);
  } else if (btn.className === 'operator') {
    storedNumber = displayNumber;
    displayNumber = 0;
    changeDisplay('operate');
    command = btn.id;
  } else if (btn.id === 'equals') {
    let answer = operate(command, storedNumber, displayNumber);
    displayNumber = answer;
    screen.innerHTML = String(answer);
  } else if (btn.id === 'clear') {
    clear();
  }
}

const buttons = Array.from(document.querySelectorAll("button"));
buttons.forEach(button => button.addEventListener('click', calculate));

const screen = document.querySelector("#screen");

function changeDisplay(numberString) {
  if (numberString === 'operate') {
    screen.innerHTML = '0';
  } else if (screen.innerHTML === '0') {
    screen.innerHTML = numberString;
  } else {
    screen.innerHTML += numberString;
  }
  displayNumber = Number(screen.innerHTML);
}

function clear() {
  storedNumber = 0;
  displayNumber = 0;
  screen.innerHTML = '0'
}