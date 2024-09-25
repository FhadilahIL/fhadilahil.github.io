function showAge() {
    const today = moment()
    const myBirthDay = moment('1999-01-08')
    
    let age = today.year() - myBirthDay.year()

    // Adjust if the birthday hasn't occurred yet this year
    if (today.month() < myBirthDay.month() || (today.month() === myBirthDay.month() && today.date() < myBirthDay.date())) {
        age--;
    }
    
    document.getElementById('birthday').textContent = `${myBirthDay.format('DD MMMM YYYY')}`;
    document.getElementById('age').textContent = `${age} Years`;
}

function copyrights() {
    const startYear = 2024
    const currentYear = moment().year()
    
    // Set footer text based on whether the current year is greater than startYear
    document.getElementById('footerYear').textContent = startYear === currentYear ? startYear : `${startYear} - ${currentYear}`
}

showAge();
copyrights();