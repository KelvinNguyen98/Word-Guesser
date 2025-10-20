// Global array that holds letters to guess
var GuessArray = ["F", "O", "X"];
// Global array that holds what letters player guessed
var PlayerGuessed =["_", "_", "_"];
// Global variable reward amount for player
var reward = 0;

// Function that will iterate through GuessArray to see if player has guessed the letter
// Along with displaying player's reward at the end of the game
function guessLetter(guess) {
    var CorrectlyGuessed = false;
    var NotOver = false;
    var LetterFound = 0;

    for (var i = 0; i < GuessArray.length; i++) {
        if (GuessArray[i] == guess) {
            PlayerGuessed[i] = guess;
            CorrectlyGuessed = true;
            LetterFound++;
        }

        if (PlayerGuessed[i] == "_") {
            NotOver = true;
        }
    }

    // Generates random number from 1 to 100
    var WheelSpin = Math.floor(Math.random() * 100) + 1;
    
    // Display player's reward at the end of the game
    // Adds or subtracts amount earned throughout the game until final reward
    if (CorrectlyGuessed) {
        var amount = WheelSpin * LetterFound;
        reward += amount;
        console.log(PlayerGuessed.join(""));
        console.log(`Congratulations, you found a new letter! You earned $${amount}!\n`);

        if (!NotOver) {
            console.log(`Congratulations, you won the game! Your final reward is $${reward}!\n`);
        }
    }
    else {
        reward -= WheelSpin;
        console.log(`You did not guess the correct letter! You lost $${WheelSpin}!\n`);
    }
}

// Test cases
guessLetter("F");
guessLetter("A");
guessLetter("O");
guessLetter("B");
guessLetter("X");