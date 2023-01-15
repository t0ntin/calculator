const equalsBtn = document.querySelector("#btn-equals");
const display2 = document.querySelector(".display2");
const display1 = document.querySelector(".display1");
const operationButtons = document.querySelectorAll(".operator");
const numberButtons = document.querySelectorAll(".num-btn");
const clearBtn = document.querySelectorAll("#clear-btn");
const signChangeBtn = document.querySelectorAll("#sign-change-btn");

let operator = "";
let num1 = "";
let num2 = "";
let result = 0;
// let disabled = true;


numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.innerText === "." && display2.value.includes(".")) {
      return
    }
    if (display2.value.length > 9) {
      return;
    }
      display2.value += button.innerText;
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (num1 == "") {
      operator = button.innerText;
      num1 = display2.value;
      display1.innerText += num1;
      display1.innerText += operator;
    console.log("num1 at opbuttons = " + num1);
      display2.value = "";
    } else {
        num2 = display2.value;
        operate(operator, num1, num2);
        operator = button.innerText;
      display1.innerText += button.innerText;
      console.log(num2);
      console.log(result);
      display2.value = "";
      num1 = result;
      display1.innerText = num1;
      display1.innerText += operator;
      num2 = "";
    }
  });
});

equalsBtn.addEventListener("click", () => {
    num2 = display2.value;
    display2.innerText = num2;
    console.log("num2 at result " +num2);
    let check = operate(operator, num1, num2);
    if(check === undefined){
        display2.value = "";
    }else{
        display2.value = check;
    }
    operator = ""; 
    num2 = "";  
});

clearBtn.forEach((button) => {
  button.addEventListener("click", () => {
  clearCalculator();
  });
});

signChangeBtn.forEach((button) => {
  button.addEventListener("click", () => {
      if (display2.value > 0) {
        display2.value = display2.value * -1;
        console.log(display2.value);
      } else if (display2.value.includes("-")){
        display2.value = Math.abs(display2.value);
      }
  });
});

const operate = (operator, num1, num2) => {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    console.log("operator at operate = " + operator);

    console.log("num1 at operate = " + num1);
    console.log("num2 at operate = " + num2);
  if (operator === "+") {
    return result = roundResult((num1 + num2));
  } else if (operator === "-") {
    return result = roundResult((num1 - num2));
  } else if (operator === "x") {
    return result = roundResult((num1 * num2));
  } else if (operator === "÷" && num2 ===0) {
    display1.innerText = "ERROR"    
    console.log("num1 after error found: " + num1);
    operator = "÷"
    return 
  } else if (operator === "÷") {
    return result = roundResult((num1 / num2));
  }
   else {
    console.log("Invalid operator");
    return;
  }
}

function roundResult(number) {
  return Math.round(number * 1000) / 1000
}

function clearCalculator() {
  num1 = "";
  num2 = "";
  operator = "";
  display2.value = "";
  display1.innerText = "";
}


// function disableEqualsBtn() {
//   if (!operator) {
//     equalsBtn.disabled = disabled;
//   } else {
//     equalsBtn.disabled = !disabled;
//   }
// }
// disableEqualsBtn();

window.addEventListener("keydown", function (e) {
  e.preventDefault();
  const number = document.querySelector(`button[data-key="${e.keyCode}"]`);
  if (!number) return;
  number.click()
})

window.addEventListener("keydown", function (e) {
  const number2 = document.querySelector(`button[data-key2="${e.keyCode}"]`);
  if (!number2) return;
  number2.click()
})