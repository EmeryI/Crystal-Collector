// tells the javascript to not load until the HTML has loaded first
$(document).ready(function() {
    console.log("javascript properly linked");

    var gameCrystals = [`assets/images/diamond.jpg`, "assets/images/emerald.jpg", "assets/images/ruby.jpg", "assets/images/sapphire.jpg"]
        // this number indicates what the computer is randomly choosing
        // the right side of the statement is used to make sure the lowest number is 19 and the highest number is 120 (101 + 19)
    var random = Math.floor(Math.random() * 101) + 19;
    console.log(random + " random value");

    // using jquery to select any HTML with and id of random-location and display the variable "random"
    $("#random-location").text(random);

    function newGame() {
        var random = Math.floor(Math.random() * 101) + 19;
        console.log(random + " random value");
        for (var i = 0; i < 4; i++) {
            var newNumber = Math.floor(Math.random() * 19) + 1;

            var imageCrystal = $("<img>");

            imageCrystal.addClass("crystal-image");
            console.log(gameCrystals[i])
            imageCrystal.attr("src", gameCrystals[i]);

            console.log(newNumber)
            imageCrystal.attr("data-crystalvalue", newNumber);

            $("#crystals").append(imageCrystal);

        }
        $(".crystal-image").click(function() {
            console.log("making diamond pic clickable")
            console.log($(this))
            var crystalValue = ($(this).attr("data-crystalvalue"));
            console.log(parseInt(crystalValue))





        })
    }


    newGame()
});