const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const formula = document.getElementById("formula");

const errorMessage = document.querySelector(".error-message")

const convertButton = document.getElementById("convertButton");
const resetButton = document.getElementById("resetButton");
const reverseButton = document.getElementById("reverseButton");

// Convert Celsius to Fahrenheit
// and display the formula
convertButton.addEventListener("click", () => {
  const celsiusValue = parseFloat(celsius.value);
  if (isNaN(celsiusValue) || celsiusValue == null) {
    errorMessage.innerText = "Invalid input";
    fahrenheit.value = "";
    formula.value = "";
  } else {
    const f = (celsiusValue * 9 / 5) + 32;
    fahrenheit.value = f.toFixed(2);
    formula.value = `${celsiusValue}°C × (9/5) + 32 = ${fahrenheit.value}°F`;
    removeErrorMessages();
  }
});

// Reset the input fields and formula
resetButton.addEventListener("click", () => {
  celsius.value = "";
  fahrenheit.value = "";
  formula.value = "";
  removeErrorMessages();
});

// Reverse to convert from Fahrenheit to Celsius
reverseButton.addEventListener("click", () => {
  const fahrenheitValue = parseFloat(fahrenheit.value);
  if (isNaN(fahrenheitValue)) {
    errorMessage.innerText = "Invalid input";
    formula.value = "";
  } else {
    const c = (fahrenheitValue - 32) * 5 / 9;
    celsius.value = c.toFixed(2);
    formula.value = `${fahrenheitValue}°F - 32) × (5/9) = ${celsius.value}°C`;
    removeErrorMessages();
  }
});

const removeErrorMessages = () => {
  errorMessage.innerText = "";
}