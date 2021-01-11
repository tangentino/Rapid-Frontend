var valid = false;

function validateEmail() {
    var email = document.getElementById("email-box");
    var error;
    if (email.checkValidity()) {
        error = "";
        email.style.borderColor = "#aaa";
        email.style.boxShadow = "0 0 0 2pt #c8e1ff";
        valid = true;
    }
    else {
        error = "A valid email is required";
        email.style.borderColor = "red";
        email.style.boxShadow = "0 0 0 2pt #f7d0d5"
        valid = false;
    }
    document.getElementById("error-message").innerHTML = error;
}

function submit() {
    var email = document.getElementById("email-box");
    var mainPage = document.getElementById("main-div");
    var successPage = document.getElementById("success");
    if (email.checkValidity()) {
        mainPage.style.display = "none";
        successPage.style.display = "block";
    }
}