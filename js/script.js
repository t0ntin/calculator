const equalsBtn = document.querySelector("#btn-equals");
const display2 = document.querySelector(".display2");
const display1 = document.querySelector(".display1");
const operationButtons = document.querySelectorAll(".operator");
const numberButtons = document.querySelectorAll(".num-btn");

let operator = "";
let num1 = "";
let num2 = "";

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
      display2.value += button.innerText;
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (num1 == "") {
      operator = button.innerText;
      num1 = display2.value;
    console.log("num1 at opbuttons = " + num1);
      display2.value = "";
    } else {
        num2 = display2.value;
        operate(operator, num1, num2);
        operator = button.innerText;
      console.log(num2);
      console.log(result);
      display2.value = "";
      num1 = result;
      num2 = "";
    }
  });
});

equalsBtn.addEventListener("click", () => {
    num2 = display2.value;
    console.log("num2 at resilt " +num2);
    display2.value = operate(operator, num1, num2);
    // operate(operator, num1, num2);
    display1.value = result;
    num2 = "";
    operator = "";
  
});

const operate = (operator, num1, num2) => {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    console.log("operator at operate = " + operator);

    console.log("num1 at operate = " + num1);
    console.log("num2 at operate = " + num2);
  if (operator === "+") {
    return result = num1 + num2;
  } else if (operator === "-") {
    return result = num1 - num2;
  } else if (operator === "x") {
    return result = num1 * num2;
  } else if (operator === "÷") {
    return result = num1 / num2;
  } else {
    console.log("Invalid operator");
    return;
  }
}
