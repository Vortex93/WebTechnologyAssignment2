/**
 * Created by Derwin on 17-Sep-16.
 */

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
    }
    if (checkFirstName(firstName)) {
        this.firstName = firstName;
    }
    if (checkLastName(lastName)) {
        this.lastName = lastName;
    }
    if (checkMessage()) {
        this.message = message;
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


