function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random() * 3)];
}
let playerScore = 0;
let computerScore = 0;

function playRound(p, c) {
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
        message = "You: Rock | Comp: Paper\n** You Lose! **";
        computerScore++;
    } else if (p === "paper" && c === "scissors") {
        message = "You: Paper | Comp: Scissors\n** You Lose! **";
        computerScore++;
    } else if (p === "scissors" && c === "rock") {
        message = "You: Scissors\nComp: Rock\n** You Lose! **";
        computerScore++;
    } else if (p === "rock" && c === "rock") {
        message = "You both chose Rock\n** It's a tie! **";
    } else if (p === "scissors" && c === "scissors") {
        message = "You both chose Scissors\n** It's a tie! **";
    } else if (p === "paper" && c === "paper") {
        message = "You both chose Paper\n** It's a tie! **";
    }
    return message;
}
const round = document.querySelector('#round-output');
const pScore = document.querySelector('#player-score');
const cScore = document.querySelector('#computer-score');

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    round.textContent = playRound("rock", getComputerChoice());
    pScore.textContent = "Your Score: " + playerScore;
    cScore.textContent = "Comp Score: " + computerScore;
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    round.textContent = playRound("paper", getComputerChoice());
    pScore.textContent = "Your Score: " + playerScore;
    cScore.textContent = "Comp Score: " + computerScore;
    
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    round.textContent = playRound("scissors", getComputerChoice());
    pScore.textContent = "Your Score: " + playerScore;
    cScore.textContent = "Comp Score: " + computerScore;
});


