const inputElement = document.querySelector(".first-input");
const inputElement2 = document.querySelector(".second-input");
const answerP = document.querySelector(".answer");
const errorP = document.querySelector(".error");
const btn = document.querySelector(".btn");
const selector = document.querySelector(".sum-option");

let answer = ["", ""];
inputElement.addEventListener("keyup", function () {
  answer[0] = parseFloat(inputElement.value);
  errorP.innerHTML = ""
});

inputElement2.addEventListener("keyup", function () {
  answer[1] = parseFloat(inputElement2.value);
  errorP.innerHTML = ""
});

btn.addEventListener("click", function () {
  if (isNaN(answer[0])) {
    errorP.innerHTML = "First value is not a number";
    answerP.innerHTML = ""
    return;
  }
  if (isNaN(answer[1])) {
    errorP.innerHTML = "Second value is not a number";
    answerP.innerHTML = ""
    // setTimeout(function(){
    //   errorP.innerHTML = ""
    // }, 2000)
    return;
  }

  switch (selector.value) {
    case "+":
      answerP.innerHTML = answer[0] + answer[1];
      break;

    case "-":
      answerP.innerHTML = answer[0] - answer[1];
      break;


    default:
      errorP.innerHTML = "Invalid selector";
      break;
  }
});
