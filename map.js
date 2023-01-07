const texts = ['rofl', 'lol', 'omg', 'ttyl'];
const caps = texts.map(function(t){
  console.log(t);
  return t.toUpperCase();
});

console.log(texts);
console.log(caps);

const numbers = [20,21,22,23,24,25,26,27];
const words = ['asap', 'byob', 'rsvp', 'diy'];

const doubles = numbers.map(function(num){
  return num * 2;
})

console.log(doubles);

const numDetail = numbers.map(function(n){
  return {
    value: n,
    isEven: n % 2 === 0,
  }
})

console.log(numDetail);

const abbr = words.map(function(word){
  return word.toUpperCase().split('').join('.');
})
console.log(abbr);