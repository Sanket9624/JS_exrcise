const readline = require('readline');

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  }

  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "sci ssors" && computerSelection === "paper")
  ) {
    return "You win!";
  }else {
    return "You lose!";
  }
}

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const playRoundCallback = (playerSelection) => {
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);

    console.log(`You chose: ${playerSelection}`);
    console.log(`Computer chose: ${computerSelection}`);
    console.log(`Result: ${result}`);

    if (result === "You win!") {
      playerScore++;
    } else if (result === "You lose!") {
      computerScore++;
    }

    console.log(`Player score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);
    console.log("---------------");

    if (playerScore < 5 && computerScore < 5) {
      rl.question("Enter your choice (rock, paper, or scissors): ", playRoundCallback);
    } else {
      rl.close();
      if (playerScore > computerScore) {
        console.log("Congratulations, you win the game!");
      } else if (playerScore < computerScore) {
        console.log("Sorry, you lose the game!");
      } else {
        console.log("It's a tie game!");
        }
    }
  };

  rl.question("Enter your choice (rock, paper, or scissors): ", playRoundCallback);
}

// Start the game
game();
