// const pokemon1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
// const pokemon2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
// const pokemon3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');

// async function get3Pokemon() {
//   const pokemon_1 = await pokemon1
//   const pokemon_2 = await pokemon2
//   const pokemon_3 = await pokemon3
//   document.body.innerHTML = `${pokemon_1.data.name} <img src="${pokemon_1.data.sprites.front_default}" alt="">`;
//   document.body.innerHTML += `${pokemon_2.data.name} <img src="${pokemon_2.data.sprites.front_default}" alt="">`;
//   document.body.innerHTML += `${pokemon_3.data.name} <img src="${pokemon_3.data.sprites.front_default}" alt="">`;
//   console.log(pokemon1);
//   console.log(pokemon2);
//   console.log(pokemon3);
// }
// get3Pokemon();


// async function get3Pokemon() {
//   const pokemon1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
//   const pokemon2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
//   const pokemon3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
//   const response1 = await pokemon1
//   const response2 = await pokemon2
//   const response3 = await pokemon3
//   document.body.innerHTML = `${response1.data.name} <img src="${response1.data.sprites.front_default}" alt="">`;
//   document.body.innerHTML += `${response2.data.name} <img src="${response2.data.sprites.front_default}" alt="">`;
//   document.body.innerHTML += `${response3.data.name} <img src="${response3.data.sprites.front_default}" alt="">`;
// }
// get3Pokemon();


function changeBodyColor(color,delay){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay)
  })
}
changeBodyColor('teal', 1000);

async function get3Pokemon() {
  const pokemon1 = axios.get('https://pokeapi.co/api/v2/pokemon/1')
  const pokemon2 = axios.get('https://pokeapi.co/api/v2/pokemon/2')
  const pokemon3 = axios.get('https://pokeapi.co/api/v2/pokemon/3')
  const results = await Promise.all([pokemon1,pokemon2,pokemon3])
  printPokemon(results);
}
function printPokemon(results) {
  for (let pokemon of results) {
    document.body.innerHTML += " | " + pokemon.data.name + " | ";
    document.body.innerHTML += `<img src="${pokemon.data.sprites.front_default}">`;
  }
}

get3Pokemon();