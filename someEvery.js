const words = ["dog", "dig", "log", "bag", "wag"];

const testThree = words.every(word => {
  return word.length === 3;
})
console.log(testThree);

const firstLetterD = words.every(word => word[0] === 'd');
console.log(firstLetterD);

const lastLetterG = words.every(w => {
  let lastLetter = w[w.length -1];
  return lastLetter === "g";
})
console.log(lastLetterG);

console.log("------");

const someWords = ["dog", "jello", "log", "cupcake", "bag", "wag"];

const testForThree = someWords.some(word => {
  return word.length > 4;
})
console.log(testForThree);

const testFirstLetterD = someWords.some(word => word[0] === 'Z');
console.log(testFirstLetterD);

const testLastLetterG = someWords.some(w => w.includes('cake'));
console.log(testLastLetterG);

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

const allGoodBooks = books.every(book => book.rating > 3.5);
console.log(allGoodBooks);

const anyTwoAuthors = books.some(book => book.authors.length === 2);
console.log(anyTwoAuthors);