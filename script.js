function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber < 0.3) {
        return 'scissors';
    }

    else if (randomNumber < 0.6)  {
        return 'rock';
    }

    else {
        return 'paper';
    }
}

function getHumanChoice() {
    return prompt("Rock, Paper or Scissors?");
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        return "it's a draw"
    }
    if (humanChoice == "paper" && computerChoice == "rock") 
        or (humanChoice == "rock" && computerChoice == "scissors") 
        or (humanChoice == 'scissors' && computerChoice == "paper")
        humanScore += 1;
        return "You win!"
}
    if (computerChoice == "paper" && humanChoice == "rock") 
        or (computerChoice == "rock" && humanChoice == "scissors")
        or (computerChoice == "scissors" && humanChoice == "paper") {
        computerScore += 1;
        return "Computer wins!"

    }

let humanScore = 0
let computerScore = 0
