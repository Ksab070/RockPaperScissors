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

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
        score--;
    } else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
        score--;
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        score--;
    } else if (playerSelection == computerSelection){
        score = score;
    } else {
        score++;
    }

  }

let score = 0;
const computerSelection = getComputerChoice(); 

function game() {
    for (let i = 0; i<5;i++) {
        let playerSelection = prompt("Rock/Paper/Scissors?");
        playRound(playerSelection,computerSelection);
    }
    if (score >= 2) {
        console.log(`You Win!, your score is: ${score}`)
    } else if (score < 2) {
        console.log(`You Lose!, your score is: ${score}`)
    }
}
game();