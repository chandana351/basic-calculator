const display = document.getElementById('display');
let memory = 0; // Memory storage

// Append value to display
function appendValue(value) {
  display.value += value;
}

// Clear display
function clearDisplay() {
  display.value = '';
}

// Delete last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Calculate expression
function calculate() {
  try {
    if (display.value === '') return;
    let result = eval(display.value);
    if (!isFinite(result)) throw Error("Math Error");
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}

// Percentage
function percentage() {
  try {
    if (display.value === '') return;
    display.value = parseFloat(display.value) / 100;
  } catch {
    display.value = "Error";
  }
}

// Square Root
function squareRoot() {
  try {
    if (display.value === '') return;
    let value = parseFloat(display.value);
    if (value < 0) throw Error("Math Error");
    display.value = Math.sqrt(value);
  } catch {
    display.value = "Error";
  }
}

// Memory Functions
function memoryClear() {
  memory = 0;
}

function memoryRecall() {
  display.value += memory;
}

function memoryAdd() {
  try {
    if (display.value !== '') memory += parseFloat(display.value);
  } catch {
    display.value = "Error";
  }
}

function memorySubtract() {
  try {
    if (display.value !== '') memory -= parseFloat(display.value);
  } catch {
    display.value = "Error";
  }
}

// Keyboard support
document.addEventListener("keydown", function(event) {
  const key = event.key;
  if (!isNaN(key) || "+-*/.".includes(key)) {
    appendValue(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    deleteLast();
  } else if (key === "Escape") {
    clearDisplay();
  }
});
