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