// Initialize the array with color names
let colors = ["Red", "Green", "Blue", "Yellow", "Purple"];

// Function to display the array
function displayColors() {
    document.getElementById('color-array').innerHTML = colors.join(', ');
}

// Function to pause execution
function pause(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
}

// Async function to run the color operations

async function runColorOperations() {
    // Display initial colors
    displayColors();
    await pause(2000); // Pause for 2 seconds

    // a. Ask user for a color to add to the beginning
    let colorToAddBeginning = prompt("What color do you want to add to the beginning?");
    colors.unshift(colorToAddBeginning);
    displayColors();
    await pause(2000); 

    // b. Ask user for a color to add to the end
    let colorToAddEnd = prompt("What color do you want to add to the end?");
    colors.push(colorToAddEnd);
    displayColors();
    await pause(2000); 

    // c. Add two more colors to the beginning
    colors.unshift("Orange", "Pink");
    displayColors();
    await pause(2000); 

    // d. Delete the first color in the array
    colors.shift();
    displayColors();
    await pause(2000); 

    // e. Delete the last color in the array
    colors.pop();
    displayColors();
    await pause(2000);

    // f. Ask user at which index to add a color
    let indexToAdd = parseInt(prompt("At which index do you want to add a color?"));
    let colorToAdd = prompt("Enter the color name:");
    colors.splice(indexToAdd, 0, colorToAdd);
    displayColors();
    await pause(2000); 

    // g. Ask user at which index to delete color(s) and how many
    let indexToDelete = parseInt(prompt("At which index do you want to delete color(s)?"));
    let numToDelete = parseInt(prompt("How many colors do you want to delete?"));
    colors.splice(indexToDelete, numToDelete);
    displayColors();
    await pause(2000); 
}

// Start the operations
runColorOperations();
