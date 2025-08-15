function convertTemperature() {
    let temp = parseFloat(document.getElementById("tempInput").value);
    let unit = document.getElementById("unitSelect").value;
    let resultBox = document.getElementById("resultBox");

    if (isNaN(temp)) {
        resultBox.innerHTML = "❌ Please enter a valid number.";
        resultBox.style.color = "red";
        return;
    }

    let celsius, fahrenheit, kelvin;

    switch (unit) {
        case "celsius":
            celsius = temp;
            fahrenheit = (temp * 9/5) + 32;
            kelvin = temp + 273.15;
            break;
        case "fahrenheit":
            celsius = (temp - 32) * 5/9;
            fahrenheit = temp;
            kelvin = celsius + 273.15;
            break;
        case "kelvin":
            celsius = temp - 273.15;
            fahrenheit = (celsius * 9/5) + 32;
            kelvin = temp;
            break;
    }

    resultBox.style.color = "#00ff99";
    resultBox.innerHTML = `
        🌡 <b>${celsius.toFixed(2)}°C</b> | 
        <b>${fahrenheit.toFixed(2)}°F</b> | 
        <b>${kelvin.toFixed(2)}K</b>
    `;
}
