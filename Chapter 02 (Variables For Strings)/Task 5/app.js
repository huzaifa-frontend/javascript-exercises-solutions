let word = "PIZZA";
let result = "";

for (let i = word.length; i > 0; i--) {
  result += word.slice(0, i) + "\n";
}

alert(result);