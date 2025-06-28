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
