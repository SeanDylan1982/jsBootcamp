const feline = { legs: 4, family: 'felidae' };
const canine = { family: 'caninae', furry: true };
const dog = {...canine, isPet: true, adorable: true};
const lion = {...feline, genus: 'panthera'};
const catDog = {...feline, ...canine};

console.log(feline);
console.log(canine);
console.log(dog);
console.log(lion);
console.log(catDog);
