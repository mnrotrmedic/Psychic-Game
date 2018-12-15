// Set key options
var letters = ["a", "b", "c", "d", "e", "f", "g", "h",
    "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
    "t", "u", "v", "w", "x", "y", "z"
];

// Stuff for the player

var letter = "h";
var winNum = 0;
var lossNum = 0;
var guessesLeft = 6;
var lettersGuessed = [];

//Start the thing over
startOver();
display ();


// Browser picks a letter for user to guess
var goldenLetter = letters[Math.floor(Math.random() * letters.length)];


// Check to see if the user guesses the correct letter (6 tries)
document.onkeyup = function (event) {
    var userChoice = event.key;
    console.log("Winning letter is: " + goldenLetter); //Maybe comment this out later...?...
    if (userChoice === goldenLetter) {
        right(); 
        console.log("Correct Guess")
    }
    else if (tries === 0) {
        losses();
    }
    else {
        tryAgain();
        console.log("Incorrect Guess");
    }
    display ();
}

function display() {
    document.getElementById("letter").innerHTML=letter;
    // document.getElementById("wins").innerHTML = winNum;
    // document.getElementById("losses").innerHTML = lossNum;
    // document.getElementById("guessesLeft").innerHTML = guessesLeft;
    // document.getElementById("lettersGuessed").innerHTML = lettersGuessed.join(",");

}

function right() {
    wins++;
    startOver();
}

function loses() {
    // loser++;
    startOver();
}

function tryAgain() {
    tries--;

}

function startOver() {
    guessesLeft = 6;
    guessed = [];
    var goldenLetter = letters[Math.floor(Math.random() * letters.length)];
}




















