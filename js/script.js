const equalsBtn = document.querySelector("#btn-equals");
const displayP = document.querySelector(".displayP");
const operationButtons = document.querySelectorAll(".op-btn");
const numberButtons = document.querySelectorAll(".num-btn");

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let operator = "";
let num1 = 0;
let num2 = 0;

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    displayP.innerText = "";
    displayP.innerText += button.innerText;
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    operator = button.innerText;
    num1 = parseFloat(displayP.innerText);
    displayP.innerText = operator;
  });
});

equalsBtn.addEventListener("click", () => {
  num2 = parseFloat(displayP.innerText);
  displayP.innerText = operate(operator, num1, num2); //this shows the current result to the user.
});

const operate = (operator, num1, num2) => {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "x":
      return multiply(num1, num2);
    case "÷":
      return divide(num1, num2);
    default:
      return "Invalid operator";
  }
};
