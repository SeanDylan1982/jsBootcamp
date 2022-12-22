let hand = {
  cards: "",
  suits: ""
}

function getCard() {
  const cards = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
  const suits = ["Spades", "Hearts", "Clubs", "Diamonds"];
  let card = Math.floor(Math.random() * cards.length);
  // console.log(card);
  let suit = Math.floor(Math.random() * suits.length);
  // console.log(suit);
  console.log(cards[card], suits[suit]);
  hand.cards = cards[card];
  hand.suits = suits[suit];
}
getCard();
console.log(hand);