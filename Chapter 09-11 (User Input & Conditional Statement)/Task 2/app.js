let gender;
gender = prompt("Enter your gender: ");
if(gender === "male"){
    document.getElementById('content').innerText= "Good Morning Sir.";
}
else{
    document.getElementById('content').innerText= "Good Morning Ma'am.";
}