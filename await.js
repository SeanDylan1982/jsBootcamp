// function getJoke() {
//   return axios.get('https://icanhazdadjoke.com')
// };

// getJoke().then(res => {
//   document.body.innerHTML = res.data;
// });

// async function getJoke() {
//   const jokeData = await axios.get('https://icanhazdadjoke.com')
//   document.body.innerHTML = jokeData.data;
// }
// getJoke().catch(err => {
//   document.body.innerHTML = `Error: ${err}`;
// })

async function getJoke() {
  try {
    const jokeData = await axios.get('https://icanhazdadjoke.com')
    document.body.innerHTML = jokeData.data;
  } catch(err) {
    document.body.innerHTML = err;
  }
}
getJoke()