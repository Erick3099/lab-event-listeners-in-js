// // Handle Button Clicks

// // Function to change the background color when a button is clicked
// function changeBackgroundColor() {
//   // Implement the function to change background color
// }

// // Function to reset the background color when the body is double-clicked
// function resetBackgroundColor() {
//   // Implement the function to reset background color
// }

// // Capture Keyboard Input

// // Function to display the key pressed by the user
// function displayKeyPress(event) {
//   // Implement the function to display key pressed
// }

// // Process Text Input

// // Function to display user input in real-time
// function displayUserInput() {
//   // Implement the function to display user input
// }

// // Attach Event Listeners
// function setupEventListeners() {
// // Attach event listener to change background color when the button is clicked
//   document
//     .getElementById('changeColorButton')
//     .addEventListener('click', changeBackgroundColor)

//   // Attach event listener to reset background color when the body is double-clicked
//   document
//     .getElementById('resetColorButton')
//     .addEventListener('dblclick', resetBackgroundColor)

//   // Attach event listener to display key pressed when a key is pressed down
//   document.addEventListener('keydown', displayKeyPress)

//   // Attach event listener to display user input in real-time as they type
//   document.getElementById('textInput').addEventListener('input', displayUserInput)
// }

// // Initialize event listeners when the DOM is loaded
// if (typeof window !== 'undefined') {
//   document.addEventListener('DOMContentLoaded', setupEventListeners)
// }


function changeBackgroundColor() {
    const colors = ["#131010ff", "#C8E6C9", "#BBDEFB", "#FFF9C4", "#D1C4E9", "#FFECB3"];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

function resetBackgroundColor() {
    
    document.body.style.backgroundColor = "";
}

function displayKeyPress(event) {

    document.getElementById("keyPressDisplay").textContent = `Key pressed: ${event.key}`;
}


function displayUserInput() {
    const inputText = document.getElementById("textInput").value;
    document.getElementById("textInputDisplay").textContent = `You typed: ${inputText}`;
}


function setupEventListeners() {
    const changeBtn = document.getElementById("changeColorButton");
    const resetBtn = document.getElementById("resetColorButton");
    const textInput = document.getElementById("textInput");

    if (changeBtn) changeBtn.addEventListener("click", changeBackgroundColor);
    if (resetBtn) resetBtn.addEventListener("dblclick", resetBackgroundColor);
    if (textInput) textInput.addEventListener("input", displayUserInput);

    document.addEventListener("keydown", displayKeyPress);

    document.body.addEventListener("click", dynamicInteraction);
    document.body.addEventListener("keydown", dynamicInteraction);
    if (textInput) textInput.addEventListener("input", dynamicInteraction);
}

function dynamicInteraction(event) {
    if (event.type === "click" && event.target.id === "changeColorButton") {
        changeBackgroundColor();
    } else if (event.type === "dblclick" && event.target.id === "resetColorButton") {
        resetBackgroundColor();
    } else if (event.type === "keydown") {
        displayKeyPress(event);
    } else if (event.type === "input" && event.target.id === "textInput") {
        displayUserInput();
    }
}

if (typeof document == "undefined") {
    setupEventListeners();
}


module.exports = {
    changeBackgroundColor,
    resetBackgroundColor,
    displayKeyPress,
    displayUserInput,
    setupEventListeners,
    dynamicInteraction
};


