const secretNumber = Math.floor(Math.random() * 10) + 1;
const userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

if (userGuess === secretNumber) {
    alert("Bingo! Correct answer");
}

else if (userGuess + 1 === secretNumber) {
    alert("Close enough to the correct answer");
}

else {
    alert("Sorry, that's not correct");
}