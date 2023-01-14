const dadJoke = axios.get('https://icanhazdadjoke.com');

console.log(dadJoke);

dadJoke
  .then((dadJoke) => {
    document.body.innerHTML = `${dadJoke.data}`;
    return dadJoke;
  })
  .catch((err) => {
    console.log(`Error: \n ${err.code} \n ${err.message}`);
  })

dadJoke
  .then(({data}) => {
    document.body.innerHTML = `${data}`;
  })