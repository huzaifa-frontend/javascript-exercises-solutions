let A = [24, 53, 78, 91, 12];

let largestNumber = Math.max(...A);

document.getElementById("array").innerHTML += "Array Items: " + A + "<br>";
document.getElementById("array").innerHTML += ("The largest number in the array is: " + largestNumber);
