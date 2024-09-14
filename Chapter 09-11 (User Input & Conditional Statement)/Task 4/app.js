let remainingFuel = prompt("Enter the remaining fuel in your car (in litres):");

remainingFuel = parseFloat(remainingFuel); 

if (remainingFuel < 0.25) {
    document.getElementById('content').innerText = "Please refill the fuel in your car";
} else {
    document.getElementById('content').innerText = "You have enough fuel for now";
}
