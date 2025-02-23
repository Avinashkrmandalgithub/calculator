const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

// calulating based on button clicked 
const calculate = (btnVal) => {
  if(btnVal === "=" && output !== ""){
    output = eval(output.replace("%", "/100"));
  } else if (btnVal === "AC"){
    output = "";
  } else if (btnVal === "DEL"){
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && specialChars.includes(btnVal)) return;
    output += btnVal;
  }
  display.value = output;
};



// adding eventlistener to button 
buttons.forEach((button) => {
  button.addEventListener("click", (e) => 
  calculate(e.target.dataset.value));
});