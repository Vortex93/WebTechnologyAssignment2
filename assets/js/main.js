/**
 * Created by Derwin on 17-Sep-16.
 */
//global var
var incorrect = input.style.color = '#f00';

function init(){

}

function validate() {
    var user = new User(document.getElementById("first-name").valueOf(),
        document.getElementById("Last-name").valueOf(),
        document.getElementById("email").valueOf(),
        document.getElementById("message").valueOf());
}

//user
User = new function (firstName, lastName, email, message) {
    if (checkEmail(email)) {
        this.email = email;
    } else {
        document.getElementById("first-name").innerHTML = incorrect;
    }
    if (checkFirstName(firstName)) {
        this.firstName = firstName;
    } else {
        document.getElementById("last-name").innerHTML = incorrect;
    }
    if (checkLastName(lastName)) {
        this.lastName = lastName;
    } else {
        document.getElementById("email").innerHTML = incorrect;
    }
    if (checkMessage()) {
        this.message = message;
    } else {
        document.getElementById("message").innerHTML = incorrect
    }
}
function checkFirstName(firstName) {
    if (firstName == null || firstName == "") {
        return false;
    } else {
        return true;
    }
}

function checkLastName(lastName) {
    if (lastName == null || lastName == "") {
        return false;
    } else {
        return true;
    }
}

function checkEmail(email) {
    var validEmail = /\S+@\S+\.\S+/;
    return validEmail.test(email)
}

function checkMessage(message) {
    if (message == null || message == "") {
        return false;
    } else {
        return true;
    }
}


