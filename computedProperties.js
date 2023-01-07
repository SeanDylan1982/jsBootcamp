const role = 'host';
const person = 'Jools Holland';
const role2 = 'director';
const person2 = 'James Cameron';

// const team = {};
// team[role] = person;
// team[role2] = person2;

const user = 'Jools';

const userRoles = {
  [user]: 'Admin'
}
console.log(userRoles);


const team = {
  [role]: person,
  [role2]: person2,
  [1+6+9]: 'sixteen'
}
console.log(team);

// function addProp(obj,k,v) {
//   const copy = {...obj};
//   copy[k] = v;
//   return copy;
// }

const addProp = (obj,k,v) => {
  return {...obj,[k]: v}
}
const result = addProp(team, "happy", ":)");
console.log(result);