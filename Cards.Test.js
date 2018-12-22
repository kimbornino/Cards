const cards = require("./Cards");

//card total should be 52/player
test('Should be 52/players', () => {
  expect(cards.determineCardsToDeal(4)).toBe(13);
});

//card total should be a whole number
test('Should be rounding down', () => {
  expect(determineCardsToDeal(5)).toBe(10);
});

//card total should NOT be a decimal
test("Should not be decimal", () => {
  expect(determineCardsToDeal(5)).not.toBe(10.4);
});

// player number should determine the length of player array
test("array should be determined length", () => {
   var player = 3;
   buildPlayerArray()
  expect(playerArray).toHaveLength(3);
});



//test("player should have correct number of cards in deck")
//var player = 4;
//expect player[i] to be 13;

//test("number of cards in arrray start and array end should be the same")

//("number of cards in array start and array end should be the same")

test("deck array should = 0 after dealing all cards", () => {
  var player = 4;
  buildPlayerArray();
  expect(deck).toHaveLength(52);
});

test("built deck should have 52 cards", () => {
  espect(deck).tobe
});

test("deck should contain all cards, including spade, 2", () => {
  buildDeck();
  expect(deck).Contains({"spade, 2"});
});

test("Check for doubles in deck", () => {
  expect(deck[2].not.toContainEqual(deck[2]);
});

//(total of cards in each sub array should be 52)

//test for build buildDeck
//should be 52
//should have no repeats
