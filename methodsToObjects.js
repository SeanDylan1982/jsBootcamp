const math = {
  multiply: function(x,y) {
    console.log(x*y);
    return x*y;
  },
  divide: function(x,y) {
    console.log(x/y);
    return x/y;
  },
  square: function(x) {
    console.log(x*x);
    return x*x;
  },
  add: function(x,y) {
    console.log(x+y);
    return x+y;
  },
  subtract: function(x,y) {
    console.log(x-y);
    return x-y;
  }
}
math.multiply(2,4);
math.divide(2,4);
math.square(2);
math.add(2,4);
math.subtract(2,4);

const maths = {
  blah: 'Hi!',
  adds(x,y) {
    return x + y;
  },
  multiplies(x,y) {
    return x * y;
  }
}
const sums = maths.adds(50,60);
console.log(sums);

const auth = {
  username: 'Tom',
  login() {
    console.log("Logged In!");
  },
  logout() {
    console.log("Logged Out!");
  }
}
console.log(auth);