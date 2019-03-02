// tells the javascript to not load until the HTML has loaded first
$(document).ready(function() {
    console.log("javascript properly linked");

    // this number indicates what the computer is randomly choosing
    // the right side of the statement is used to make sure the lowest number is 19 and the highest number is 120 (101 + 19)
    var random = Math.floor(Math.random() * 101) + 19;
    console.log(random + " random value");

    // using jquery to select any HTML with and id of random-location and display the variable "random"
    $("#random-location").text(random);

});