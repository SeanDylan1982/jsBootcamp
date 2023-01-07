function pick(arr) {
  const idx = Math.floor(Math.random() * arr.length);
  return (arr[idx]);
}

function getCard() {
  const values = [
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
    'A',
  ]
  const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
  const value = pick(values);
  const suit = pick(suits);
  return {
    value,
    suit
  };
};
getCard();
