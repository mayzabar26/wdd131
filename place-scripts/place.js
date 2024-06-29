//function for last modified element
function getLastModified () {
    const lasModified = document.lastModified;
    document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;
}

//Calling functions
getCurrentYear();
getLastModified();