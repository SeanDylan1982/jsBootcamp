const numbers = [20,21,22,23,24,25,26,27];

numbers.forEach(function(num,idx) {
  console.log(idx + 1, num);
});

// numbers.forEach(function(num){
//   console.log(num*num);
// });

// function printTriple(n) {
//   console.log(n*n);
// }
// numbers.forEach(printTriple);

// const books = [
//   {
//   title: 'Good Omens',
//   authors: ['Terry Pratchett', 'Neil Gaiman'],
//   rating: 4.25
//   },
//   {
//   title: 'Bone: The Complete Edition',
//   authors: ['Jeff Smith'],
//   rating: 4.42
//   },
//   {
//   title: 'American Gods',
//   authors: ['Neil Gaiman'],
//   rating: 4.11
//   },
//   {
//   title: 'A Gentleman in Moscow',
//   authors: ['Amor Towles'],
//   rating: 4.36
//   }
// ];

// books.forEach(function(book){
//   console.log("1 - ", book.title.toUpperCase());
// })

// for (let book of books) {
//   console.log("2 - ", book.title.toUpperCase());
// }

// for (let i = 0; i < books.length; i++) {
//   console.log("3 - ", books[i].title.toUpperCase());
// }

