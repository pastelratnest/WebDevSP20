let textInput = document.getElementById("text-input");
let button = document.getElementById("button");
let textDisplay = document.getElementById("text-display");
let myPoem = "";
button.onclick = function() {
    let inputString = textInput.value;
    textDisplay.innerHTML = inputString;
    myPoem+=inputString + "<br>";
    textDisplay.innerHTML = myPoem
};