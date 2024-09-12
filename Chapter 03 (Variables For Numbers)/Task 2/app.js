let visitCount = localStorage.getItem('visitCount');

if (visitCount === null) {
    visitCount = 0;
}

visitCount++;

localStorage.setItem('visitCount', visitCount);

alert(`You have visited this site ${visitCount} times.`);