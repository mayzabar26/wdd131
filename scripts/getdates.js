//Function for current year
function getCurrentYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;
}

//Function to get the last modified
function getLastModified() {
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = `Last modified: ${lastModified}`;
}

//Calling functions 
getCurrentYear();
getLastModified();