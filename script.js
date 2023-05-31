function convert() {
    // Get input values
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    const inputValue = parseFloat(document.getElementById("inputValue").value);

    // Perform conversion
    let outputValue;
    if (fromUnit === toUnit) {
        outputValue = inputValue;
    } else if (fromUnit === "cm" && toUnit === "m") {
        outputValue = inputValue / 100;
    } else if (fromUnit === "cm" && toUnit === "km") {
        outputValue = inputValue / 100000;
    } else if (fromUnit === "cm" && toUnit === "in") {
        outputValue = inputValue / 2.54;
    } else if (fromUnit === "cm" && toUnit === "ft") {
        outputValue = inputValue / 30.48;
    } else if (fromUnit === "cm" && toUnit === "yd") {
        outputValue = inputValue / 91.44;
    } else if (fromUnit === "cm" && toUnit === "mi") {
        outputValue = inputValue / 160934.4;
    } else if (fromUnit === "m" && toUnit === "cm") {
        outputValue = inputValue * 100;
    } else if (fromUnit === "m" && toUnit === "km") {
        outputValue = inputValue / 1000;
    } else if (fromUnit === "m" && toUnit === "in") {
        outputValue = inputValue * 39.37;
    } else if (fromUnit === "m" && toUnit === "ft") {
        outputValue = inputValue * 3.281;
    } else if (fromUnit === "m" && toUnit === "yd") {
        outputValue = inputValue * 1.094;
    } else if (fromUnit === "m" && toUnit === "mi") {
        outputValue = inputValue / 1609.344;
    } else if (fromUnit === "km" && toUnit === "cm") {
        outputValue = inputValue * 100000;
    } else if (fromUnit === "km" && toUnit === "m") {
        outputValue = inputValue * 1000;
    } else if (fromUnit === "km" && toUnit === "in") {
        outputValue = inputValue * 39370.079;
    } else if (fromUnit === "km" && toUnit === "ft") {
        outputValue = inputValue * 3280.84;
    } else if (fromUnit === "km" && toUnit === "yd") {
        outputValue = inputValue * 1093.613;
    } else if (fromUnit === "km" && toUnit === "mi") {
        outputValue = inputValue * 0.621;
    } else if (fromUnit === "in" && toUnit === "cm") {
        outputValue = inputValue * 2.54;
    } else if (fromUnit === "in" && toUnit === "m") {
        outputValue = inputValue * 0.0254;
    } else if (fromUnit === "in" && toUnit === "km") {
        outputValue = inputValue * 0.0000254;
    } else if (fromUnit === "in" && toUnit === "ft") {
        outputValue = inputValue * 0.0833;
    } else if (fromUnit === "in" && toUnit === "yd") {
        outputValue = inputValue * 0.0278;
    } else if (fromUnit === "in" && toUnit === "mi") {
        outputValue = inputValue * 0.0000158;
    } else if (fromUnit === "ft" && toUnit === "cm") {
        outputValue = inputValue * 30.48;
    } else if (fromUnit === "ft" && toUnit === "m") {
        outputValue = inputValue * 0.3048;
    } else if (fromUnit === "ft" && toUnit === "km") {
        outputValue = inputValue * 0.0003048;
    } else if (fromUnit === "ft" && toUnit === "in") {
        outputValue = inputValue * 12;
    } else if (fromUnit === "ft" && toUnit === "yd") {
        outputValue = inputValue * 0.3333;
    } else if (fromUnit === "ft" && toUnit === "mi") {
        outputValue = inputValue * 0.0001894;
    } else if (fromUnit === "yd" && toUnit === "cm") {
        outputValue = inputValue * 91.44;
    } else if (fromUnit === "yd" && toUnit === "m") {
        outputValue = inputValue * 0.9144;
    } else if (fromUnit === "yd" && toUnit === "km") {
        outputValue = inputValue * 0.0009144;
    } else if (fromUnit === "yd" && toUnit === "in") {
        outputValue = inputValue * 36;
    } else if (fromUnit === "yd" && toUnit === "ft") {
        outputValue = inputValue * 3;
    } else if (fromUnit === "yd" && toUnit === "mi") {
        outputValue = inputValue * 0.0005682;
    } else if (fromUnit === "mi" && toUnit === "cm") {
        outputValue = inputValue * 160934.4;
    } else if (fromUnit === "mi" && toUnit === "m") {
        outputValue = inputValue * 1609.344;
    } else if (fromUnit === "mi" && toUnit === "km") {
        outputValue = inputValue * 1.609344;
    } else if (fromUnit === "mi" && toUnit === "in") {
        outputValue = inputValue * 63360;
    } else if (fromUnit === "mi" && toUnit === "ft") {
        outputValue = inputValue * 5280;
    } else if (fromUnit === "mi" && toUnit === "yd") {
        outputValue = inputValue * 1760;
    } else if (fromUnit === "---Select---" && toUnit === "---Select---") {
        outputValue = "NAN";
    }


    // Display result
    document.getElementById("outputValue").value = outputValue.toFixed(2);
}

// Animate page after clicking the Convert button
document.getElementById("convertBtn").addEventListener("click", function() {
    document.body.classList.add("animated");
    setTimeout(function() {
        document.body.classList.remove("animated");
    }, 1000);
});
