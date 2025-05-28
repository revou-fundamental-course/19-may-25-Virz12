// DOM Collection
const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const formula = document.getElementById("formula");

const errorMessage = document.querySelector(".error-message")

const convertButton = document.getElementById("convertButton");
const resetButton = document.getElementById("resetButton");
const reverseButton = document.getElementById("reverseButton");

// Function to convert Celsius to Fahrenheit
const convertCalculation = () => {
  const celsiusValue = parseFloat(celsius.value);
  if (isNaN(celsiusValue) || celsiusValue == null) {
    fahrenheit.value = "";
    formula.value = "";
    addErrorMessages();
  } else {
    const f = (celsiusValue * 9 / 5) + 32;
    fahrenheit.value = f.toFixed(2);
    formula.value = `${celsiusValue}°C × (9/5) + 32 = ${fahrenheit.value}°F`;
    removeErrorMessages();
  }
}

// Add event listeners for the buttons
convertButton.addEventListener("click", convertCalculation);

// Reset the input fields and formula
resetButton.addEventListener("click", () => {
  celsius.value = "";
  fahrenheit.value = "";
  formula.value = "";
  removeErrorMessages();
});

// Function to convert Fahrenheit to Celsius
const reverseCalculation = () => {
  const fahrenheitValue = parseFloat(fahrenheit.value);
  if (isNaN(fahrenheitValue)) {
    formula.value = "";
    addErrorMessages();
  } else {
    const c = (fahrenheitValue - 32) * 5 / 9;
    celsius.value = c.toFixed(2);
    formula.value = `(${fahrenheitValue}°F - 32) × (5/9) = ${celsius.value}°C`;
    removeErrorMessages();
  }
}

// Add event listener for the reverse button
reverseButton.addEventListener("click", reverseCalculation);

// Helper functions to manage error messages
const removeErrorMessages = () => {
  errorMessage.innerText = "";
  errorMessage.classList.remove("error", "box");
  errorMessage.style.display = "none";
}

const addErrorMessages = () => {
  errorMessage.innerText = "Invalid input";
  errorMessage.classList.add("error", "box");
  errorMessage.style.display = "block";
}