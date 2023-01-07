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

const query = '';
const results = books.filter(book => {
  const title = book.title.toLowerCase();
  return title.includes(query.toLowerCase())
});
console.log(results);
