let max = Math.max(3,4,5,6,7,8,9,52);
console.log(max);
let min = Math.min(3,4,5,6,7,8,9,52);
console.log(min);

const nums = [1 ,3 ,5, 7, 9, 27, 99];
console.log(nums);
console.log(Math.max(nums));
console.log(Math.max(...nums));
console.log(Math.min(nums));
console.log(Math.min(...nums));

function giveMeFour(a,b,c,d) {
  console.log('a', a);
  console.log('b', b);
  console.log('c', c);
  console.log('d', d);
}
giveMeFour(1,2,3,4);

const colors = ['red', 'orange', 'yellow', 'green'];
giveMeFour(colors);
giveMeFour(...colors);

const str = "Goat";
giveMeFour(str);
giveMeFour(...str);