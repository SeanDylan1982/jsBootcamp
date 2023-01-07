const prices = [400.50, 3000, 99.99, 35.99, 12.00, 9500];

const sorted = prices.sort();
console.log(sorted);
const sortedAscending = prices.sort((a, b) => a - b);
console.log(sortedAscending);
const sortedDescending = prices.sort((a, b) => b - a);
console.log(sortedDescending);
console.log(prices);
