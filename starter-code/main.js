var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "king";

// if (cardTwo === cardFour){
//   alert("You found a match!");
// } else{
//   alert("Sorry, try again");
// }

var gameboard = document.getElementById('game-board');

function createBoard(){
  for (var i = 0; i < 4; i++){
    var tempCard = document.createElement('div');
    tempCard.className = "card";
    gameboard.appendChild(tempCard);
  }
}

createBoard();
