const dadJoke = document.querySelector("#dadjoke");
const apiResponse = document.querySelector("#apiResponse");

fetch('https://icanhazdadjoke.com/', {
  headers: {
    Accept: "application/json",
  }
})
.then((res) => {
  if (res.status !== 200) {
    console.log("Error:", res.ststus);
    return;
  }
  res.json().then((data) => {
    dadJoke.innerHTML = data.joke;
    // console.log(data);
  });
})
.catch(function(err) {
  console.log("Error :", err);
})

const checkStatusAndParse = (res) => {
  if(!res.ok) throw new Error(`Error Status Code: ${res.status}`);
  return res.json();
}
const printPlanets = (data) => {
  console.log("10 planets");
  for (let planet of data.results) {
    apiResponse.innerHTML += ` | ${planet.name} | `;
    console.log(planet.name);
  }
  return Promise.resolve(data.next);
}
// const nextURL = (data) => {
//   const nextURL = data.next;
//   console.log(nextURL);
//   apiResponse.innerHTML += " | " + nextURL + " | ";
//   console.log("Film URL: ", nextURL);
//   return fetch(nextURL)
// }
// const next10 = (data) => {
//   console.log("10 more planets: ");
//   for (let planet of data.results) {
//     apiResponse.innerHTML += ` | ${planet.name} | `;
//     console.log(planet.name);
//   }
//   return Promise.resolve(data);
// }

const fetchNextPlanets = (url = 'https://swapi.dev/api/planets/') => {
  return fetch(url);
}

fetchNextPlanets()
  .then(checkStatusAndParse)
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(checkStatusAndParse)
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(checkStatusAndParse)
  .then(printPlanets)
  .catch((err) => {
    console.log(err);
  })

