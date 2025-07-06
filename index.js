// Dom setUp

document.getElementById("textArea1").style.fontSize = "30px";
const textInput = document.getElementById("textArea1");
const redo = document.getElementById("redo");
const undo = document.getElementById("undo");

function bold() {
  document.getElementById("textArea1").style.fontWeight = "bold";
}

function italic() {
  document.getElementById("textArea1").style.fontStyle = "italic";
}

function upperCase() {
  document.getElementById("textArea1").style.textTransform = "upperCase";
}

function lowerCase() {
  document.getElementById("textArea1").style.textTransform = "lowerCase";
}

function capitalize() {
  document.getElementById("textArea1").style.textTransform = "capitalize";
}

function clearText() {
  document.getElementById("textArea1").value = " ";
}

class textEditor {
  constructor() {
    this.history = [' '];
    this.currentIndex = 0;
    undo.addEventListener("click", () => this.undoOnly());
    redo.addEventListener("click", () => this.redoOnly());

    // local storage get item of the conditions;
  const savedValue = localStorage.getItem("textValue");
    if(savedValue){
     this.history.push(savedValue);
      this.currentIndex = 1;
      textInput.value = savedValue;
    }

  }

  getUpdateValue(input) {
    this.history = this.history.slice(0, this.currentIndex + 1);
    this.currentIndex++;
    // set the input to the local storage.
    this.history.push(input);
    localStorage.setItem("textValue", input);
    
  }

  undoOnly() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
    document.getElementById("textArea1").value =
      this.history[this.currentIndex];
    return this.history[this.currentIndex];
  }

  redoOnly() {
    if (this.currentIndex < this.history.length - 1) {
      this.currentIndex++;
    }
    document.getElementById("textArea1").value =
      this.history[this.currentIndex];
    return this.history[this.currentIndex];
  }

  getInputValue() {
    this.history[this.currentIndex];
  }
}

const editor = new textEditor();

textInput.addEventListener("input", (event) => {
  editor.getUpdateValue(event.target.value);
  // there can be be error let me check it.
  localStorage.setItem("textValue", JSON.stringify(event.target.value));
  const getItem = localStorage.getItem("textValue");
  const userData = JSON.parse(getItem);
  console.log("itemGetPlease", userData);
});

window.addEventListener('load', () => {
  const savedValue = localStorage.getItem("textValue")
  if(savedValue){
    textInput.value = savedValue;
    editor.getUpdateValue(savedValue);
  }
})
