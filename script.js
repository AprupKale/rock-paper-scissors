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
    function updateScoreDisplay() {
        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = computerScore;
    }

    let playerScore = 0;
    let computerScore = 0;

    const playerScoreDisplay = document.createElement('p');
    document.querySelector('#player').appendChild(playerScoreDisplay);
    const computerScoreDisplay = document.createElement('p');
    document.querySelector('#computer').appendChild(computerScoreDisplay);
    updateScoreDisplay();

    const roundMessage = document.createElement('h2');
    document.querySelector('body').insertBefore(roundMessage, document.querySelector('.play-again-button'));

    const victoryDisplay = document.createElement('h1');
    document.querySelector('body').insertBefore(victoryDisplay, document.querySelector('.play-again-button'));

    document
        .querySelectorAll('.button-section > .button')
        .forEach(button => button.addEventListener('click', e => {
            if (playerScore === 5 || computerScore === 5) return;

            let message = playRound(e.target.id, getComputerChoice());
            roundMessage.textContent = message;

            if (message.startsWith('You Win!')) playerScore++;
            if (message.startsWith('You Lose!')) computerScore++;

            if (playerScore == 5) {
                roundMessage.textContent = '';
                victoryDisplay.textContent = 'Player Wins!';
            }

            if (computerScore == 5) {
                roundMessage.textContent = '';
                victoryDisplay.textContent = 'Computer Wins!';
            }

            updateScoreDisplay();
        }));

    document
        .querySelector('.play-again-button > .button')
        .addEventListener('click', e => {
            playerScore = 0;
            computerScore = 0;
            
            victoryDisplay.textContent = '';
            roundMessage.textContent = '';

            updateScoreDisplay();
        })
}

game();