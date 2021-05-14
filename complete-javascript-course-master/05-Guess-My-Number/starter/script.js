'use strict';
/*
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 17;
document.querySelector('.guess').value = 23;
*/

let target = Math.trunc(Math.random() * 20) + 1;
let numGuesses = 20;
let currHighscore = 0;
let gameOver = false;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (gameOver) {
    reset();
  } else if (numGuesses > 1) {
    if (!guess) {
      document.querySelector('.message').textContent = 'No Number Given :(';
    } else if (guess === target) {
      document.querySelector('.message').textContent = 'Correct Number!';
      document.querySelector('.number').textContent = target;
      if (numGuesses > currHighscore) {
        document.querySelector('.highscore').textContent = numGuesses;
        currHighscore = numGuesses;
      }
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      gameOver = true;
    } else if (guess > target) {
      document.querySelector('.message').textContent = 'Too High!';
      numGuesses--;
      document.querySelector('.score').textContent = numGuesses;
    } else {
      document.querySelector('.message').textContent = 'Too Low!';
      numGuesses--;
      document.querySelector('.score').textContent = numGuesses;
    }
  } else {
    numGuesses--;
    document.querySelector('.score').textContent = numGuesses;
    document.querySelector('.message').textContent = 'Game Over!';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  reset();
});

function reset() {
  target = Math.trunc(Math.random() * 20) + 1;
  numGuesses = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = '20';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
}
