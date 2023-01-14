// XML Notation
{/* <name>
  <first>Todd</first>
  <last>Smith</last>
</name>
<email>todd@gmail.com</email> */}

{
  name: {
    first: 'Todd'
    last: 'Smith'
  }
  email: 'todd@gmail.com'
}

const data = {
  "squadName": "Super Hero Squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super Tower",
  "active": true,
  "members": [
    "molecule Man",
    "Madame Uppercut",
    "Eternal Flame"
  ]
}

const starships9 = {
	"name": "Death Star",
	"model": "DS-1 Orbital Battle Station",
	"manufacturer": "Imperial Department of Military Research, Sienar Fleet Systems",
	"cost_in_credits": "1000000000000",
	"length": "120000",
	"max_atmosphering_speed": "n/a",
	"crew": "342,953",
	"passengers": "843,342",
	"cargo_capacity": "1000000000000",
	"consumables": "3 years",
	"hyperdrive_rating": "4.0",
	"MGLT": "10",
	"starship_class": "Deep Space Mobile Battlestation",
	"pilots": [],
	"films": [
		"https://swapi.dev/api/films/1/"
	],
	"created": "2014-12-10T16:36:50.509000Z",
	"edited": "2014-12-20T21:26:24.783000Z",
	"url": "https://swapi.dev/api/starships/9/"
};


console.log(JSON.parse(JSON.stringify(data)));
console.log(JSON.parse(JSON.stringify(starships9)));

const myReq = new XMLHttpRequest();
const box = document.querySelector("#dadjoke");

myReq.onload = function() {
  const data = JSON.parse(this.responseText);
  box.innerHTML = data.joke;
  console.log(data);
};
myReq.onerror = function(err) {
  console.log("Error: ", err);
};
myReq.open('get', 'https://icanhazdadjoke.com/', true);
myReq.setRequestHeader('Accept', "application/json");
myReq.send();

const firstRequest = new XMLHttpRequest();
firstRequest.addEventListener('load', function() {
  console.log("loaded");
  const apiResponse = document.querySelector("#apiResponse");
  const data = JSON.parse(this.responseText);
  const filmURL = data.results[0].films[0];
  const filmRequest = new XMLHttpRequest();
  filmRequest.addEventListener("load", function() {
    const filmData = JSON.parse(this.responseText);
    console.log(filmData);
  })
  filmRequest.addEventListener('error', function(e) {
    console.log("Error", e);
  })
  filmRequest.open("GET", filmURL, true);
  filmRequest.setRequestHeader("Accept", "application/json");
  filmRequest.send();
  console.log("Films: ", filmURL);
  apiResponse.innerHTML = JSON.parse(JSON.stringify(data.results));
  console.log(JSON.parse(JSON.stringify(data)));
  for (let planet of data.results) {
    apiResponse.innerHTML = JSON.parse(JSON.stringify(data.results[planet]));
    console.log(planet.name);
  }
  console.log(data);
})
firstRequest.addEventListener('error', () => {
  console.log("Error");
})
firstRequest.open('GET', 'https://swapi.dev/api/planets/');
firstRequest.setRequestHeader('Accept', "application/json");
firstRequest.send();
console.log("sent");
