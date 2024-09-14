const firstNumber = parseFloat(prompt("Enter the first number:"));
const secondNumber = parseFloat(prompt("Enter the second number:"));

const operation = prompt("Enter the operation (+, -, *, /, %):");

let result;

if (operation === '+') {
    result = firstNumber + secondNumber;
} else if (operation === '-') {
    result = firstNumber - secondNumber;
} else if (operation === '*') {
    result = firstNumber * secondNumber;
} else if (operation === '/') {
    // Check for division by zero
    if (secondNumber !== 0) {
        result = firstNumber / secondNumber;
    } else {
        alert("Error: Division by zero is not allowed.");
        result = "undefined";
    }
} else if (operation === '%') {
    result = firstNumber % secondNumber;
} else {
    alert("Invalid operation. Please enter one of +, -, *, /, %.");
    result = "undefined";
}

// Show the result to the user
if (result !== "undefined") {
    alert("The result is: " + result);
}
