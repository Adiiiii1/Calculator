// Displays value in input field
function append(value) {
  const display = document.getElementById("display");
  display.value += value;
}

// Clears display
function clearDisplay() {
  document.getElementById("display").value = "";
}

// Calculates square of the current value
function square() {
  let display = document.getElementById("display");
  if (display.value !== "") {
    display.value = Math.pow(eval(display.value), 2);
  }
}

// Evaluates the expression
function calculate() {
  let display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
// Handle keyboard support
document.addEventListener('keydown', function (e) {
  const key = e.key;

  if (!isNaN(key) || ['+', '-', '*', '/', '.', '%'].includes(key)) {
    append(key);
  } else if (key === 'Enter') {
    e.preventDefault(); // Prevent form submission if any
    calculate();
  } else if (key === 'Backspace') {
    backspace();
  } else if (key === 'Escape') {
    clearDisplay();
  }
});

// Add result to history
function addToHistory(expression, result) {
  const historyList = document.getElementById('history');
  const item = document.createElement('li');
  item.className = 'list-group-item';
  item.textContent = `${expression} = ${result}`;
  historyList.prepend(item);
}

// Override calculate() to include history tracking
function calculate() {
  let display = document.getElementById("display");
  try {
    const expression = display.value;
    const result = eval(expression);
    display.value = result;
    addToHistory(expression, result);
  } catch (error) {
    display.value = "Error";
  }
}

// Toggle dark/light mode
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}

// Delete last character
function backspace() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}
// Append characters to the display
function append(value) {
  const display = document.getElementById("display");
  display.value += value;
}

// Clear the input display
function clearDisplay() {
  document.getElementById("display").value = "";
}

// Calculate square
function square() {
  let display = document.getElementById("display");
  if (display.value !== "") {
    display.value = Math.pow(eval(display.value), 2);
  }
}

// Perform calculation and add to history
function calculate() {
  let display = document.getElementById("display");
  try {
    const expression = display.value;
    const result = eval(expression);
    display.value = result;
    addToHistory(expression, result);
  } catch (error) {
    display.value = "Error";
  }
}

// Backspace last character
function backspace() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

// Toggle light/dark mode
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}

// Add expression to history
function addToHistory(expression, result) {
  const historyList = document.getElementById('history');
  const item = document.createElement('li');
  item.className = 'list-group-item';
  item.textContent = `${expression} = ${result}`;
  historyList.prepend(item);
}

// Clear history manually
function clearHistory() {
  const historyList = document.getElementById('history');
  historyList.innerHTML = "";
}

// Keyboard support
document.addEventListener('keydown', function (e) {
  const key = e.key;

  if (!isNaN(key) || ['+', '-', '*', '/', '.', '%'].includes(key)) {
    append(key);
  } else if (key === 'Enter') {
    e.preventDefault();
    calculate();
  } else if (key === 'Backspace') {
    backspace();
  } else if (key === 'Escape') {
    clearDisplay();
  }
});
