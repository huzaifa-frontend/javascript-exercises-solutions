let A = [24, 53, 78, 91, 12];

let smallestNumber = Math.min(...A);

document.getElementById("array").innerHTML += "Array Items: " + A + "<br>";
document.getElementById("array").innerHTML += ("The smallest number in the array is: " + smallestNumber);
