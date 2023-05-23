const API_URL_MOVIE = "https://api.themoviedb.org/3/discover/movie?api_key=b6fba48a3e880a0d9d193d0871f21845&sort_by=popularity.desc&include_adult=false&page=";
const API_URL_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=b6fba48a3e880a0d9d193d0871f21845&include_adult=false&query=";
const API_URL_MODAL = "https://api.themoviedb.org/3/movie/";
const moviesPerPage = 20;
let currentPage = 1;
let moviesData;
let genresData; 

getMovies(API_URL_MOVIE);

async function getMovies(urlMovies) {
  const moviesResp = await fetch(urlMovies);
  moviesData = await moviesResp.json();
  showMovies(moviesData.results.slice(0, moviesPerPage));
  currentPage = 1;

  await getGenres(); 
}

async function getGenres() {
  const urlGenres = "https://api.themoviedb.org/3/genre/movie/list?api_key=b6fba48a3e880a0d9d193d0871f21845";
  const genresResp = await fetch(urlGenres);
  genresData = await genresResp.json();

  const genreList = document.getElementById("genreList");
  genreList.innerHTML = ""; 

  const genreNames = genresData.genres.map(genre => genre.name);

  genreNames.forEach(genreName => {
    const genreLink = document.createElement("a");
    genreLink.textContent = genreName;
    genreLink.href = "#";
    genreLink.addEventListener("click", () => filterMoviesByGenre(genreName));

    genreList.appendChild(genreLink);
  });
}

function filterMoviesByGenre(genre, genresData) {
  const filteredMovies = moviesData.results.filter(movie => {
    const genreIds = movie.genre_ids || [];
    return genreIds.includes(getGenreIdByName(genre));
  });

  if (filteredMovies.length === 0) {
    moviesContainer.innerHTML = "<p>No movie found with this genre</p>";
  } else {
    moviesContainer.innerHTML = "";
    showMovies(filteredMovies);
  }
}


function getGenreIdByName(genreName) {
  const genre = genresData.genres.find(genre => genre.name === genreName);
  return genre ? genre.id : null;
}
function getClassRate(rating) {
  if (rating >= 7) {
    return "green";
  } else if (rating > 5) {
    return "orange";
  } else {
    return "red";
  }
}

async function showMovies(movies) {
  const moviesEl = document.querySelector(".movies");

  for (const movie of movies) {
    try {
      const genreNames = await getMovieGenres(movie.genre_ids);
      const posterPath = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'error.jpg';


      const movieEl = document.createElement("div");
      movieEl.classList.add("movie");
      movieEl.innerHTML = `
        <div class="movie__cover-inner">
          <img src="${posterPath}" class="movie__cover" />
          <div class="movie__cover--darkened"></div>
        </div>
        <div class="movie__info">
          ${movie.title ? `<div class="movie__title">${movie.title}</div>` : ''}
          
          ${movie.vote_average !== null && movie.vote_average !== undefined && movie.vote_average > 0 ? `<div class="movie__average movie__average--${getClassRate(movie.vote_average)}">${Math.round(movie.vote_average)}</div>` : ''}
        </div>
      `;
      movieEl.addEventListener("click", () => openModal(movie.id));
      moviesEl.appendChild(movieEl);
    } catch (error) {
      console.error(`Failed to load data for movie ID ${movie.id}:`, error);
    }
  }
}

async function getMovieGenres(genreIds) {
  const urlGenres = "https://api.themoviedb.org/3/genre/movie/list?api_key=b6fba48a3e880a0d9d193d0871f21845";
  const genresResp = await fetch(urlGenres);
  const genresData = await genresResp.json();

  return (genreIds || []).map((genreId) => {
    const genre = genresData.genres.find((genre) => genre.id === genreId);
    return genre ? genre.name : "";
  });
}

const form = document.querySelector("form");
const search = document.querySelector(".header__search");
const moviesContainer = document.querySelector(".movies");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const apiSearchUrl = `${API_URL_SEARCH}${search.value}`;
  if (search.value) {
    moviesContainer.innerHTML = "";
    getMovies(apiSearchUrl);
    search.value = "";
  }
});

const modalEL = document.querySelector(".modal");

async function openModal(id) {
  modalEL.classList.add("modal--show");

  const movieUrl = `${API_URL_MODAL}${id}?api_key=b6fba48a3e880a0d9d193d0871f21845`;
  const movieResp = await fetch(movieUrl);
  const movieData = await movieResp.json();

  const backdropPath = movieData.backdrop_path ? `https://image.tmdb.org/t/p/w500${movieData.backdrop_path}` : 'error.jpg';
  const releaseYear = movieData.release_date ? movieData.release_date.slice(0, 4) : "Unavailable information on the server";
  const genres = await getMovieGenres(movieData.genres.map(genre => genre.id));
  const runtime = movieData.runtime ? `${movieData.runtime} min` : "Unavailable information on the server";
  const overview = movieData.overview || "Unavailable information on the server";
  const popularity= movieData.popularity ||"Unavailable information on the server";

  modalEL.innerHTML = `
    <div class="modal__card">
      <img class="modal__movie-backdrop" src="${backdropPath}" alt="${movieData.title}">
      <h2>
        <span class="modal__movie-title">${movieData.title}</span>
        <span class="modal__movie-release-year">${releaseYear}</span>
      </h2>
      <ul class="modal__movie-info">
        <li class="modal__movie-genre">Genres: ${genres.join(", ")}</li>
        <li class="modal__movie-popularity">Popularity: ${popularity}</li>
        <li class="modal__movie-runtime">Length: ${runtime}</li>
        <li class="modal__movie-overview">Description: ${overview}</li>
      </ul>
      <button type="button" class="modal__button-close" id="loadMoreButton">Закрити</button>
    </div>
  `;

  const btnClose = document.querySelector(".modal__button-close");
  btnClose.addEventListener("click", () => closeModal());
}


function closeModal() {
  modalEL.classList.remove("modal--show");
}

window.addEventListener("click", (event) => {
  if (event.target === modalEL) {
    closeModal();
  }
});


//Пагінація
// const loadMoreButton = document.getElementById("loadMoreButton");
// loadMoreButton.addEventListener("click", async () => {
//   const start = currentPage * moviesPerPage;
//   const end = start + moviesPerPage;
//   const nextMovies = moviesData.results.slice(start, end);
//   await showMovies(nextMovies); // Очікуємо на показ наступних фільмів
//   currentPage++; // Збільшуємо поточну сторінку
//   if (end >= moviesData.results.length) {
//     loadMoreButton.style.display = "none"; // Приховуємо кнопку, якщо показані всі фільми
//   }
// });