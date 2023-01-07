const nums1 = [1,2,3];
const nums2 = [4,5,6];

let one = [...nums1, ...nums2];
let two = ['a', 'b', ...nums2];
let three = [...nums1, ...nums2, 7, 8, 9];

console.log(one);
console.log(two);
console.log(three);

const cephalopods = ['dumbo octopus', 'humboldt squid', 'flamboyant cuttlefish'];
const gastropods = ['giant african snail', 'banana slug', 'variable neon slug'];
const cnidaria = ['fire coral', 'moon jelly'];

const mollusca = [...cephalopods, ...gastropods];
console.log(mollusca);
const mollusca2 = [...gastropods, ...cephalopods];
console.log(mollusca2);
const mollusca3 = [...cephalopods, 'garden snail', ...gastropods];
console.log(mollusca3);
const inverts = [...cephalopods, ...gastropods, ...cnidaria]
console.log(inverts);