let numberBtns = document.querySelectorAll(".numberBtn");
let operationBtns = document.querySelectorAll(".operationBtn");
let userInput = document.getElementById("userInput");
let clearBtn = document.querySelector(".clear-all");
let value = "";

numberBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    userInput.value += e.target.textContent;
  });
});

let operation = "";
let firstNumber = "";

operationBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.textContent === "=") {
      const secondNumber = userInput.value.slice(firstNumber.length + 1);
      let result;
      switch (operation) {
        case "+":
          console.log(firstNumber, secondNumber);
          result = parseInt(firstNumber) + parseInt(secondNumber);
          break;
        case "-":
          result = parseInt(firstNumber) - parseInt(secondNumber);
          break;
        case "x":
          result = parseInt(firstNumber) * parseInt(secondNumber);
          break;
        case "÷":
          if (parseInt(firstNumber) / parseInt(secondNumber) === Infinity) {
            result = "Infinity";
          } else {
            result = parseInt(firstNumber) / parseInt(secondNumber);
          }
          break;
        default:
          result = "";
          break;
      }
      userInput.value = Math.round(result * 100) / 100;
      firstNumber = result.toString();
      operation = "";
    } else {
      firstNumber = userInput.value;
      operation = e.target.textContent;
      userInput.value += operation;
    }
  });
});

clearBtn.addEventListener("click", (e) => {
  userInput.value = "";
});
