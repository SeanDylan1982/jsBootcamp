// function sayHi() {
//   console.log("hi!");
//   console.log(this);
// }
// sayHi();

// const greet = function greet() {
//   console.log(this);
// }
// greet();

// function hello() {
//   console.log(this);
// }
// hello();

// function sayHello() {
//   console.log("Hello");
// }
// sayHello();

const person = {
  first: 'Cherilyn',
  last: 'Sarkisian',
  nickname: 'Cher',
  fullName() {
    const {first,last,nickname} = this;
    // console.log(this);
    // console.log(`${first} ${last} AKA ${nickname}`);
    // console.log(`${this.first} ${this.last} AKA ${this.nickname}`);
    return `${this.first} ${this.last} AKA ${this.nickname}`
  },
  printBio() {
    const fullName = this.fullName();
    // console.log(`${fullName} is a person!`);
    // console.log(`${this.first} ${this.last} AKA ${this.nickname}`);
  },
  laugh: () => {
    console.log(this);
    console.log(`${this.nickname} says "Hahahahah"`);
  }
}
person.fullName();
person.printBio();
person.laugh();

const newPersons = {
  first: 'Rob',
  last:  'Jobs',
  fullName() {
    return `${this.first} ${this.last}`
  }
}
console.log(newPersons.fullName());
console.log(newPersons.last = "Plant");
console.log(newPersons.fullName());

const printBio = person.printBio;
console.log(printBio);

