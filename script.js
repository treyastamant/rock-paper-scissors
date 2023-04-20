function getComputerChoice() {
    let choice = ["Rock", "Paper", "Scissors"];
    return choice[Math.floor(Math.random() * 3)];
}
let playerSelection;
let playerScore = 0;
let computerScore = 0;


function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Rock, Paper, or Scissors?");
    let choices = playerSelection.toLowerCase() + computerSelection.toLowerCase();
    let message;

    if ((choices === "rockscissors") || (choices === "scissorspaper") || (choices === "paperrock")) {
        message = "You win!";
        playerScore++;
    } else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        message = "It's a tie.";
    } else {
        message =  "You lose!";
        computerScore++;
    }
    return message;
}

function game() {
    for (let round = 1; round < 6; round++) {
        let roundResults = playRound(playerSelection, getComputerChoice());
        console.log("Round " + round + ": " + roundResults);
    }
    let endGameMessage
    if (playerScore > computerScore) {
        endGameMessage = "** You won the game! **";
    } else if (playerScore < computerScore) {
        endGameMessage = "** You lost the game! **";
    } else {
        endGameMessage = "** It was a tie game. **";
    }
    console.log(endGameMessage);
}

console.log(game());

// TODO make variables for player and computer with 0 in playRound function 
// add ++ to winner of each game in game function

