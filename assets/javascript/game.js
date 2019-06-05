// Game will have 4 crystals with randomly assigned values for each round (random value between 1-12)
// The game will generate a random number that you have to match by clicking on the crystals
// When clicking any crystal, it should add to the previous result until you reach or go over the randomNumber
 //If you go over, it will losses will increase by 1, and if it is equal wins will increase by 1
 //The game will automatically restart after the player either wins or loses

var randomNumber;
var wins = 0;
var losses = 0;
var previous = 0;

var resetGame = function (){
    $(".crystals").empty();

    var images = [
                'https://vignette.wikia.nocookie.net/elderscrolls/images/1/1f/Skyrim_amethyst.png/revision/latest?cb=20120901163508',
                'https://vignette.wikia.nocookie.net/elderscrolls/images/8/84/Flawless_garnet.png/revision/latest?cb=20120908211858',
                'https://gamepedia.cursecdn.com/skyrim_gamepedia/a/af/FlawlessEmerald.png',
                'https://vignette.wikia.nocookie.net/elderscrolls/images/d/d5/Skyrim_diamond.png/revision/latest?cb=20120901164151'];

    randomNumber = Math.floor(Math.random() * 69 ) + 30;
    console.log(randomNumber);

    $("#goal").html('Your goal: ' + randomNumber);

    for (var i = 0; i < 4; i++) {
    var random = Math.floor(Math.random() *11) + 1;
    console.log(random);

    var crystal = $("<div>");
    crystal.attr({
        "class": 'crystal',
        "data-random": random
    });
        crystal.css({
            "background-image":"url('" + images [i] + "')",
            "background-size":"cover"
        })
    
    
    $(".crystals").append(crystal);
    
    }

$("#previous").html("Current Score: " + previous);
}

resetGame();


$(document).on('click', ".crystal", function () {

    var num = parseInt($(this).attr('data-random'));

    previous += num;

    $("#previous").html("Current Score: " + previous);

    console.log(previous);

    if(previous > randomNumber){
        losses ++;
        previous = 0;
        $("#losses").html("Losses: " + losses);
        alert("You lost! Try again");
        console.log("You lost!");
        resetGame();

    }
    else if (previous === randomNumber){
        wins ++;
        previous = 0;
        $("#wins").html("Wins: " + wins);
        alert("You win!")
        console.log("You win!");
        resetGame();
    }


});