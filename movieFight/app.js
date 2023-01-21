const autocompleteConfig = {
  renderOption(movie) {
    const imgSrc = movie.Poster === 'N/A' ? '' : movie.Poster;
    return `
      <img src="${imgSrc}" alt="" />
      ${movie.Title} <strong>(${movie.Year})</strong>
      ${movie.Type.toUpperCase()}
    `;
  },
  inputValue(movie) {
    return movie.Title;
  },
  async fetchData(searchTerm) {
    const response = await axios.get("http://www.omdbapi.com/", {
      params: {
        apikey: "afb8ee0",
        s: searchTerm
      }
    });

    if (response.data.Error) {
      return [];
    }
    return response.data.Search;
  }
}

let leftMovie;
let rightMovie;

onMovieSelect = async (movie,summaryElement,side) => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: "afb8ee0",
      i: movie.imdbID
    }
  });
  // console.log(response.data);
  summaryElement.innerHTML = movieTemplate(response.data);

  if (side === 'left') {
    leftMovie = response.data;
  } else if (side === 'right') {
    rightMovie = response.data;
  }
  if (leftMovie && rightMovie) {
    runComparison();
  }

};
const runComparison = () => {
  const leftSideStats = document.querySelectorAll('#left-summary .notification');
  const rightSideStats = document.querySelectorAll('#right-summary .notification');

  leftSideStats.forEach((leftStat, index) => {
    const rightStat = rightSideStats[index];
    const leftSideValue = leftStat.dataset.value;
    const rightSideValue = rightStat.dataset.value;

    if (rightSideValue > leftSideValue) {
      leftStat.classList.remove("is-primary");
      leftStat.classList.add("is-danger");
    } else if (leftSideValue > rightSideValue) {
      rightStat.classList.remove("is-primary");
      rightStat.classList.add("is-danger");
    }
  });

}
createAutoComplete({
  ...autocompleteConfig,
  root: document.querySelector("#left-autocomplete"),
  onOptionSelect(movie) {
    document.querySelector(".tutorial").classList.add('is-hidden');
    onMovieSelect(movie,document.querySelector("#left-summary"), 'left');
  }
});
createAutoComplete({
  ...autocompleteConfig,
  root: document.querySelector("#right-autocomplete"),
  onOptionSelect(movie) {
    document.querySelector(".tutorial").classList.add('is-hidden');
    onMovieSelect(movie,document.querySelector("#right-summary"), 'right');
  }
});
