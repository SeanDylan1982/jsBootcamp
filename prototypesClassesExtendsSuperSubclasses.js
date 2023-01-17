// const apiResponse = document.querySelector('#apiResponse');
// const dadJoke = document.querySelector("#dadJoke");
// const str = "hello";

// String.prototype.yell = function () {
//   return `${this.toUpperCase()}!!!!`;
// }
// str.yell();

// const navColor = new Color('carrot', [230, 126, 34]);
// const logoColor = new Color('emerald', [46, 204, 113]);

// function hex(r,g,b) {
//   const conversion = '#' + ((1<<24) + (r<<16) + (g<<8) + b).toString(16).slice(1);
//   apiResponse.innerText = conversion;
//   apiResponse.style.backgroundColor = conversion;
//   return conversion;
// }
// hex(25,22,23);

// function rgb(r,g,b) {
//   const input = `rgb(${r}, ${g}, ${b})`;
//   apiResponse.innerText += input;
//   apiResponse.style.color = input;
//   return input;
// }
// rgb(225,220,223);

// function makeColor(r,g,b) {
//   const color = {};
//   color.r = r;
//   color.g = g;
//   color.b = b;
//   color.rgb = function() {
//     const {r,g,b} = this;
//     return `rgb(${r}, ${g}, ${b})`;
//   }
//   color.hex = function () {
//     const {r,g,b} = this;
//     const conversion = '#' + ((1<<24) + (r<<16) + (g<<8) + b).toString(16).slice(1);
//     dadJoke.innerText = conversion;
//     dadJoke.style.backgroundColor = conversion;
//     return conversion;
//   }
//   console.log(color);
//   return color;
// }
// makeColor(20,220,200);

// const firstColor = makeColor(255,255,255);
// firstColor.rgb();
// firstColor.hex();

// const black = makeColor(0,0,0);
// black.rgb();
// black.hex();

// function Car(make,model,year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   console.log(make,model,year);
// }
// const car1 = new Car('Eagle', 'Talon TSi', 1993);
// console.log(car1.make,car1.model,car1.year);

// function Color(r,g,b) {
//   this.r = r;
//   this.g = g;
//   this.b = b;
//   console.log(this);
//   console.log(r,g,b);
//   dadJoke.style.color = `rgb(${r}, ${g}, ${b})`
// }
// new Color(0,0,255);
// new Color(0,255,0);
// new Color(255,0,0);

// Color.prototype.rgb = function() {
//   const {r,g,b} = this;
//   return `rgb(${r}, ${g}, ${b})`
// }

// Color.prototype.hex = function() {
//   const {r,g,b} = this;
//   return '#' + ((1<<24) + (r<<16) + (g<<8) + b).toString(16).slice(1);
// }

// Color.prototype.rgba = function(a=1.0) {
//   const {r,g,b} = this;
//   return `rgba(${r}, ${g}, ${b}, ${a})`
// }

// const color1 = new Color(40,215,60);
// color1.hex()
// document.body.style.backgroundColor = color1.rgba(0.5);
// const color2 = new Color(0,0,255);
// color2.hex()
// document.body.style.backgroundColor = color2.rgba(0.2);

// class Color {
//   constructor(r,g,b,a,name) {
//     console.log(r,g,b,a,name);
//     this.r = r;
//     this.g = g;
//     this.b = b;
//     this.a = a;
//     this.name = name;
//     this.calcHSL();
//   }
//   innerRGB() {
//     const {r,g,b} = this;
//     return `${r}, ${g}, ${b}`;
//   }
//   rgb() {
//     return `rgb(${this.innerRGB()})`;
//   }
//   rgba(a=1.0) {
//     return `rgba(${this.innerRGB()}, ${a})`;
//   }
//   hex() {
//     let {r,g,b} = this;
//     return '#' + ((1<<24) + (r<<16) + (g<<8) + b).toString(16).slice(1);
//   }
//   hsl() {
//     let {h,s,l} = this;
//     return `hsl(${h},${s}%,${l}%)`
//   }
//   fullSaturation() {
//     let {h,l} = this;
//     return `hsl(${h},100%,${l}%)`;
//   }
//   opposite() {
//     let {h,s,l} = this;
//     let newHue = (h + 180) % 360;
//     return `hsl(${newHue},${s}%,${l}%)`;
//   }
//   calcHSL() {
//     let {r,g,b} = this;
//     r /= 255;
//     g /= 255;
//     b /= 255;
  
//     let cmin = Math.min(r,g,b),
//       cmax = Math.max(r,g,b),
//       delta = cmax - cmin,
//       h = 0,
//       s = 0,
//       l = 0
//     if (delta === 0) h = 0;
//     else if ( cmax === r)  h = ((g -b) / delta) % 6;
//     else if ( cmax === g) h = ((b -r) / delta) + 2;
//     else h = ((r -g) / delta + 4);
  
//     h = Math.round(h * 60);
//     if (h < 0) h += 360;
//     l = (cmax + cmin) / 2;
//     s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
//     s = +(s * 100).toFixed(1);
//     l = +(l * 100).toFixed(1);
//     this.h = h;
//     this.s = s;
//     this.l = l;
//     return [h,s,l];
//   }
// }

// const color3 = new Color(0,0,255,0.5,"blue");

class Pet {
  constructor(name,age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating`;
  }
}

class Cat extends Pet {
  constructor(name,age,livesLeft=9) {
    super(name,age);
    this.livesLeft = livesLeft;
  }
  meow() {
    return `${this.name} is meowing!`;
  }
  }

const elvis = new Cat("Elvis", 2)
console.log(elvis,elvis.name,elvis.age,elvis.livesLeft);
console.log(elvis.meow());
console.log(elvis.eat());

class Dog extends Pet {
  bark() {
    return `${this.name} is barking!`;
  }
}

const rufus = new Dog("Rufus", 4)
console.log(rufus,rufus.name,rufus.age);
console.log(rufus.eat());
console.log(rufus.bark());