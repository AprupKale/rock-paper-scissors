function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    let computerChoice = Math.floor(Math.random() * choices.length);
    return choices[computerChoice];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return "Tie";
    } else {
        if (playerSelection === 'rock') {
            switch (computerSelection) {
                case 'paper':
                    return "You Lose! Paper beats Rock";

                case 'scissors':
                    return "You Win! Rock beat Scissors";
            }
        } else if (playerSelection === 'paper') {
            switch (computerSelection) {
                case 'rock':
                    return "You Win! Paper beats Rock";

                case 'scissors':
                    return "You Lose! Scissors beat Paper";
            }
        } else if (playerSelection === 'scissors') {
            switch (computerSelection) {
                case 'rock':
                    return "You Lose! Rock beats Scissors";

                case 'paper':
                    return "You Win! Scissors beat Paper";
            }
        }
    }
}

function game() {
    
}

game();