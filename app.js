/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//defining variable and object
var gamePlaying
var roundScore = 0
var activePlayer = 0
var prevDice

var playerOne = {
  globalScore1 : 0,
}
var playerTwo = {
  globalScore2 : 0,
}
var img = document.querySelector('img')

init()


//default score


const rollDice = document.querySelector('.btn-roll')
const holdBtn = document.querySelector('.btn-hold')
const btnNew = document.querySelector('.btn-new')

loadEventListeners()

function loadEventListeners(){
  rollDice.addEventListener('click', rollTheDice)
  holdBtn.addEventListener('click', holdTheBtn)
  btnNew.addEventListener('click', init)
}

function rollTheDice(){
  if(gamePlaying){
    var dice = Math.floor(Math.random() * 6) + 1
  img.style.display = 'block'
  img.src = 'dice-' + dice + '.png'
  prevDice = dice
  if( dice !== 1){

  roundScore += dice

  document.querySelector('#current-'+activePlayer).textContent = roundScore

  document.querySelector('.player-'+activePlayer+'-panel').classList.add('active')

  console.log(dice)

  }else{
  nextPlayer();
  }
  }
}

function nextPlayer(){
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
  roundScore = 0
  document.querySelector('#current-0').textContent = roundScore
  document.querySelector('#current-1').textContent = roundScore
  document.querySelector('.player-0-panel').classList.remove('active')
  document.querySelector('.player-1-panel').classList.remove('active')
}

function holdTheBtn(){
  if(gamePlaying){

  if(activePlayer === 0){
    playerOne.globalScore1 += roundScore
    document.querySelector('#score-0').textContent = playerOne.globalScore1
    nextPlayer()
    if(playerOne.globalScore1 >= 20){
      document.querySelector('#name-0').textContent = 'WINNER!'
      document.querySelector('#name-1').textContent = 'LOSE!'
      document.querySelector('.player-0-panel').classList.add('winner')
      gamePlaying = false
    }
    }
  else{
    playerTwo.globalScore2 += roundScore
    document.querySelector('#score-1').textContent = playerTwo.globalScore2
    nextPlayer()
    if(playerTwo.globalScore2 >= 20){
      document.querySelector('#name-1').textContent = 'WINNER!'
      document.querySelector('#name-0').textContent = 'LOSE!'
      document.querySelector('.player-1-panel').classList.add('winner')
      gamePlaying = false
    }
  }
  }

}

function init(){
  gamePlaying = true
  roundScore = 0
  playerOne.globalScore1 = 0
  playerTwo.globalScore2 = 0
  activePlayer = 0
  img.style.display = 'none'

  document.querySelector('#score-0').textContent = '0'
  document.querySelector('#score-1').textContent = '0'
  document.querySelector('#current-0').textContent = '0'
  document.querySelector('#current-1').textContent = '0'
  document.querySelector('.player-0-panel').classList.remove('winner')
  document.querySelector('.player-1-panel').classList.remove('winner')
  document.querySelector('#name-0').textContent = 'PLAYER 1'
  document.querySelector('#name-1').textContent = 'PLAYER 2'

}






