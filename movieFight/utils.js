const debounce = (func, delay=1000) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay)
  }
}

const movieTemplate = (movieDetail) => {
  const dollars = parseInt(movieDetail.BoxOffice.replace(/\$/g, "").replace(/,/g, ""));
  const metascore = parseInt(movieDetail.Metascore);
  const imdbRating = parseFloat(movieDetail.imdbRating);
  const imdbVotes = parseInt(movieDetail.imdbVotes.replace(/,/g, ''));
  const awards = movieDetail.Awards.split(' ').reduce((prev, word) => {
    const value = parseInt(word);
    if (isNaN(value)) {
      return prev;
    } else {
      return prev + value;
    }
  }, 0);
  
  return `
    <article class="media">
      <figure class="media-left">
        <p class="image">
          <img src="${movieDetail.Poster}" alt="" />
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <h1>${movieDetail.Title} (${movieDetail.Year})</h1>
          <h4>${movieDetail.Genre}</h4>
          <p>${movieDetail.Plot}</p>
        </div>
      </div>
    </article>
    <article data-value=${awards} class="notification is-primary">
      <p class="subtitle">Awards</p>
      <p class="title">${movieDetail.Awards}</p>
    </article>
    <article data-value=${dollars} class="notification is-primary">
      <p class="subtitle">Box Office Earnings</p>
      <p class="title">${movieDetail.BoxOffice}</p>
    </article>
    <article data-value=${metascore} class="notification is-primary">
      <p class="subtitle">Metascore</p>
      <p class="title">${movieDetail.Metascore}</p>
    </article>
    <article data-value=${imdbRating} class="notification is-primary">
      <p class="subtitle">IMDB Rating</p>
      <p class="title">${movieDetail.imdbRating}</p>
    </article>
    <article data-value=${imdbVotes} class="notification is-primary">
      <p class="subtitle">IMDB Votes</p>
      <p class="title">${movieDetail.imdbVotes}</p>
    </article>
    <div class="content">
      <h1 style="text-decoration: underline;">Extra info</h1>
    </div>
    <article class="notification">
      <p class="subtitle">Cast</p>
      <p class="title">${movieDetail.Actors}</p>
    </article>
    <article class="notification">
      <p class="subtitle">Director</p>
      <p class="title">${movieDetail.Director}</p>
    </article>
    <article class="notification">
      <p class="subtitle">Writer</p>
      <p class="title">${movieDetail.Writer}</p>
    </article>
    <article class="notification">
      <p class="subtitle">Runtime</p>
      <p class="title">${movieDetail.Runtime}</p>
    </article>
    <article class="notification">
      <p class="subtitle">Rated</p>
      <p class="title">${movieDetail.Rated}</p>
    </article>
    <article class="notification">
      <p class="subtitle">Language</p>
      <p class="title">${movieDetail.Language}</p>
    </article>
    <article class="notification">
      <p class="subtitle">Country</p>
      <p class="title">${movieDetail.Country}</p>
    </article>
  `;
};
