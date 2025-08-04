function convertToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function describeTemperature(fahrenheit) {
  const celsius = convertToCelsius(fahrenheit);
  if (celsius < 0) {
    return "very cold";
  } else if (celsius < 20) {
    return "cold";
  } else if (celsius < 30) {
    return "warm";
  } else if (celsius < 40) {
    return "hot";
  } else {
    return "very hot";
  }
}

const inputFahrenheit = prompt("Enter a temperature in Fahrenheit:");
if (inputFahrenheit != null) {
  const fahrenheit = parseFloat(inputFahrenheit);
  if (Number.isNaN(fahrenheit)) {
    alert("Please enter a valid number for the temperature.");
  } else {
    const celsius = convertToCelsius(fahrenheit);
    const description = describeTemperature(fahrenheit);
    alert(
      `The temperature is ${celsius.toFixed(
        1
      )}°C, which is considered ${description}.`
    );
  }
}
