var divs = document.getElementsByClassName("cont2");
var display = 0;

function hideShow() {
    for (var i = 0; i < divs.length; i++) {
        if (display === 1) {
            divs[i].style.display = "block";
        } else {
            divs[i].style.display = "none";
        }
    }
    display = 1 - display; // Toggle between 0 and 1
}

// Add an event listener to your button
var hideButton = document.getElementById("hide");
hideButton.addEventListener("click", hideShow);

var div1 = document.getElementsByClassName("cont1"); // Fix typo here
var display1 = 0;

function hideShow1() {
    for (var i = 0; i < div1.length; i++) { // Fix typo here
        if (display1 === 1) {
            div1[i].style.display = "block";
        } else {
            div1[i].style.display = "none";
        }
    }
    display1 = 1 - display1;
}

var hideButton1 = document.getElementById("hide1");
hideButton1.addEventListener("click", hideShow1); // Fix typo here


let query = document.querySelector('#search');
let searchbtn =document.querySelector('.searchbtn');

searchbtn.onclick =function(){
    let url='https://www.google.com/search?q='+query.value;
    window.open(url)
}