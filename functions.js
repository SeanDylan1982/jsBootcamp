function rollDice() {
  let total = 0;
  for (let i = 0; i < 2; i++) {
    let roll = Math.floor(Math.random() * 6) + 1;
    total += roll;
  }
  console.log(`Roll : ${total}`);
}
rollDice();

function randomNumber() {
  let rN = Math.floor(Math.random() * 100) + 1;
  console.log(`Random number : ${rN}`);

  function square(raN) {
    let total = raN * raN;
    console.log(`Squared : ${total}`);
    return total;
  }
  square(rN);
}
randomNumber();

