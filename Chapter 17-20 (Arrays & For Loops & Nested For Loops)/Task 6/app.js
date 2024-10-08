// Counting 1 to 15
let counting = "";
for (let i = 1; i <= 15; i++) {
  counting += i + ", ";
}
console.log("Counting: " + counting);

// Reverse counting 10 to 1
let reverseCounting = "";
for (let i = 10; i >= 1; i--) {
  reverseCounting += i + ", ";
}
console.log("Reverse counting: " + reverseCounting);

// Even numbers from 0 to 20
let even = "";
for (let i = 0; i <= 20; i += 2) {
  even += i + ", ";
}
console.log("Even: " + even);

// Odd numbers from 1 to 19
let odd = "";
for (let i = 1; i <= 19; i += 2) {
  odd += i + ", ";
}
console.log("Odd: " + odd);

// Series 2k to 20k
let series = "";
for (let i = 2; i <= 20; i += 2) {
  series += i + "k, ";
}
console.log("Series: " + series);
