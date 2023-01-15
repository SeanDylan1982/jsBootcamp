const getData = () => {
  const data = axios.get('https://icanhazdadjoke.com')
    .then(data => {
      document.body.innerHTML = data.data;
      console.log(data);
    })
  console.log(data)
}
getData();

async function getAsyncData() {
  const asyncData = axios.get('https://icanhazdadjoke.com')
  console.log(asyncData)
  return asyncData;
}
getAsyncData().then((val) => {
  document.body.innerHTML = val.data;
  console.log(val);
}).catch((err)=>{
  throw new Error("Async error!", err)
})

function greet() {
  return "hello";
}
greet();

async function greet() {
  return "hello";
}
greet().then((val)=>{
  document.body.innerHTML = val;
  console.log("Promise resolved with: ", val);
});

async function add(x,y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    document.body.innerHTML += new Error("X and Y must both be numbers");
    throw Error("X and Y must both be numbers");
  }
  document.body.innerHTML = x + y;
  return x + y;
}

function add(x,y) {
  return new Promise((resolve,reject)=>{
    if (typeof x !== 'number' || typeof y !== 'number') {
      reject("Error: X and Y must both be numbers");
    }
    document.body.innerHTML = x + y;
    resolve(x + y);
  })
}

add(6,7).then(val =>{
  document.body.innerHTML = val;
  console.log("Promise resolved with: ", val);
}).catch(err => {
  document.body.innerHTML = err;
  console.log("Promise rejected with: ", err);
})