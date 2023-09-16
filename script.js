function printComputerChoice(computerChoice) {
  if (computerChoice === 0) {
    console.log("The Computer chose Rock!");
  } else if (computerChoice === 1) {
    console.log("The Computer chose Paper!");
  } else if (computerChoice === 2) {
    console.log("The computer chose Scissors!");
  }
}

function printPlayerSelection(playerSelection) {
  if (playerSelection.toLowerCase() === "rock") {
    console.log("You chose Rock!");
  } else if (playerSelection.toLowerCase() === "paper") {
    console.log("You chose Paper!");
  } else if (playerSelection.toLowerCase() === "scissors") {
    console.log("You chose Scissors!");
  } else {
    console.log("Please choose between Rock, Paper, or Scissors");
  }
}

let playerScore = 0;
let computerScore = 0;

function gameStart(computerChoice, playerSelection) {
  if (computerChoice === 0 && playerSelection === "rock") {
    console.log("Draw...");
  } else if (computerChoice === 0 && playerSelection === "paper") {
    console.log("You win! Paper beats Rock.");
    return (playerScore)++;
  } else if (computerChoice === 0 && playerSelection === "scissors") {
    console.log("You lose... Rock beats Scissors.");
    return (computerScore)++;
  } else if (computerChoice === 1 && playerSelection === "rock") {
    console.log("You lose... Paper beats Rock.");
    return (computerScore)++;
  } else if (computerChoice === 1 && playerSelection === "paper") {
    console.log("Draw...");
  } else if (computerChoice === 1 && playerSelection === "scissors") {
    console.log("You win! Scissors beats Paper.");
    return (playerScore)++;
  } else if (computerChoice === 2 && playerSelection === "rock") {
    console.log("You win! Rock beats Scissors.");
    return (playerScore)++;
  } else if (computerChoice === 2 && playerSelection === "paper") {
    console.log("You lose... Scissors beats Paper.");
    return (computerScore)++;
  } else if (computerChoice === 2 && playerSelection === "scissors") {
    console.log("Draw...")
  }
}

function winCondition(playerScore, computerScore) {
  if (playerScore === 5) {
    console.log("You won the match!");
  } else if (computerScore === 5) {
    console.log("You lost the match...");
  }
}

do {
  let computerChoice = Math.floor(Math.random() * 3);
  let playerSelection = prompt("Pick your poison:").toLowerCase();
  printComputerChoice(computerChoice);
  printPlayerSelection(playerSelection);
  gameStart(computerChoice, playerSelection);
  console.log(`You: ${playerScore} | PC: ${computerScore}`);
  winCondition(playerScore, computerScore);
}
  while (playerScore < 5 && computerScore < 5);

