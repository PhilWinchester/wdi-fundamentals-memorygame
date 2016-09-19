var cards = ['queen', 'queen','king','king'];
var cardsInPlay = [];

var gameboard = document.getElementById('game-board');

function createBoard(){
  for (var i = 0; i < cards.length; i++){
    var cardElement = document.createElement('div');
    cardElement.className = "card";
    cardElement.setAttribute('data-card', cards[i]);
    cardElement.addEventListener('click',isTwoCards);
    gameboard.appendChild(cardElement);
  }
}

function isMatch(temp){
  if(temp[0] === temp[1]){
    document.getElementById('message').textContent = "Winner!!";
  } else {
    document.getElementById('message').textContent = "Better luck next time";
  }
}

function isTwoCards(){
  cardsInPlay.push(this.getAttribute('data-card'));
  if (this.getAttribute('data-card') === 'king'){
    this.innerHTML = '<img src="king.png" alt="King of Diamonds"/>';
  } else if (this.getAttribute('data-card') === 'queen'){
    this.innerHTML = '<img src="queen.png" alt="Queen of Diamonds"/>';
  }
  if (cardsInPlay.length === 2){
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }
}

createBoard();
