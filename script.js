// getComputerChoice to randomly return 'Rock' 'Paper' or 'Scissors'

function getComputerChoice() {
    let choice = ["Rock", "Paper", "Scissors"];
    return choice[Math.floor(Math.random() * 3)];
}

const playerSelection = "SCIssors";

// function round(playerSelection, computerSelection) return string declaring winner
    // make case insensitive

function playRound(playerSelection, computerSelection) {
    let choices = playerSelection.toLowerCase() + computerSelection.toLowerCase();
    let message;

    if ((choices === "rockscissors") || (choices === "scissorspaper") || (choices === "paperrock")) {
        message = "You win!";
    } else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        message = "It's a tie!";
    } else {
        message =  "You lose!";
    }
    return message;
}

// function game() {
//     let round1 = playRound(playerSelection, computerSelection);
//     let round2 = playRound(playerSelection, computerSelection);
//     console.log(round1);
//     console.log(round2);
// }

function game() {
    for (let round = 1; round < 6; round++) {
        let roundResults = playRound(playerSelection, getComputerChoice());
        console.log("Round " + round + ": " + roundResults);
    }
}

console.log(game());




// console.log(playRound(playerSelection, computerSelection));


// function game() loop 5 rounds, keeping track of score

// prompt() to get input from user