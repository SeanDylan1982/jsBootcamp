function multiply(a,b) {
  b = typeof b !== 'undefined' ? b : 1;
  return a * b;
}

console.log(multiply(7));
console.log(multiply(7,3));

function multiplyAgain(x,y) {
  if (typeof y === 'undefined') {
    y = 1;
  }
  return x * y;
}

console.log(multiplyAgain(7));
console.log(multiplyAgain(7,3));

function multiplyYetAgain(x,y) {
  y = typeof y === "undefined" ? 1 : y;
  return x * y;
}

console.log(multiplyYetAgain(7));
console.log(multiplyYetAgain(7,3));

function newMultiply(a,b = 1) {
  return a * b;
}
console.log(newMultiply(7));
console.log(newMultiply(7,3));

const greet = (person, greeting = "Hi") => {
  console.log(`${greeting}, ${person}!`);
  return greeting + ", " + person + "!";
}
greet("sean", "yo")

const blah = (x,y=[1,2,3]) => {
  console.log(x,y);
}
blah("1");