let students = ["Michael", "John", "Tony"];
let scores = [320, 230, 480];
let totalMarks = 500;
let output = '';

for (let i = 0; i < students.length; i++) {
    let percentage = (scores[i] / totalMarks) * 100;
    output += `Score of ${students[i]} is ${scores[i]}. Percentage: ${percentage}%<br>`;
}

document.getElementById('student-scores').innerHTML = output;