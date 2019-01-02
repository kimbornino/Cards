function playGame() {
  getNumberOfPlayers();
  determineCardsToDeal(players);
  buildDeck();
  shuffleDeck();
  buildPlayerArray(players);
  console.log(arrayofPlayers);

}

var players;
var deck = new Array();
var suits = ["spades", "diamonds", "clubs", "hearts"];
var cardNum = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var cardsToDeal;
var arrayofPlayers = new Array();

function getNumberOfPlayers()
  {
    players = prompt("Please enter the number of players");
    validatePlayers(players);
    return players;
  }
///is int
  function validatePlayers(players)
  {
      if (players >= 1 && players <53 && players = int)
      {
        return players;
      }
      else
      {
        getNumberOfPlayers();
      }
  }


function determineCardsToDeal(players)
{
        cardsToDeal = (52/players);
        cardsToDeal = Math.floor(cardsToDeal);

        return cardsToDeal;
}

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
  return deck;
}

function buildPlayerArray(numPlayers)
{

for (var i = 0; i < numPlayers; i++) {
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
