// Array of available items in the bakery
let A = ["cake", "apple pie", "cookie", "chips", "patties"];

// Prompt the user to input their order
let userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");

// Search for the item in the array
let itemIndex = A.indexOf(userInput);

// Check if the item is available or not
if (itemIndex !== -1) {
  alert(`${userInput} is available at index ${itemIndex} in our bakery`);
} else {
  alert(`We are sorry. ${userInput} is not available in our bakery`);
}
