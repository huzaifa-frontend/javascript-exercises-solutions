function calculateGrade() {
    let totalMarks = parseFloat(document.getElementById('totalMarks').value);
    let subject1 = parseFloat(document.getElementById('subject1').value);
    let subject2 = parseFloat(document.getElementById('subject2').value);
    let subject3 = parseFloat(document.getElementById('subject3').value);

    // Calculate total obtained marks
    let obtainedMarks = subject1 + subject2 + subject3;

    // Calculate percentage
    let percentage = (obtainedMarks / totalMarks) * 100;

    // Initialize grade and remarks
    let grade = "";
    let remarks = "";

    // Determine grade and remarks based on percentage
    if (percentage >= 80) {
        grade = "A-one";
        remarks = "Excellent";
    } else if (percentage >= 70) {
        grade = "A";
        remarks = "Good";
    } else if (percentage >= 60) {
        grade = "B";
        remarks = "You need to improve";
    } else {
        grade = "Fail";
        remarks = "Sorry";
    }

    // Display the results
    document.getElementById('obtained').innerText = obtainedMarks;
    document.getElementById('percentage').innerText = percentage.toFixed(2);
    document.getElementById('grade').innerText = grade;
    document.getElementById('remarks').innerText = remarks;
}