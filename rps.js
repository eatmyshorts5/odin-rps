let humanScore = 0;
let computerScore = 0;
const validOptions = ["Rock", "Paper", "Scissors"];

function getHumanChoice() {
  let humanChoice;

  for (;;) {
    humanChoice = prompt("Type RPS hand");
    humanChoice =
      humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
    if (validOptions.includes(humanChoice)) {
      return humanChoice;
    }
    console.log("Invalid input, please try again");
  }
}

function playRound(computerHand, humanHand) {
  if (humanHand === computerHand) {
    console.log("TIE!");
  } else if (
    (humanHand === "Rock" && computerHand === "Scissors") ||
    (humanHand === "Paper" && computerHand === "Rock") ||
    (humanHand === "Scissors" && computerHand === "Paper")
  ) {
    console.log(`You win! ${humanHand} beats ${computerHand}!`);
    humanScore++;
  } else if (
    (computerHand === "Rock" && humanHand === "Scissors") ||
    (computerHand === "Paper" && humanHand === "Rock") ||
    (computerHand === "Scissors" && humanHand === "Paper")
  ) {
    console.log(`You lose! ${computerHand} beats ${humanHand}!`);
    computerScore++;
  }
}

function getComputerChoice() {
  let tempCode = Math.ceil(Math.random() * 3);
  return validOptions[tempCode - 1];
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    let humanHand = getHumanChoice();
    let computerHand = getComputerChoice();
    playRound(humanHand, computerHand);
  }
  console.log(
    `Game Over. Final Score. You: ${humanScore} Computer: ${computerScore}`,
  );
}

playGame();
