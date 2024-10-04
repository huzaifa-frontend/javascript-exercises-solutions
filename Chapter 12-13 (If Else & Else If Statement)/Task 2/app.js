let num1 , num2;
num1 = parseInt(prompt("Enter Any Number:"));
num2 = parseInt(prompt("Enter Any Number Again:"));

if(num1 > num2){
    alert("Number 1 is Greater");
}
else if (num1 < num2){
    alert("Number 2 is Greater");
}
else{
    alert("Both Numbers are Equal");
}