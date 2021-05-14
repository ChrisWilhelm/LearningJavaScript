'use strict';
/*
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 17;
document.querySelector('.guess').value = 23;
*/

const target = Math.trunc(Math.random() * 20) + 1;
let numGuesses = 20;
document.querySelector('.number').textContent = target;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (numGuesses > 1) {
    if (!guess) {
      document.querySelector('.message').textContent = 'No Number Given :(';
    } else if (guess === target) {
      document.querySelector('.message').textContent = 'Correct Number!';
      document.querySelector('.highscore').textContent =
        document.querySelector('.score').textContent;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
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

document.querySelector('.again').addEventListener('click', function () {});
