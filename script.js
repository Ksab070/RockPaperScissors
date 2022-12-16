let playerDisplay = document.querySelector('#playerScore');
let compDisplay = document.querySelector('#compScore');
let playerScore = document.querySelector('#playerScore').textContent;
let compScore = document.querySelector('#compScore').textContent;
let roundInfo = document.querySelector('#rinfo');
let gameInfo = document.querySelector('#ginfo');
let resetBtn = document.querySelector('#reset');
let n = 0;

function getComputerChoice () {
   let choice = Math.floor(Math.random()*3)+1
   if (choice === 1) {
    return 'rock'
   } else if (choice === 2) {
    return 'paper'
   } else {
    return 'scissors'
   }
}

function playRound(playerSelection, computerSelection) {
    n++;
    if (playerSelection === computerSelection){
        if (n>4) {
            roundInfo.textContent = 'Game Over!';
            gameOver(playerScore,compScore);
        } else {
            roundInfo.textContent = 'Tie';
        }
    } 
    else if (playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'rock') 
    {   if (n>4) {
            roundInfo.textContent = 'Game Over!';
            gameOver(playerScore,compScore);
        } else {
            compScore++;
            compDisplay.textContent = compScore;
            roundInfo.textContent = 'Computer Score +1'
        }
    } else {
        if (n>4) {
            roundInfo.textContent = 'Game Over!';
            gameOver(playerScore,compScore);
        } else {
            playerScore++;
            playerDisplay.textContent = playerScore;
            roundInfo.textContent = 'Player Score +1'
        }
    }
  }

let buttons = document.querySelectorAll('.btns');
for (let i =0; i<buttons.length;i++) {
    buttons[i].addEventListener('click', () => {
        let id = buttons[i].id;
        playRound(id,getComputerChoice())
    })
}

resetBtn.addEventListener('click', ()=> {
    n = 0;
    compDisplay.textContent = 0;
    playerDisplay.textContent = 0;
    playerScore = 0;
    compScore = 0;
    roundInfo.textContent = 'Round Info';
    gameInfo.textContent = 'Rock,Paper or Scissors?'
})

function gameOver(playerScore,compScore) {
    if (playerScore == compScore) {
        gameInfo.textContent = `TIE! Your score is ${playerScore}`
    } else if (compScore>playerScore) {
        gameInfo.textContent = `You Lose! Your score is ${playerScore}`
    } else {
        gameInfo.textContent = `You win! Your score is ${playerScore}`
    }
}