//how to ensure user cannot use an invalid key?d
//logs the user's key stroke to the console
var guessCount = 9;
var winCounter = 0;
var lossCounter = 0;
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i','j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u',  'v', 'w', 'x', 'y', 'z'];



	//userGuess cannot be used because it is defined in the onkeyup
function isValidKey (char, validKeysArr) {
	for (i = 0; i < validKeysArr.length; i++) {
		if ( char === validKeysArr[i] ) {
			return true;
		}
	}
}

document.onkeyup = function(event){
    var userGuess = event.key;
    var isKey = isValidKey(userGuess, alphabet);
    if (!isKey){
    	alert("Not a valid key. Please choose a lowercase letter.");
    }
    if (userGuess === letterChoice){
    	alert("You win!");
    	//adds to number of wins, displays number of wins
    	winCounter ++;
    	document.getElementById("win-total").innerHTML=winCounter;
    	computerChoice();
    	reset();
    	//reset(); erases letters guessed
    	} 
    	
	else if (isKey && userGuess !== letterChoice){
		alert("Try another letter");
		guessCount--;
		document.getElementById("guesses-remaining").innerHTML= guessCount;
		document.getElementById("letters-guessed").innerHTML+=userGuess + ", ";
    	}

	if (guessCount === 0){
		alert("You lost!");
		lossCounter ++;
		document.getElementById("loss-total").innerHTML= lossCounter;
		reset();
		computerChoice();

	
	}
}
//alphabet array to be used for "letterChoice" variable
 
var letterChoice; 
//function to choose a random letter from the array
 function computerChoice () {letterChoice = alphabet[Math.floor(Math.random() *alphabet.length)];
 	console.log(letterChoice);}


function reset(){
	guessCount=9;
	document.getElementById("guesses-remaining").innerHTML=9;
	document.getElementById("letters-guessed").innerHTML=" ";
	}

	reset();
 	computerChoice();

//resetting number of guesses to 9?
//var guessedLetters = [];
//guessedLetters.push(userGuess);
