const square = (x) => {
  return x * x;
}
console.log(square(20));
const sum = (x, y) => {
  return x + y;
}
console.log(sum(100, 20));


const squared = (x) => x * x;
console.log(squared(20));

const squaredAgain = x => x * x;
console.log(squaredAgain(2200));

const summed = (x, y) => x + y;
console.log(summed(100, 20))

const isEven = (num) => {
  return num % 2 === 0;
}
console.log(isEven(4));
console.log(isEven(47));

const multiply = (x,y) => {
  return x * y;
}
console.log(multiply(4, 8));
console.log(multiply(47, 8));

const squares = x => {
  return x * x;
}
console.log(square(40));

const singASong = () => {
  return "LA LA LA LA LA LA";
}
console.log(singASong());

const greet = () => {
  console.log('Hi!');
}
greet();

const nums = [1,2,3,4,5,6,7,8];
const doubledNums = nums.map(function(n) {
  return n * 2;
})
console.log(nums);
console.log(doubledNums);

const doubledArrow = nums.map(n => {
  return n * 4;
})
console.log(doubledArrow);

const doubledOnceAgain = nums.map(n => n * 8);
console.log(doubledOnceAgain);

const parityList = nums.map(function(n){
  if(n % 2 === 0) return 'even';
    return 'odd';
})
console.log(parityList);

const parityListArrow = nums.map((n) => {
  if(n % 2 === 0) return 'evens';
    return 'odds';
})
console.log(parityListArrow);

const parityListArrowTernary = nums.map((n) => (
  n % 2 === 0 ? 'even' : 'odd'
));
console.log(parityListArrowTernary);

const parityListArrowTernaryOneLiner = nums.map((n) => n % 2 === 0 ? 'even' : 'odd');
console.log(parityListArrowTernaryOneLiner);