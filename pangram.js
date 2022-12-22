// function isPangram(sentence) {
//   sent = sentence.toLowerCase();
//   for (let char of 'abcdefghijklmnopqrstuvwxyz') {
//     if( sent.indexOf(char) === -1 ) {
//       return false;
//     }
//     return true;
//   }
// }


function isPangram(sentence) {
  let sent = sentence.toLowerCase();
  for (let char of 'abcdefghijklmnopqrstuvwxyz') {
    if( !sent.includes(char) ) {
      return false;
    }
    return true;
  }
}

console.log(isPangram("The five boxing wizards jump quickly"));
console.log(isPangram("The five boxing wizards jump quick"));