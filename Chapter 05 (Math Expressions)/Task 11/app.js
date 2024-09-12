function calculateAge() {
    // a. Store the current year in a variable
    var currentYear = new Date().getFullYear();
    
    // b. Store their birth year in a variable
    var birthYear = 1990; 
    
    // c. Calculate their two possible ages
    var ageThisYear = currentYear - birthYear;
    var ageNextYear = ageThisYear + 1;
    
    var resultHTML = "<h3>Age Calculator</h3>";
            resultHTML += "<p>Current Year: " + currentYear + "</p>";
            resultHTML += "<p>Birth Year: " + birthYear + "</p>";
            resultHTML += "<p>They are either " + ageThisYear + " or " + ageNextYear + " years old.</p>";
            
            document.getElementById('ageResult').innerHTML = resultHTML;
}

window.onload = calculateAge;