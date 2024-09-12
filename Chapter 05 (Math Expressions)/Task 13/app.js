function calculateLifetimeSupply() {
    // a. Store your favorite snack into a variable
    var favoriteSnack = "chocolates"; 
    
    // b. Store your current age into a variable
    var currentAge = 25; 
    
    // c. Store a maximum age into a variable
    var maxAge = 80; 
    
    // d. Store an estimated amount per day (as a number)
    var amountPerDay = 2; 
    
    // e. Calculate how many would you eat total for the rest of your life
    var yearsLeft = maxAge - currentAge;
    var totalAmount = yearsLeft * 365 * amountPerDay;
    
    // Output the result
    var resultHTML = "<h2>Lifetime Supply Calculator</h2>";
    resultHTML += "<p>Favorite Snack: " + favoriteSnack + "</p>";
    resultHTML += "<p>Current Age: " + currentAge + "</p>";
    resultHTML += "<p>Estimated Maximum Age: " + maxAge + "</p>";
    resultHTML += "<p>Amount of snacks per Day: " + amountPerDay + "</p>";
    resultHTML += "<p>You will need " + totalAmount + " " + favoriteSnack + "s to last you until the ripe old age of " + maxAge + ".</p>";
    document.getElementById('supplyResult').innerHTML = resultHTML;
}

window.onload = calculateLifetimeSupply;