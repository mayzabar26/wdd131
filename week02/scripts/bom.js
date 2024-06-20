//three (3) variables that hold references to the input, button, and list elements.
const input = document.querySelector("#favchap");
const button = document.querySelector("button[type='submit']");
const list = document.querySelector("#list");

//Event listener to add chapter
button.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    //Checking if the input field isn't empty
    if(input.value.trim() !== "") {

    //Creating a li element and the delete button element 
    const li = document.createElement("li");
    li.textContent = input.value.trim(); //Populate the li element variable's textContent or innerHTML with the input value.

    //Creating a delete button for the <li>
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌"; //Populate the button textContent with a x.

    //Add an event listener to the delete button that removes the li element when clicked.
    deleteBtn.addEventListener("click", function() {
        li.remove();
        input.focus();
    });

    //Append the li element variable with the delete button.
    li.appendChild(deleteBtn); 

    //Append the <li> to the <ul> list
    list.appendChild(li);

    //Change the input value to nothing or the empty string to clean up the interface for the user.
    input.value = "";

    // Return focus to the input field
    input.focus();
} else {
    alert("Please enter a chapter title."); // Alert if input field is empty
    input.focus(); // Return focus to the input field
    }
});