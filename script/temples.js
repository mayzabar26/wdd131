// Store the selected elements that we are going to use. 
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.navLinks');
const title = document.querySelector('.title');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    title.style.display = navLinks.classList.contains('open') ? 'none' : 'block';
    hamburger.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
});


//creating function for current year - footer
function getCurrentYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;
}

//creating function for last modified
function getLastModified () {
    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;
}

//Calling functions
getCurrentYear();
getLastModified();

