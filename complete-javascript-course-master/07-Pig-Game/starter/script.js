'use strict';
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const dice = document.querySelector('.dice');
const roll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');
const currScore0 = document.querySelector('#current--0');
const currScore1 = document.querySelector('#current--1');

let player0 = {
  score: score0,
  currScore: currScore0,
};

let player1 = {
  score: score1,
  currScore: currScore1,
};
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');
let curr = 0;
let rolled = false;
const rollDice = function () {
  const val = Math.trunc(Math.random() * 6) + 1;
  dice.classList.remove('hidden');
  dice.src = `dice-${val}.png`;
  return val;
};

const swapPlayers = function () {
  const play0 = document.querySelector('.player--0');
  const play1 = document.querySelector('.player--1');
  rolled = false;
  if (curr === 0) {
    curr = 1;
    play0.classList.remove('player--active');
    play1.classList.add('player--active');
  } else {
    curr = 0;
    play1.classList.remove('player--active');
    play0.classList.add('player--active');
  }
};

const addToCurrent = function (val) {
  if (curr === 0) {
    player0.currScore.textContent =
      Number(player0.currScore.textContent) + Number(val);
  } else {
    player1.currScore.textContent =
      Number(player1.currScore.textContent) + Number(val);
  }
};

const checkWinner = function (player) {
  if (Number(player.score.textContent) >= 100) {
    const play = document.querySelector(`.player--${curr}`);
    play.classList.add('player--winner');
    return true;
  }
  return false;
};

const addToTotal = function () {
  if (curr === 0) {
    player0.score.textContent =
      Number(player0.currScore.textContent) + Number(player0.score.textContent);
    if (!checkWinner(player0)) {
      swapPlayers();
    }
  } else {
    player1.score.textContent =
      Number(player1.currScore.textContent) + Number(player1.score.textContent);
    if (!checkWinner(player1)) {
      swapPlayers();
    }
  }
  removeCurrent();
};

const removeCurrent = function () {
  if (curr === 0) {
    player0.currScore.textContent = 0;
  } else {
    player1.currScore.textContent = 0;
  }
};

roll.addEventListener('click', function () {
  const val = Number(rollDice());
  rolled = true;
  if (val === 1) {
    removeCurrent();
    swapPlayers();
  } else {
    addToCurrent(val);
  }
});

hold.addEventListener('click', function () {
  if (rolled) {
    addToTotal();
  }
});

const zeroGame = function (player) {
  player.score.textContent = 0;
  player.currScore.textContent = 0;
};

newGame.addEventListener('click', function () {
  zeroGame(player0);
  zeroGame(player1);
  if (curr === 1) {
    swapPlayers();
  }
  dice.classList.add('hidden');
});
