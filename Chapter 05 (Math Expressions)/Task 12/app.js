function calculateCircleProperties() {
    // a. Store the radius into a variable
    var radius = 5; 
    
    // π constant
    var pi = 3.142;
    
    // b. Calculate the circumference
    var circumference = 2 * pi * radius;
    
    // Calculate the area
    var area = pi * radius * radius;
    
    // Output the results
    var resultHTML = "<h3>Circle Properties</h3>";
    resultHTML += "<p>Radius of the circle is " + radius + "</p>";
    resultHTML += "<p>The circumference is " + circumference.toFixed(2) + "</p>";
    resultHTML += "<p>The area is " + area.toFixed(2) + "</p>";
    
    document.getElementById('circleResult').innerHTML = resultHTML;
}

window.onload = calculateCircleProperties;