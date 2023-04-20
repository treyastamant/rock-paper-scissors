function getComputerChoice() {
    let choice = ["Rock", "Paper", "Scissors"];
    return choice[Math.floor(Math.random() * 3)];
}
let playerSelection;
let playerScore = 0;
let computerScore = 0;

//v1 playRound ------------------------------------
// function playRound(playerSelection, computerSelection) {
//     playerSelection = prompt("Rock, Paper, or Scissors?");
//     let choices = playerSelection.toLowerCase() + computerSelection.toLowerCase();
//     let message;

//     if ((choices === "rockscissors") || (choices === "scissorspaper") || (choices === "paperrock")) {
//         message = "You win!";
//         playerScore++;
//     } else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
//         message = "It's a tie.";
//     } else {
//         message =  "You lose!";
//         computerScore++;
//     }
//     return message;
// }

function playRound(playerSelection, comp) {
    playerSelection = prompt("Rock, Paper, or Scissors?");
    let p = playerSelection.toLowerCase();
    let c = comp.toLowerCase();
    let message;
    if (p === "rock" && c === "scissors") {
        message = "You: Rock | Comp: Scissors\n** You Win! **";
        playerScore++;
    } else if (p === "scissors" && c === "paper") {
        message = "You: Scissors | Comp: Paper\n** You Win! **";
        playerScore++;
    } else if (p === "paper" && c === "rock") {
        message = "You: Paper | Comp: Rock\n** You Win! **";
        playerScore++;
    } else if (p === "rock" && c === "paper") {
        message = "You: Rock | Comp: Paper\n** You Loose! **";
        computerScore++;
    } else if (p === "paper" && c === "scissors") {
        message = "You: Paper | Comp: Scissors\n** You Loose! **";
        computerScore++;
    } else if (p === "scissors" && c === "rock") {
        message = "You: Scissors | Comp: Rock\n** You Loose! **";
        computerScore++;
    }
        else {
        message = "It's a tie"
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
        endGameMessage = "*** You won the game! ***";
    } else if (playerScore < computerScore) {
        endGameMessage = "*** You lost the game! ***";
    } else {
        endGameMessage = "*** It was a tie game. ***";
    }
    console.log(endGameMessage);
}

console.log(game());

// TODO Make it so player can't input random things. Prompt reentry if not rock, paper, or scissors

