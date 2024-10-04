let studentScores = [85, 70, 95, 60, 78, 88, 92];
document.getElementById('scores-array').innerHTML = 'Original Scores: ' + studentScores.join(', ');

// Sort the array in ascending order
let sortedScore = studentScores.sort((a, b) => a - b);
document.getElementById('scores-array').innerHTML += '<br>Sorted Scores: ' + sortedScore.join(', ');



