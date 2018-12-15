// Set key options
var letters = ["a", "b", "c", "d", "e", "f", "g", "h",
    "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
    "t", "u", "v", "w", "x", "y", "z"
];

// Stuff for the player

var letter = "";
var winNum = 0;
var lossNum = 0;
var guessesLeft = 6;
var lettersGuessed = [];
var goldenLetter = [];

//Start the thing over
window.onload = startOver();
window.onload = display();


// Browser picks a letter for user to guess
var goldenLetter = letters[Math.floor(Math.random() * letters.length)];
console.log("Winning letter is: " + goldenLetter); //Maybe comment this out later...?...

// Check to see if the user guesses the correct letter (6 tries)
document.onkeyup = function (event) {
    var userChoice = event.key;
    console.log(userChoice);
    lettersGuessed.push(userChoice);

    if (userChoice === goldenLetter) {
        right();
        console.log("Correct Guess")
    }
    else if (guessesLeft === 0) {
        losses();
    }
    else {
        tryAgain();
        console.log("Incorrect Guess: " + userChoice);
    }
    display();
}

function display() {
    document.getElementById("wins").innerHTML = winNum;
    document.getElementById("losses").innerHTML = lossNum;
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
}

function right() {
    winNum++;
    startOver();
}

function losses() {
    lossNum++;
    startOver();
}

function tryAgain() {
    guessesLeft--;

}



function startOver() {
    guessesLeft = 6;
    lettersGuessed = [];
    goldenLetter = letters[Math.floor(Math.random() * letters.length)];
    console.log("New winning letter: " + goldenLetter);
}




















