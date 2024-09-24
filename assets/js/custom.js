function showAge() {
    const myBirthDay = new Date('1999-01-08');
    const today = new Date();
    
    let age = today.getFullYear() - myBirthDay.getFullYear();

    // Adjust if the birthday hasn't occurred yet this year
    if (today.getMonth() < myBirthDay.getMonth() || (today.getMonth() === myBirthDay.getMonth() && today.getDate() < myBirthDay.getDate())) {
        age--;
    }
    
    document.getElementById('age').textContent = `${age} Years`;
}

function copyrights() {
    const startYear = 2024
    const currentYear = new Date().getFullYear()
    
    // Set footer text based on whether the current year is greater than startYear
    document.getElementById('footerYear').textContent = startYear === currentYear ? startYear : `${startYear} - ${currentYear}`
}

showAge();
copyrights();