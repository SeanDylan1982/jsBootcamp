const numbers = [3,5,7,9,11];

const sum = numbers.reduce((accumulator, currentValue) => {
  console.log(accumulator, currentValue, accumulator + currentValue);
  return accumulator + currentValue;
}, 10);
console.log(sum);

const nums = [3,4,5,6,7];

const product = nums.reduce((total, currentVal) => {
  console.log(total, currentVal, total * currentVal);
  return total * currentVal;
});
console.log(product);

let grades = [89,96,77,62,93,81,58,99,73];

const topScore = grades.reduce((max, currVal) => {
  console.log(max,currVal);
  if (currVal > max) return currVal;
  return max;
}, 50);
console.log(topScore);

const topScoreMath = grades.reduce((max, currValMath) => (Math.max(max, currValMath)));
console.log(topScoreMath);

const minScore = grades.reduce((min, currVal) => {
  console.log(min,currVal);
  if (currVal < min) return currVal;
  return min;
});
console.log(minScore);

const votes = ['y', 'y', 'n', 'y', 'n', 'y', 'n', 'y', 'n', 'n', 'n', 'y', 'y'];

const tally = votes.reduce((tally, vote) => {
  tally[vote] = (tally[vote] || 0) + 1;
  console.log(tally, vote);
  return tally;
}, {})
console.log(tally);

const books = [
  {
  title: 'Good Omens',
  authors: ['Terry Pratchett', 'Neil Gaiman'],
  rating: 4.25,
  genres: ['fiction', 'fantasy']
  },
  {
  title: 'Changing My Mind',
  authors: ['Zadie Smith'],
  rating: 3.83,
  genres: ['non-fiction', 'essays']
  },
  {
  title: 'Bone: The Complete Edition',
  authors: ['Jeff Smith'],
  rating: 4.42,
  genres: ['fiction', 'fantasy', 'graphic novel']
  },
  {
  title: 'American Gods',
  authors: ['Neil Gaiman'],
  rating: 4.11,
  genres: ['fiction', 'fantasy']
  },
  {
  title: 'A Gentleman in Moscow',
  authors: ['Amor Towles'],
  rating: 4.36,
  genres: ['fiction', 'fantasy', 'graphic novel']
  },
  {
  title: 'The Name of The Wind',
  authors: ['Patrick Rossfuss'],
  rating: 4.54,
  genres: ['fiction', 'fantasy']
  },
  {
  title: 'The Overstory',
  authors: ['Richard Powers'],
  rating: 4.19,
  genres: ['fiction', 'short stories']
  },
  {
  title: 'A truly Horrible Book',
  authors: ['Xavier Time'],
  rating: 2.18,
  genres: ['fiction', 'garbage']
  },
  {
  title: 'The Ways of Kings',
  authors: ['Brandon Sanderson'],
  rating: 4.65,
  genres: ['epic', 'fantasy']
  },
  {
  title: 'Lord of the flies',
  authors: ['William Golding'],
  rating: 3.67,
  genres: ['fiction']
  }
];

const groupedByRating = books.reduce((groupedBooks, book) => {
  const p = Math.floor(book.rating);
  console.log(p);
  if (!groupedBooks[p]) groupedBooks[p] = [];
  groupedBooks[p].push(book);
  return groupedBooks;
}, 
  {})
console.log(groupedByRating);
