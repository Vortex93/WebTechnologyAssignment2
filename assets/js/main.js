/**
 * Created by Derwin on 17-Sep-16.
 */
var predefinedBackgrounds = [
    "../img/background0.jpg",
    "../img/background1.jpg",
    "../img/background2.jpg"
];

function init(){
    backgroundChanger();
}

function validate(){
    //Get values from the form
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    //Do validation check
    var error = 0;
    
    if(firstName.length == 0 || lastName.length == 0 || message.length == 0) {
        //Empty
        error++;
    }

    if(email.length == 0){
        //Empty
        
    } else {
        //Using this pattern to validate if the input is correctly typed email
        var pattern = /[a-z0-9]+[_a-z0-9\.-]*[a-z0-9]+@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})/;
        var regex = new RegExp(pattern);
        
        if(!regex.test(email)){
            error++;
        }
    }
    
    if(error){
        alert("Form is not valid.");
    }
}

function backgroundChanger(){
    //index 0 is loaded upon opening of the website
    var index = 1;
    
    setInterval(function(){
        
    }, 5000);
}