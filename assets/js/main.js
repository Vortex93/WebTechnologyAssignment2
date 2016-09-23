/**
 * Created by Derwin on 17-Sep-16.
 */

//Predefined
var predefinedBackgroundImages = [
    "assets/img/background0.jpg",
    "assets/img/background1.jpg",
    "assets/img/background2.jpg"
];



function init(){
    var pageName = getPageName();
    
    switch(pageName){
        case "/index.html":
            backgroundChanger();
            break;
    }
}

function backgroundChanger(){
    //This counter helps go through the images.
    //Counter starts at 1 because the image 0 is loaded at start.
    var counter = 1; 
    
    setInterval(function(){
        document.body.style.background = 'url("' + predefinedBackgroundImages[counter] +'") no-repeat center center fixed';
        document.body.style.backgroundSize = 'cover';
        
        //Increase counter while not exceeding the amount of predefined images.
        counter = (counter + 1) % predefinedBackgroundImages.length;
    },5000);
}

function getPageName(){
    return window.location.pathname;
}
