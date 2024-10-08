let multiplesOfFive = [];

for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
    multiplesOfFive.push(i);
  }
}

console.log(multiplesOfFive.join(", "));
