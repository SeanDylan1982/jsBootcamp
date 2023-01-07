const raceResults = ['Eliud Kipchoge', 'Feyisa Lelisa', 'Galen Rupp', 'Ghirmay Ghebreslassie', 'Alphonce Simbu', 'Jared Ward'];
const [gold,silver,bronze] = raceResults;
const [fastest, ...everyoneElse] = raceResults;

console.log(gold);
console.log(silver);
console.log(bronze);
console.log(fastest);
console.log(everyoneElse);

const [ first, , , fourth, , ,] = raceResults;
console.log(fourth);
const [winner, ...others] = raceResults;
console.log(winner, others);

const runner = {
  firstName: 'Eliud',
  last: 'Kipchoge',
  country: 'Kenya',
  title: 'Elder of the Order of the Golden Heart of Kenya'
};
// const {firstName,last,country} = runner;
const { firstName, last, ...other} = runner;

console.log(runner);
console.log(firstName);
console.log(last);
// console.log(country);
console.log(firstName,last);
console.log(other);

// const {country: nation, title: honorific} = runner;
// console.log(nation, honorific, runner);
