let movies = [
  "The Fantatic Mr. Fox",
  "Mr. & Mrs. Smith",
  "Mrs. Doubtfire",
  "Mr. Deeds"
]
let movie = movies.find(movie => {
  return movie.includes("Mrs.")
})
console.log(movie);
let movie2 = movies.find(m => (
  m.indexOf("Mrs") === 0
));
console.log(movie2);
let movie3 = movies.find(m => m.indexOf("Mrs") === 0);
console.log(movie3);

const books = [
  {
  title: 'Good Omens',
  authors: ['Terry Pratchett', 'Neil Gaiman'],
  rating: 4.25
  },
  {
  title: 'Bone: The Complete Edition',
  authors: ['Jeff Smith'],
  rating: 4.42
  },
  {
  title: 'American Gods',
  authors: ['Neil Gaiman'],
  rating: 4.11
  },
  {
  title: 'A Gentleman in Moscow',
  authors: ['Amor Towles'],
  rating: 4.36
  }
];

const goodBooks = books.find(b => b.rating >= 4.3);
console.log(goodBooks);
const neilBooks = books.find(b => (
  b.authors.includes('Neil Gaiman')
));
console.log(neilBooks);