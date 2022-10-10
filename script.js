'use strict';
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNewGame = document.querySelector('.btn--new');
const currentP0 = document.querySelector('#current--0'); // id selector syntax
const currentP1 = document.querySelector('#current--1');
const scoreP0 = document.querySelector('#score--0'); // id selector syntax
const scoreP1 = document.querySelector('#score--1');

const dice = document.querySelector('.dice');

const player0 = document.querySelector('#name--0');
const player1 = document.querySelector('#name--1');

//CURRENT SCORES
let scoreFirst = 0;
let scoreSecond = 0;

//TOTAL "HELD" SCORES
let totalScoreFirst = 0;
let totalScoreSecond = 0;

//CURRENT PLAYER (0/1)
let currentPlayerID = 0;
player0.textContent = '🏓 PLAYER 1';

dice.src = 'dice-0.png';

//PLAYER-SWITCH FUNCTION
const currentPlayerCheck = function (scr, playerID) {
  if (scr === 1) {
    if (playerID === 0) playerID = 1;
    else playerID = 0;
  }
  return playerID;
};

//ROLL DICE
btnRoll.addEventListener('click', function () {
  let score = Math.trunc(Math.random() * 6) + 1;
  switch (score) {
    case 1:
      dice.src = 'dice-1.png';
      break;
    case 2:
      dice.src = 'dice-2.png';
      break;
    case 3:
      dice.src = 'dice-3.png';
      break;
    case 4:
      dice.src = 'dice-4.png';
      break;
    case 5:
      dice.src = 'dice-5.png';
      break;
    case 6:
      dice.src = 'dice-6.png';
      break;
  }
  console.log('score:', score);
  currentPlayerID = currentPlayerCheck(score, currentPlayerID);
  console.log('playerID:', currentPlayerID);
  if (currentPlayerID === 0) {
    currentP1.textContent = 0;
    scoreSecond = 0;
    scoreFirst += score;
    currentP0.textContent = scoreFirst;
    player0.textContent = '🏓 PLAYER 1';
    player1.textContent = 'PLAYER 2';
  } else if (currentPlayerID === 1) {
    currentP0.textContent = 0;
    scoreFirst = 0;
    scoreSecond += score;
    currentP1.textContent = scoreSecond;
    player0.textContent = 'PLAYER 1';
    player1.textContent = '🏓 PLAYER 2';
  }
});

//HOLD SCORE
btnHold.addEventListener('click', function () {
  if (currentPlayerID === 0) {
    totalScoreFirst += scoreFirst;
    scoreP0.textContent = totalScoreFirst;
    currentP0.textContent = 0;
    scoreFirst = 0;
    currentPlayerID = 1;
    player0.textContent = 'PLAYER 1';
    player1.textContent = '🏓 PLAYER 2';
  } else if (currentPlayerID === 1) {
    totalScoreSecond += scoreSecond;
    scoreP1.textContent = totalScoreSecond;
    currentP1.textContent = 0;
    scoreSecond = 0;
    currentPlayerID = 0;
    player0.textContent = '🏓 PLAYER 1';
    player1.textContent = 'PLAYER 2';
  }
  if (totalScoreFirst >= 15) {
    player0.textContent = '🏆 WINNER 🏆';
    player1.textContent = '😵 LOSER 😵';
  } else if (totalScoreSecond >= 15) {
    player0.textContent = '😵 LOSER 😵';
    player1.textContent = '🏆 WINNER 🏆';
  }
});

//NEW GAME
btnNewGame.addEventListener('click', function () {
  currentPlayerID = 0;
  player0.textContent = '🏓 PLAYER 1';
  player1.textContent = 'PLAYER 2';
  dice.src = 'dice-0.png';
  scoreFirst = 0;
  scoreSecond = 0;
  totalScoreFirst = 0;
  totalScoreSecond = 0;
  scoreP0.textContent = 0;
  scoreP1.textContent = 0;
});
