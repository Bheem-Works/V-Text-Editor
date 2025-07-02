// Dom Set up;
document.getElementById("textArea1").style.fontSize = "30px";
const textInput = document.getElementById("textArea1");
const redo = document.getElementById("redo");
const undo = document.getElementById("undo");
const paragraph = document.createElement("p");
document.body.appendChild(paragraph);

function bold() {
  document.getElementById("textArea1").style.fontWeight = "bold";
}

function italic() {
  document.getElementById("textArea1").style.fontStyle = "italic";
}

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

class textEditor {
  constructor() {
    this.history = [""];
    this.currentIndex = 0;
    undo.addEventListener("click", () => this.undo());
    redo.addEventListener("click", () => this.redo());
  }

  getUpdateValue(input) {
    this.history = this.history.slice(0, this.currentIndex + 1);
    this.history.push(input);
    this.currentIndex++;
  }
}
