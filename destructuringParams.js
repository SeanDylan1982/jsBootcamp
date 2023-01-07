const results = [
  {
    first: 'Eliud',
    last: 'Kipchoge',
    country: 'Kenya'
  },
  {
    first: 'Feyisa',
    last: 'Lelisa',
    country: 'Ethiopia'
  },
  {
    first: 'Galen',
    last: 'Rupp',
    country: 'U.S.A.'
  }
];

const [,{country}] = results;
console.log(country);
const [{first},{Country},{last}] = results;
console.log(first,last,country);

const fullName = ({first, last, country}) => {
  console.log(`${first} ${last} ${country}`);
  return `${first} ${last} ${country}`;
}
const runner = {
  first: 'Sean',
  last: 'Patterson',
  country: 'RSA'
}
fullName(runner)

function print(person) {
  const {first,last,country} = person;
  console.log(`${first} ${last}, ${country}`);
}
print(runner)

function print({first,last,country}) {
  
  console.log(`${first} ${last}, ${country}`);
}
print(runner)

const response = [
  'HTTP/1.1',
  '200 OK',
  'Application/JSON'
];

function parseResponse([protocol,statusCode,contentType]){
  console.log(`Protocol : ${protocol}`);
  console.log(`Status : ${statusCode}`);
  console.log(`Content Type : ${contentType}`);
}
parseResponse(response);