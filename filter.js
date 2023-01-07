const nums = [909,808,707,606,505,404,303,202,101];
const odds = nums.filter(n => {
  return n % 2 === 1;
})
console.log(nums,odds);
const smallNums = nums.filter(n => n < 505);
console.log(smallNums);

const filteredOddNums = nums.filter(n => n % 2 === 1);
console.log(filteredOddNums);
const filteredEvenNums = nums.filter(n => n % 2 === 0);
console.log(filteredEvenNums);

const bigNums = nums.filter(n => n > 505);
console.log(bigNums);

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

const goodBooks = books.filter(b => b.rating > 4.3);
console.log(goodBooks);
const fantasyBooks = books.filter(b => b.genres.includes('fantasy'));
console.log(fantasyBooks);
const shortForm = books.filter (book => (
  book.genres.includes('short stories') || book.genres.includes('essays')
))
console.log(shortForm);

const query = '';
const results = books.filter(book => {
  const title = book.title.toLowerCase();
  return title.includes(query.toLowerCase())
});
console.log(results);
