// Store the selected elements that we are going to use. 
const mainnav = document.querySelector(".nav-bar")
const hambutton = document.querySelector("#menu");

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle("show");
	hambutton.classList.toggle("show");
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

