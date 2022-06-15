
function computerPlay() {
    const choice = ["paper", "rock", "scissors"];
    return choice[Math.floor(Math.random() * choice.length)];
}

function singleRound(playerSelection, computerSelection) {

    let computerChoice = computerPlay();

    let playerChoice = prompt("Choose your weapon!", "Rock, Paper or Scissors?").toLowerCase();

    if ((playerChoice == "rock" && computerChoice == "scissors") ||
        (playerChoice == "scissors" && ccomputerChoice == "paper") ||
        (playerChoice == "paper" && computerChoice == "rock")) {
            return ("Player Won! " + playerChoice + " is stronger than " + computerChoice);
        } else if (playerChoice === computerChoice) {
            return ("It's a tie! " + "Player Selection:" + playerChoice.toUpperCase() + " Computer Selection:" + computerChoice.toUpperCase());
        } else {
            return ("Computer Won! " + computerChoice + " is stronger than " + playerChoice);
        }
}

function game() {
    
}