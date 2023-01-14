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

fetch('https://swapi.dev/api/planets/')
.then((response) => {
  console.log("API Request Status: ", response.status);
  if (!response.ok) {
    throw new Error(`Code ${response.status}`);
    return;
  } else {
    response.json().then((data) => {
      for (let planet of data.results) {
        apiResponse.innerHTML += " \n " + planet.name + " \n ";
        console.log("Planet: ", planet.name);
      }
    });
  }
})
.catch((err) => {
  console.log(err);
})
