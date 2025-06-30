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
const textValue = document.getElementById("textArea1").value;
const paragraph = document.createElement("p");
paragraph.textContent = paragraph;
document.body.appendChild(paragraph);
console.log(textValue);

let name = ["vim"];
let currentIndex = 0;
let pushName = name.push("vimo");
console.log(pushName);
