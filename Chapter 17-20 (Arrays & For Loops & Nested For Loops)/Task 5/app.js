let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (let i = 0; i < fruits.length; i++) {
    document.getElementById("element").innerHTML += (fruits[i]) + "<br>";
  }

  document.getElementById("element").innerHTML += "<br>";
  
for (let i = 0; i < fruits.length; i++) {
    document.getElementById("element").innerHTML += (`Element at index ${i} is ${fruits[i]}<br>`);
}
