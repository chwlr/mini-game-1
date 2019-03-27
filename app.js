/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var roundScore = 0
var activePlayer = 0
var playerOne = {
  globalScore1 : 0
}
var playerTwo = {
  globalScore2 : 0
}

document.querySelector('#score-0').textContent = '0'
document.querySelector('#score-1').textContent = '0'
document.querySelector('#current-0').textContent = '0'
document.querySelector('#current-1').textContent = '0'

var img = document.querySelector('img')
img.style.display = 'none'

const rollDice = document.querySelector('.btn-roll')
const holdBtn = document.querySelector('.btn-hold')

loadEventListeners()

function loadEventListeners(){
  rollDice.addEventListener('click', rollTheDice)
  holdBtn.addEventListener('click', holdTheBtn)
}

function rollTheDice(){
  var dice = Math.floor(Math.random() * 6) + 1
  img.style.display = 'block'
  img.src = 'dice-' + dice + '.png'

  if( dice !== 1){

  roundScore += dice

  document.querySelector('#current-'+activePlayer).textContent = roundScore

  console.log(dice)

  }else{
  nextPlayer();
  }
}

function nextPlayer(){
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
  roundScore = 0
  document.querySelector('#current-0').textContent = roundScore
  document.querySelector('#current-1').textContent = roundScore
}

function holdTheBtn(){
  if(activePlayer === 0){
    playerOne.globalScore1 += roundScore
  }else{
    playerTwo.globalScore2 += roundScore
  }
}






