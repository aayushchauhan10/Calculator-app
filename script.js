const display = document.getElementById("result");
let operand1 = "";
let operand2 = "";
let operator = "";
let result = 0;

function clear() {
  operand1 = "";
  operand2 = "";
  operator = "";
  result = 0;
  display.innerText = "0";
}

function sign() {
  if (operand1) {
    operand1 = -operand1;
    display.innerText = operand1;
  } else if (operand2) {
    operand2 = -operand2;
    display.innerText = operand2;
  }
}

function percent() {
  if (operand1) {
    operand1 = operand1 / 100;
    display.innerText = operand1;
  } else if (operand2) {
    operand2 = operand2 / 100;
    display.innerText = operand2;
  }
}

function appendNumber(number) {
  if (operator === "") {
    operand1 += number;
    display.innerText = operand1;
  } else {
    operand2 += number;
    display.innerText = operand2;
  }
}

function setOperator(operatorValue) {
  operator = operatorValue;
}

function calculate() {
  switch (operator) {
    case "+":
      result = parseFloat(operand1) + parseFloat(operand2);
      break;
    case "-":
      result = parseFloat(operand1) - parseFloat(operand2);
      break;
    case "*":
      result = parseFloat(operand1) * parseFloat(operand2);
      break;
    case "/":
      result = parseFloat(operand1) / parseFloat(operand2);
      break;
    default:
      result = 0;
      break;
  }

  operand1 = result.toString();
  operand2 = "";
  operator = "";
  display.innerText = result;
}

document.getElementById("clear").addEventListener("click", clear);
document.getElementById("sign").addEventListener("click", sign);
document.getElementById("percent").addEventListener("click", percent);

document.getElementById("decimal").addEventListener("click", function () {
  if (operator === "") {
    if (operand1.includes(".")) return;
    operand1 += "0.";
    display.innerText = operand1;
  } else {
    if (operand2.includes(".")) return;
    operand2 += "0.";
    display.innerText = operand2;
  }
});

document.getElementById("add").addEventListener("click", function () {
  if (operand1 === "") return;
  setOperator("+");
});
document.getElementById("subtract").addEventListener("click", function () {
  if (operand1 === "") return;
  setOperator("-");
});
document.getElementById("multiply").addEventListener("click", function () {
  if (operand1 === "") return;
  setOperator("*");
});
document.getElementById("divide").addEventListener("click", function () {
  if (operand1 === "") return;
  setOperator("/");
});

document.getElementById("equals").addEventListener("click", function () {
  if (operand1 === "" || operand2 === "" || operator === "") return;
  calculate();
});

document.getElementById("0").addEventListener("click", function () {
  appendNumber("0");
});
document.getElementById("1").addEventListener("click", function () {
  appendNumber("1");
});
document.getElementById("2").addEventListener("click", function () {
  appendNumber("2");
});
document.getElementById("3").addEventListener("click", function () {
  appendNumber("3");
});
document.getElementById("4").addEventListener("click", function () {
  appendNumber("4");
});
document.getElementById("5").addEventListener("click", function () {
  appendNumber("5");
});
document.getElementById("6").addEventListener("click", function () {
  appendNumber("6");
});
document.getElementById("7").addEventListener("click", function () {
  appendNumber("7");
});
document.getElementById("8").addEventListener("click", function () {
  appendNumber("8");
});
document.getElementById("9").addEventListener("click", function () {
  appendNumber("9");
});
