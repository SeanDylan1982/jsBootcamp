// function makeDeck() {
//   const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
//   const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';
//   const cards = values.split(",");
//   let suit = Math.floor(Math.random() * suits.length);
//   let value = Math.floor(Math.random() * cards.length);
//   console.log(suit);
//   console.log(value);
// }
// makeDeck();

// function newDeck() {
//   const deck = [];
//   const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
//   const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';
//   for (let value of values.split(',')) {
//     for (let suit of suits) {
//       deck.push({value, suit})
//       // console.log(suit);
//       // console.log(value);
//     }
//   }
//   return deck;
// }
// newDeck();

// function drawCard(deck) {
//   return deck.pop();
// }

// const myDeck = newDeck();
// const card1 = drawCard(myDeck);

const myNewDeck = {
  deck: [],
  drawnCard: [],
  suits: ['♥', '♦', '♣', '♠'],
  values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
  initializeDeck() {
    const {suits,values,deck} = this;
    for (let value of values.split(',')) {
      for (let suit of suits) {
        deck.push({value, suit})
        // console.log(suit);
        // console.log(value);
    }
  }
  // return deck;
  },
  drawCard() {
    const card = this.deck.pop();
    this.drawnCard.push(card);
    return card;
  },
  drawMultipleCards(numCards) {
    const cards = [];
    for (let i = 0; i < numCards; i++) {
      cards.push(this.drawCard());
    }
    return cards;
  },
  shuffle() {
    const {deck} = this;
    for (let i = deck.length -1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
      // console.log(deck);
    }
  }
}


// function shuffle(arr) {
//   // loop over the array from the back
//   for (let i = arr.length -1; i > 0; i--) {
//     // pick a random index before the current element
//     let j = Math.floor(Math.random() * (i + 1));
//     // swap
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//     console.log(arr);
//   }
// }

const array = [1,2,3,4,5,6,7,8,9];

myNewDeck.initializeDeck();
myNewDeck.shuffle();
const cardsP1 = myNewDeck.drawMultipleCards(2);
console.log("Player 1");
console.log(`${cardsP1[0].value} ${cardsP1[0].suit}`);
console.log(`${cardsP1[1].value} ${cardsP1[1].suit}`);
console.log(" ");
const cardsP2 = myNewDeck.drawMultipleCards(2);
console.log("Player 2");
console.log(`${cardsP2[0].value} ${cardsP2[0].suit}`);
console.log(`${cardsP2[1].value} ${cardsP2[1].suit}`);
console.log(" ");
console.log("Table");
const card1 = myNewDeck.drawCard();
const card2 = myNewDeck.drawCard();
const card3 = myNewDeck.drawCard();
const card4 = myNewDeck.drawCard();
const card5 = myNewDeck.drawCard();
console.log(`${card1.value} ${card1.suit}`);
console.log(`${card2.value} ${card2.suit}`);
console.log(`${card3.value} ${card3.suit}`);
console.log(`${card4.value} ${card4.suit}`);
console.log(`${card5.value} ${card5.suit}`);
// console.log(myNewDeck.deck);
// myNewDeck.shuffle(array);

const newDeck = () => {
  return {
    deck: [],
    drawnCard: [],
    suits: ['♥', '♦', '♣', '♠'],
    values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
    initializeDeck() {
      const {suits,values,deck} = this;
      for (let value of values.split(',')) {
        for (let suit of suits) {
          deck.push({value, suit})
          // console.log(suit);
          // console.log(value);
      }
    }
    // return deck;
    },
    drawCard() {
      const card = this.deck.pop();
      this.drawnCard.push(card);
      return card;
    },
    drawMultipleCards(numCards) {
      const cards = [];
      for (let i = 0; i < numCards; i++) {
        cards.push(this.drawCard());
      }
      return cards;
    },
    shuffle() {
      const {deck} = this;
      for (let i = deck.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
        // console.log(deck);
      }
    }
  }
}

console.log(" ");

const dealNewDeck = newDeck();
dealNewDeck.initializeDeck();
dealNewDeck.shuffle();
const h1 = dealNewDeck.drawMultipleCards(2);
const h2 = dealNewDeck.drawMultipleCards(2);
const h3 = dealNewDeck.drawMultipleCards(5);
console.log(" ");
console.log("Player 1");
console.log(`${h1[0].value} ${h1[0].suit}`);
console.log(`${h1[1].value} ${h1[1].suit}`);
console.log(" ");
console.log("Player 2");
console.log(`${h2[0].value} ${h2[0].suit}`);
console.log(`${h2[1].value} ${h2[1].suit}`);
console.log(" ");
console.log("Table");
console.log(`${h3[0].value} ${h3[0].suit}`);
console.log(`${h3[1].value} ${h3[1].suit}`);
console.log(`${h3[2].value} ${h3[2].suit}`);
console.log(`${h3[3].value} ${h3[3].suit}`);
console.log(`${h3[4].value} ${h3[4].suit}`);
const dealNewDeck2 = newDeck();