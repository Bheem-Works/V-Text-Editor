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

// undo and the redo;
const undo = document.getElementById("undo");
const redo = document.getElementById("redo");

function changeInput(event) {
  paragraph.textContent = event.target.value; // Demo..
  document.body.appendChild(paragraph); // Demo..

  const array = [...event.target.value];
  // const threadArray = [...array]; // To get the all text seprated. And easy to undo and the redo;
  console.log("array", array);

  const historyArray = [""];
  const currentIndex = 0;

  class textEditor {
    constructor() {
      this.history = [""];
      this.currentIndex = 0;
      // By using the chat gpt i know that i can also acess the outside varaible to the class;
      undo.addEventListener("click", this.undoOnly);
      redo.addEventListener("click", this.redoOnly);
    }

    getUpdateValue(input) {
      this.history = this.history.slice(0, this.currentIndex + 1);
      this.currentIndex++;
      this.history.push(input);
    }

    undoOnly() {
      // this is for the only undo; we have to decrement the value;
      if (this.currentIndex > 0) {
        this.currentIndex--;
        this.history[this.currentIndex];
      }
      return this.history[0];
    }

    // for the redo();
    redoOnly() {
      if (this.currentIndex < this.history.length - 1) {
        this.currentIndex++;
        this.history[this.currentIndex];
      }
      return this.history[this.currentIndex];
    }

    getUdpateValue() {
      this.history[this.currentIndex];
    }
  }

  const editorAppend = new textEditor();
  editorAppend.getUdpateValue("vim");
  console.log(editorAppend);
}
