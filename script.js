const options = ['rock', 'paper', 'scissors'];

const container = document.getElementById('container');
const div = document.querySelector('#button-container');
const buttons = document.querySelectorAll('button');

const para = document.createElement('p');
const nextRoundButton = document.createElement('button');
const newGameButton = document.createElement('button');

let playerScore = 0;
let computerScore = 0;

function gameStart(e) {
  let random = Math.floor(Math.random() * 3);
  let computerChoice = options[random];
  container.removeChild(div);
  if (e.target.id === computerChoice) {
    container.appendChild(para).textContent = `I'ts a draw`;
    container.appendChild(nextRoundButton).textContent = 'Next Round';
  } else if ((e.target.id === 'rock' && computerChoice === 'scissors') || 
  (e.target.id === 'paper' && computerChoice === 'rock') || 
  (e.target.id === 'scissors' && computerChoice === 'paper')) {
    playerScore++;
    container.appendChild(para).textContent = `You win, your score is ${playerScore}`;
    container.appendChild(nextRoundButton).textContent = 'Next Round';
    if (playerScore === 5) {
      container.removeChild(nextRoundButton);
      container.appendChild(para).textContent = `Match Over! You won!`;
      container.appendChild(newGameButton).textContent = "Play again";
    }
  } else if ((computerChoice === 'rock' && e.target.id === 'scissors') || 
  (computerChoice === 'paper' && e.target.id === 'rock') || 
  (computerChoice === 'scissors' && e.target.id === 'paper')) {
    computerScore++;
    container.appendChild(para).textContent = `You lose, opponent's score is ${computerScore}`;
    container.appendChild(nextRoundButton).textContent = 'Next Round';
    if (computerScore === 5) {
      container.removeChild(nextRoundButton);
      container.appendChild(para).textContent = `Match Over... You lose.`;
      container.appendChild(newGameButton).textContent = "Play again";
    }
  }
}

buttons.forEach(item => item.addEventListener('click', gameStart));

nextRoundButton.addEventListener('click', () => {
  container.removeChild(para);
  container.removeChild(nextRoundButton);
  container.appendChild(div);
})

newGameButton.addEventListener('click', () => {
  playerScore = 0;
  computerScore = 0;
  container.removeChild(para);
  container.removeChild(newGameButton);
  container.appendChild(div);
})
