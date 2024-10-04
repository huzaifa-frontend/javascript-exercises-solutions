let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
let qualificationsText = '';

for (let i = 0; i < qualifications.length; i++) {
    qualificationsText += (i + 1) + ') ' + qualifications[i] + '<br>';
}

document.getElementById('qualifications').innerHTML = qualificationsText;