let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar", "Multan"];
let selectedCities = [];

selectedCities = cities.slice(0, 3); 

document.getElementById('cities-array').innerHTML = '<b>Cities</b>: ' + cities.join(', ');
document.getElementById('selected-cities').innerHTML = '<b>Selected Cities</b>: ' + selectedCities.join(', ');
