 // a. Store correct password in a JS variable.
 let correctPassword = "Task5";  

 // b. Ask the user to enter his/her password
 let userPassword = prompt("Please enter your password:");

 // c. Validate the two passwords:
 // i. Check if the user has entered the password
 if (userPassword === null || userPassword === "") {
     alert("Please enter your password.");
 }
 // ii. Check if both passwords are the same
 else if (userPassword === correctPassword) {
     alert("Correct! The password you entered matches the original password.");
 }
 else {
     alert("Incorrect password.");
 }