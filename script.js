// Selecting a number to be guessed
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Select the paragraphs for displaying results.
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

// Selecting the inputs - number and submit
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");
guessField.textContent = "";
// Initializing guessCount to 1
let guessCount = 1;
let resetButton;

guessField.focus();


function checkGuess() {
    const userGuess = Number(guessField.value);
    if (guessCount === 1) {
      guesses.textContent = "Previous guesses: ";
    }
    guesses.textContent += `${userGuess} `;
  
    if (userGuess === randomNumber) {
      lastResult.textContent = "Congratulations! You got it right!";
      lastResult.style.backgroundColor = "rgba(119,221,119)";
      lastResult.style.border = "3px solid green";
      lastResult.style.borderRadius = "0.25rem";
      lastResult.style.fontWeight = "600";
      lastResult.style.color = "green";
      lastResult.style.textAlign = "center";
      
      lowOrHi.textContent = "";
      setGameOver();
    } else if (guessCount === 10) {
      lastResult.textContent = "!!!GAME OVER!!!";
      lowOrHi.textContent = "";
      setGameOver();
    } else {
      lastResult.textContent = "Wrong!";
      lastResult.style.backgroundColor = "rgba(250, 160, 160)";
      lastResult.style.border = "3px solid red";
      lastResult.style.borderRadius = "0.25rem";
      lastResult.style.color = "red";
      lastResult.style.fontWeight = "600";
      lastResult.style.textAlign = "center";
      if (userGuess < randomNumber) {
        lowOrHi.textContent = "Last guess was too low!";
      } else if (userGuess > randomNumber) {
        lowOrHi.textContent = "Last guess was too high!";
      }
    }
  
    guessCount++;
    guessField.value = "";
    guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.style.border = "3px solid black";
    resetButton.style.borderRadius = "4px";
    resetButton.style.padding = "0.5rem 1rem";
    resetButton.style.fontWeight = "600";
    resetButton.style.fontSize = "0.9rem";
    resetButton.style.backgroundColor = "#f3aa60"
    resetButton.style.position = "absolute";
    resetButton.style.bottom = "1rem";
    resetButton.style.left = "50%";
    resetButton.style.transform = "translateX(-50%)";
    resetButton.style.cursor = "pointer";
    
    resetButton.textContent = "Start New Game";
    
    document.body.append(resetButton);
    
    resetButton.addEventListener("click", resetGame);
}

function resetGame() {
    location.reload();
    guessField.textContent = ""; 
  }
