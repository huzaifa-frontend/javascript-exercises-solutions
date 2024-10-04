let time = prompt("Please enter the time in 24-hour format (e.g., 1900 = 7pm):");
time = parseInt(time);

if (time >= 0 && time < 1200) {
    alert("Good Morning");
} 
else if (time >= 1200 && time < 1700) {
    alert("Good Afternoon");
} 
else if (time >= 1700 && time < 2100) {
    alert("Good Evening");
} 
else if (time >= 2100 && time <= 2359) {
    alert("Good Night");
} 
else {
    alert("Invalid time input. Please enter a valid time in the range of 0000 to 2359.");
}