// function sumAll() {
//   let total = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     total += arguments[i];
//     console.log(total);
//   }
// }
// sumAll(8,4,3,2);
// sumAll(2,3);

// function sum() {
//   const argsArray = [...arguments];
//   argsArray.reduce((total, currVal) => {
//     console.log(total + currVal);
//     return total + currVal;
//   })
// }
// sum(1,2,3,4,5);

// function fullName(firstName,lastName, ) {
//   console.log(arguments);
//   console.log(lastName,firstName);
// }
// fullName("Sean","Patterson","Mr.","III");

// const multiply = () => {
//   console.log(arguments);
// }
// multiply();

// function sumAll(...nums) {
//   let total = 0;
//   for (let n of nums) total += n;
//   console.log(nums,total);
//   return total;
// }
// sumAll(1,2);
// sumAll(1,2,3,4,5);

function sum(...nums) {
  return nums.reduce((total, currVal) => {
    console.log(total, currVal);
    return total + currVal;
  })
}
sum(4,5,6,7);

function fullName(first,last, ...titles) {
  console.log('first :', first);
  console.log('last :', last);
  console.log('titles :', titles);
}
fullName('Sean','Patterson','III','Mr.')

const multiply = (...nums) => (
  nums.reduce((total, currVal) => {
    console.log(total, currVal, total * currVal);
    return total * currVal;
  })
)
multiply(2,3,4)