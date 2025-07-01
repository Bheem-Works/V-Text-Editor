// append the buttons;
// acess grnu chai mildaina?

// Increasing the size of the text;
document.getElementById("textArea1").style.fontSize = "30px";
function bold() {
  document.getElementById("textArea1").style.fontWeight = "bold";
}

function italic() {
  document.getElementById("textArea1").style.fontStyle = "italic";
}

// I need to make the undo and redo sections;
// But the video where saying the undo and the redo treee list.
function undo() {
  let undo = "this is the undo";
  console.log(undo);
}

function redo() {}

function upperCase() {
  document.getElementById("textArea1").style.textTransform = "uppercase";
}

function lowerCase() {
  document.getElementById("textArea1").style.textTransform = "lowercase";
}

function capitalize() {
  document.getElementById("textArea1").style.textTransform = "capitalize";
}

function clearText() {
  document.getElementById("textArea1").value = "";
}

// Initial state: history = [''], currentIndex = 0.
// User types "vim": updateInput("vim") → history = ['', 'vim'], currentIndex = 1.
// User deletes to "vi": updateInput("vi") → history = ['', 'vim', 'vi'], currentIndex = 2.
// User clicks undo: undo() → currentIndex = 1, returns "vim".
// User clicks undo again: undo() → currentIndex = 0, returns "" (empty string).
// User clicks redo: redo() → currentIndex = 1, returns "vim".
// User clicks redo again: redo() → currentIndex = 2, returns "vi".
//

// Get the input value;
const paragraph = document.createElement("p");
const textInput = document.getElementById("textArea1");
textInput.addEventListener("change", changeInput);
function changeInput(event) {
  paragraph.textContent = event.target.value;
  document.body.appendChild(paragraph);
  const array = event.target.value;
  const threadArray = [...array]; // To get the all text seprated. And easy to undo and the redo;
  console.log("array", threadArray);
}

// I need to convert this text to the arrays;
