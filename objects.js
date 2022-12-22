const person = {
  name: "sean",
  surname: "patterson",
  age: 42,
  address: "16 Warwick Street Airfield Benoni",
  phone: "+27 79 415 7439",
  email: "seandylan1982@outlook.com",
};

person.club = "Liverpool FC";
console.log(person);

console.log(person.name, person.surname, person.age, person.address, person.phone, person.email, person.club);

const people = [{
  id: 1,
    name: "sean",
    surname: "patterson",
    age: 42,
    address: "16 Warwick Street Airfield Benoni",
    phone: "+27 79 415 7439",
    email: "seandylan1982@outlook.com",
},
{
  id: 2,
    name: "john",
    surname: "smith",
    age: 72,
    address: "26 Warwick Street Airfield Benoni",
    phone: "+27 82 415 7439",
    email: "john1982@outlook.com",
}];

console.log(people[1].name);

const peopleObjects = {
  id1: {
    name: "sean",
    surname: "patterson",
    age: 42,
    address: "16 Warwick Street Airfield Benoni",
    phone: "+27 79 415 7439",
    email: "seandylan1982@outlook.com",
  },
  id2: {
    name: "john",
    surname: "smith",
    age: 72,
    address: "26 Warwick Street Airfield Benoni",
    phone: "+27 82 415 7439",
    email: "john1982@outlook.com",
  }
};

console.log(peopleObjects.id1.name, peopleObjects.id1.surname, peopleObjects.id1.age);