let signalColor = prompt("Enter the color of the road traffic signal (Red, Yellow, Green):");
signalColor = signalColor.toLowerCase(); 

if (signalColor === "red") {
    alert("Must Stop");
} else if (signalColor === "yellow") {
    alert("Ready to move");
} else if (signalColor === "green") {
    alert("Move now");
} else {
    alert("Invalid color! Please enter Red, Yellow, or Green.");
}
