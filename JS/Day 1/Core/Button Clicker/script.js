function login(element) { /* switch between login and logout */
    if(element.innerText == "Login") {
        element.innerText = "Logout";
    } 
    else {
        element.innerText = "Login";
    }
}

function message() { /* alert when pushing the like button */
    alert("Ninja was liked");
}

function hide_btn(element) { /* removes the button when clicked */
    element.remove();
}