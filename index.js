const buttons = document.querySelectorAll("button");
const playerScoreDisplay = document.querySelector(".player-score");
const computerScoreDisplay = document.querySelector(".computer-score");
const playerChoiceDisplay = document.querySelector(".player-choice");
const computerChoiceDisplay = document.querySelector(".computer-choice");
const roundResultDisplay = document.querySelector(".round-result-display");
const winnerDisplay = document.querySelector(".winner-display");

const options = ["rock", "paper", "scissors"]
let computerPlay = () => {
    return options[Math.floor(Math.random() * options.length)];
}
let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playerSelection = button.id;
        if (playerScore < 5 && computerScore < 5) {
            playRound(playerSelection);
            determineWinner();
        }
    });
})

const playRound = (playerSelection) => {
    let computerSelection = computerPlay();

    playerChoiceDisplay.innerText = playerSelection;
    computerChoiceDisplay.innerText = computerSelection;

    if (playerSelection == computerSelection) {
        roundResultDisplay.innerText = "This round is a draw!";
    } else if (playerSelection == "rock" && computerSelection == "scissors"
        || playerSelection == "paper" && computerSelection == "rock"
        || playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++;
        playerScoreDisplay.innerText++;
        roundResultDisplay.innerText = `You win! ${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}`
    }
    else {
        computerScore++;
        computerScoreDisplay.innerText++;
        roundResultDisplay.innerText = `You lose! ${capitalizeFirstLetter(computerSelection)} beats ${capitalizeFirstLetter(playerSelection)}`
    }
}

const determineWinner = () => {
    if (playerScore == 5 || computerScore == 5) {
        if (playerScore > computerScore) {
            winnerDisplay.innerText = `You won this game with the score ${playerScore} to ${computerScore}. Congratulations!`;
        }
        else if (playerScore < computerScore) {
            winnerDisplay.innerText = `You lost this game with the score ${playerScore} to ${computerScore}. Don't get upset, try again!`;
        }
        else {
            winnerDisplay.innerText = "This game is a draw. Try again!";
        }
    }
}

const capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1);
