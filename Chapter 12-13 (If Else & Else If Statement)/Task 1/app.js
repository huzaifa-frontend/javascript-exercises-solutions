let char = prompt("Enter a character(number or string):");

if (char.length !== 1) {
    console.log("Please enter a single character.");
} else {
    let asciiValue = char.charCodeAt(0); 

    if (asciiValue >= 48 && asciiValue <= 57) {
        console.log("The input is a number.");
    }
    else if (asciiValue >= 65 && asciiValue <= 90) {
        console.log("The input is an uppercase letter.");
    }
    else if (asciiValue >= 97 && asciiValue <= 122) {
        console.log("The input is a lowercase letter.");
    } else {
        console.log("The input is not a number or letter.");
    }
}