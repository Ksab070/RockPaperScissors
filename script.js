let score = 0;

function getComputerChoice () {
   let choice = Math.floor(Math.random()*3)+1
   if (choice === 1) {
    return 'ROCK'
   } else if (choice === 2) {
    return 'PAPER'
   } else {
    return 'SCISSORS'
   }
}

const computerSelection = getComputerChoice(); 

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
        score--;
        console.log('button clicked')
    } else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
        score--;
        console.log('button clicked')
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        score--;
        console.log('button clicked')
    } else if (playerSelection == computerSelection){
        score = score;
        console.log('button clicked')
    } else {
        score++;
        console.log('button clicked')
    }

  }

let buttons = document.querySelectorAll('button');

for (button of buttons) {
    button.addEventListener('click', () => {
        playRound(button.id,computerSelection)
    })
}

