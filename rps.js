let humanScore = 0;
let computerScore = 0;
const humanChoice = document.querySelector("#rps-choice");
const resultText = document.querySelector("#result");
const humanScoreText = document.querySelector("#human-score");
const computerScoreText = document.querySelector("#computer-score");
const validOptions = ["Rock", "Paper", "Scissors"];

function playGame(event) {
  let humanHand = event.target.dataset.choice;
  let computerHand = getComputerChoice();
  playRound(computerHand, humanHand);
}

function playRound(computerHand, humanHand) {
  if (humanHand === computerHand) {
    console.log("TIE!");
    resultText.textContent = "TIE!";
  } else if (
    (humanHand === "Rock" && computerHand === "Scissors") ||
    (humanHand === "Paper" && computerHand === "Rock") ||
    (humanHand === "Scissors" && computerHand === "Paper")
  ) {
    console.log(`You win! ${humanHand} beats ${computerHand}!`);
    resultText.textContent = `You win! ${humanHand} beats ${computerHand}!`;
    humanScore++;
    humanScoreText.textContent = `Human Score: ${humanScore}`;
  } else if (
    (computerHand === "Rock" && humanHand === "Scissors") ||
    (computerHand === "Paper" && humanHand === "Rock") ||
    (computerHand === "Scissors" && humanHand === "Paper")
  ) {
    console.log(`You lose! ${computerHand} beats ${humanHand}!`);
    resultText.textContent = `You lose! ${computerHand} beats ${humanHand}!`;
    computerScore++;
    computerScoreText.textContent = `Computer Score: ${computerScore}`;
  }

  if (humanScore === 5 || computerScore === 5) {
    resultText.textContent = `Game Over. Final Score. You: ${humanScore} Computer: ${computerScore}`;
    humanScore = 0;
    computerScore = 0;
    computerScoreText.textContent = "Computer Score: 0";
    humanScoreText.textContent = "Human Score: 0";
  }
}

function getComputerChoice() {
  let tempCode = Math.ceil(Math.random() * 3);
  return validOptions[tempCode - 1];
}

humanChoice.addEventListener("click", playGame);
