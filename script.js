const options = ['rock', 'paper', 'scissors'];

const container = document.getElementById('container')
const div = document.querySelector('#button-container')
const buttons = document.querySelectorAll('button');

const para = document.createElement('p');
const nextRoundButton = document.createElement('button')

let playerScore = 0;
let computerScore = 0;

function gameStart(e) {
  let random = Math.floor(Math.random() * 3);
  let computerChoice = options[random];
  container.removeChild(div);
  if (e.target.id === computerChoice) {
    container.appendChild(para).textContent = `its a draw`;
    container.appendChild(nextRoundButton).textContent = 'play again';
  } else if ((e.target.id === 'rock' && computerChoice === 'scissors') || 
  (e.target.id === 'paper' && computerChoice === 'rock') || 
  (e.target.id === 'scissors' && computerChoice === 'paper')) {
    playerScore++;
    container.appendChild(para).textContent = `you win, your score is ${playerScore}`;
    container.appendChild(nextRoundButton).textContent = 'play again';
    if (playerScore === 5) {
      container.appendChild(para).textContent = `match over, your score: ${playerScore} | computer score: ${computerScore}`;
      container.appendChild(nextRoundButton);
    }
  } else if ((computerChoice === 'rock' && e.target.id === 'scissors') || 
  (computerChoice === 'paper' && e.target.id === 'rock') || 
  (computerChoice === 'scissors' && e.target.id === 'paper')) {
    computerScore++;
    container.appendChild(para).textContent = `you lose, computer score is ${computerScore}`;
    container.appendChild(nextRoundButton).textContent = 'play again';
    if (computerScore === 5) {
      container.appendChild(para).textContent = `match over, your score: ${playerScore} | computer score: ${computerScore}`;
      container.appendChild(nextRoundButton);
    }
  }
}

buttons.forEach(item => item.addEventListener('click', gameStart));

nextRoundButton.addEventListener('click', () => {
  container.removeChild(para);
  container.removeChild(nextRoundButton);
  container.appendChild(div);
})
