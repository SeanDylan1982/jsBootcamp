// function add(x,y) {
//   return x + y;
// }

// const subtract = function(x,y) {
//   return x - y;
// }

// function multiply(x,y) {
//   return x * y;
// }

// const divide = function(x,y) {
//   return x / y;
// }

// const operations = [add,subtract,multiply,divide];

// console.log(operations[3](20,2));

// for (let func of operations) {
//   let result = func(5,5);
//   console.log(result);
// }

// const thing = {
//   doSomething: multiply,
// }

// function callTwice(func) {
//   func();
//   func();
// }

// function laugh() {
//   console.log("hahaha");
// }
// callTwice(laugh);

// function cry() {
//   console.log("waaaaa");
// }
// callTwice(laugh);

// function repeat(action,num){
//   for (let i = 0; i < num; i++) {
//     action();
//   }
// }
// repeat(laugh,20)

// function pickOne(f1,f2){
//   let rand = Math.random();
//   if (rand < 0.5) {
//     f1();
//   } else {
//     f2();
//   }
// }
// pickOne(laugh,cry);

// function makeBetweenFunc(min,max){
//   return function(val){
//     return val >= min && val <= max;
//   }
// }

// const inAgeRange = makeBetweenFunc(18,100);

// console.log(inAgeRange(17));
// console.log(inAgeRange(68));

// const isChild = makeBetweenFunc(0,18);
// console.log(isChild(5));
// console.log(isChild(67));

// function multiplyBy(num) {
//   return function(x){
//     return x * num;
//   }
// }

// const triple = multiplyBy(3);
// console.log(triple(6));

// const double = multiplyBy(2);
// console.log(double(8));

// function greet() {
//   alert('Hello');
// }
// setTimeout(greet, 5000);

// setTimeout(function(){
//   alert("Yo!");
// }, 10000);

// const btn = document.querySelector("button");
// btn.addEventListener("click", function(){
//   alert("Yo yo!");
// })