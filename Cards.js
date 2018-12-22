//((1) create a standard deck of playing cards (defined below),
//(2) shuffle the deck (also defined below),
//(3) deal as many cards as possible to a number of players that would be specified by the program's user1)

const cards {

function playGame() {
  getNumberOfPlayers();
  determineCardsToDeal(players);
  buildDeck();
  shuffleDeck();
  buildPlayerArray();

}

var players;
var deck = new Array();
var suits = ["spades", "diamonds", "clubs", "hearts"];
var cardNum = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var cardsToDeal;
var arrayofPlayers = new Array();
//var playerArray = new Array(cardsToDeal);

function getNumberOfPlayers()
  {
    players = prompt("Please enter the number of players");
    validatePlayers(players);
    //add check to validate

    return players;
  }

  function validatePlayers(players)
  {
      if (players >= 1 && players <53)
      {
        return players;
      }
      else {
        getNumberOfPlayers();
      }
  }


function determineCardsToDeal(players)
{
        cardsToDeal = (52/players);
        cardsToDeal = Math.floor(cardsToDeal);

        return cardsToDeal;
}

//odule.exports = cards;


function buildDeck()
{
  for (let i=0; i< suits.length; i++)
    {
        for (let j=0; j < cardNum.length; j++)
        {
          var card = {cardNum: cardNum[j], Suits: suits[i]};
  			deck.push(card);
        }
      }
      return deck;
}
function shuffleDeck()
{
  for (var i = 0; i < 1000; i++)
  {
    var shift = deck.shift();
    var newPlacement = Math.floor(Math.random() * 52) + 1
    deck.splice([newPlacement], 0, shift);
  }
}

function buildPlayerArray()
{

for (var i = 0; i < players; i++) {
  var playerCards = new Array();
  for (let j = 0; j < cardsToDeal; j++)
  {
    var card = deck.pop();
    playerCards.push(card);
  }
    arrayofPlayers.push(playerCards);
}
  return arrayofPlayers;
}

playGame();

exports.module = Cards;
