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

    const savedValue = localStorage.getItem("textValue");
    if (savedValue) {
      this.history.push(savedValue);
      this.currentIndex = 1;
      textInput.value = savedValue;
      paragraph.textContent = savedValue;
    }
  }

  getUpdateValue(input) {
    this.history = this.history.slice(0, this.currentIndex + 1);
    this.history.push(input);
    this.currentIndex++;
    localStorage.setItem("textValue", input);
  }

  undo() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
    document.getElementById("textArea1").value =
      this.history[this.currentIndex];
    paragraph.textContent = this.history[this.currentIndex];
    return this.history[this.currentIndex];
  }

  redo() {
    if (this.currentIndex < this.history.length - 1) {
      this.currentIndex++;
    }
    document.getElementById("textArea1").value =
      this.history[this.currentIndex];
    paragraph.textContent = this.history[this.currentIndex];
    return this.history[this.currentIndex];
  }

  getInputValue() {
    return this.history[this.currentIndex];
  }
}

const editor = new textEditor();

textInput.addEventListener("input", (event) => {
  paragraph.textContent = event.target.value;
  editor.getUpdateValue(event.target.value);
  localStorage.setItem("inputValue", JSON.stringify(event.target.value));
  const getItem = localStorage.getItem("inputValue");
  const userData = JSON.parse(getItem);
  paragraph.textContent = userData;
  // console.log("currentValue", editor.getInputValue());
});

window.addEventListener("load", () => {
  const savedValue = localStorage.getItem("textValue");
  if (savedValue) {
    textInput.value = savedValue;
    paragraph.textContent = savedValue;
    editor.getUpdateValue(savedValue);
  }
});
