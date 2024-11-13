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
    console.log(humanChoice, computerChoice)
    if (humanChoice === computerChoice) {
        console.log('Draw')
    }
    else if ((humanChoice === "paper" && computerChoice === "rock") 
        || (humanChoice === "rock" && computerChoice === "scissors") 
        || (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore += 1;
        console.log("You win!")
    }
    else if ((computerChoice === "paper" && humanChoice === "rock") 
        || (computerChoice === "rock" && humanChoice === "scissors")
        || (computerChoice === "scissors" && humanChoice === "paper")) {
        computerScore += 1;
        console.log("Computer wins!")

    }
    else {
        console.log("invalid input")
    }
}


let humanScore = 0
let computerScore = 0

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(),getComputerChoice());
        console.log(`Your score is: ${humanScore}, Computers score: ${computerScore}`)
    }
    humanScore = 0
    computerScore = 0  
}

playGame();

