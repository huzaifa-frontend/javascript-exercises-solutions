let tableNumber = parseInt(prompt("Enter the table number:"));
let tableLength = parseInt(prompt("Enter the length of the table:"));

for (let i = 1; i <= tableLength; i++) {
  document.getElementById("print-table").innerHTML += (`${tableNumber} x ${i} = ${tableNumber * i}<br>`);
}
