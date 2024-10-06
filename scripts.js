// adding values to display
function addToScreen(value) {
  const display = document.getElementById('display');
  if (display.value === "0") {
      display.value = value;
  } else {
      display.value += value;
  }
}

//clear display
function clearDisplay() {
  const display = document.getElementById('display');
  display.value = "0"; 
}

// result function
function calculate() {
  const display = document.getElementById('display');
  try {
      // used eval for calculation
      display.value = eval(display.value);
  } catch (error) {
      // In case of error
      display.value = "0";
  }
}

// Function sqrt
function square() {
  const display = document.getElementById('display');
  const currentValue = parseFloat(display.value);
  display.value = Math.pow(currentValue, 2);
}

// Function percentage
function addPercentage() {
  const display = document.getElementById('display');
  const currentValue = parseFloat(display.value);
  display.value = currentValue / 100;
}
