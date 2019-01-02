const validatePlayers = require("./cards");
const determineCardsToDeal = require("./cards");
const buildDeck = require("./cards");
const shuffleDeck = require("./cards");
const buildPlayerArray = require("./cards");


it('input should be valid for player number', () => {
  expect(validatePlayers(4)).toReturn(players)
})


it('input should NOT return player number'), () => {
  expect(validatePlayers(100).not.toReturn(100);
})


it('cardsToDeal should be 52/players', () => {
  expect(cards.determineCardsToDeal(4)).toBe(13);
});


it('cardsToDeal Should be rounding down any decimal result', () => {
  expect(determineCardsToDeal(5)).toBe(10);
});


it("cardsToDealShould not be decimal", () => {
  expect(determineCardsToDeal(5)).not.toBe(10.4);
});

it("array length should be equal to number of players", () => {
  expect(buildPlayerArray(3)).toHaveLength(3);
});

it("buildPlayerArray should return an arrayofPlayers", () => {
   var players = 3;
  expect(buildPlayerArray()).toEqual(arrayofPlayers)
});

it("deck array should = 0 after dealing all cards", () => {
  var player = 4;
  buildPlayerArray();
  expect(deck).toHaveLength(0);
});


it("Built deck should have 52 cards", () => {
  expect(buildDeck()).toHaveLength(52);
});


it("Deck should contain all cards, including spade, 3", () => {
  var deck = buildDeck();
  expect(deck[2]).toEqual({"Suits": "spades", "cardNum": "3"});

});


it("deck should have only one of each card type", () => {
  var deck = buildDeck();
  var count = 0;
  for (let i = 0; i < deck.length; i++)
   {
    if (deck[i].cardNum == "3" && deck[i].Suits == "spades")
    {
      count ++;
    }
  }
  expect(count).toBe(1);
});

it("Deck should still have 52 cards after shuffling", () => {
  var deck = [
  ["A","spades"],["2", "spades"],["3", "spades"],["4", "spades"],["5", "spades"],["6", "spades"],["7", "spades"],["8", "spades"],["9", "spades"],["10","spades"],["J", "spades"],["Q","spades"],["K","spades"],["A","diamonds"],
  ["2","diamonds"],["3","diamonds"],["4","diamonds"],["5","diamonds"],["6", "diamonds"],["7", "diamonds"],
  ["8", "diamonds"],["9", "diamonds"],["10","diamonds"],["J","diamonds"],["Q", "diamonds"],["K", "diamonds"],
  ["A", "clubs"],["2", "clubs"],["3", "clubs"],["4","clubs"],["5","clubs"],["6","clubs"],["7","clubs"],
  ["8","clubs"],["9","clubs"],["10","clubs"],["J","clubs"],["Q","clubs"],["K","clubs"],["A","hearts"],["2","hearts"],["3","hearts"],["4", "hearts"],["5","hearts"],["6","hearts"],["7", "hearts"],["8", "hearts"],["9", "hearts"],["10", "hearts"],["J", "hearts"],["Q", "hearts"],["K", "hearts"]
  ]
  shuffleDeck();
  expect(deck).toHaveLength(52);
});
