
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=513b33ec2f23b9aae39d8ddd85962719&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
//query leave open quote to dynamicly place search results in
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?&api_key=513b33ec2f23b9aae39d8ddd85962719&query="';

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

//get initial movies
getMovies(API_URL);

async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();

    showMovies(data.results);
}

function showMovies(movies) {
  //clears previous results that were rendered
    main.innerHTML = '';

    movies.forEach((movie) => {
      //destructure data out of object 
        //allows us to pull info out of object
        const { title, poster_path, vote_average, overview } = movie;

        //constructs div where movie data will be displayed
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');

        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
            <h3>Overview</h3>
               ${overview}
            </div>
        `
        main.appendChild(movieEl);
    });
}

//based on rating this adds what color will be displayed for rating
function getClassByRate(vote) {
    if (vote >= 8) {
        return 'green';
    } else if(vote >= 5) {
        return 'orange';
    } else {
        return 'red';
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;
    //checks to see if search term exist & not equal to anything
    if (searchTerm && searchTerm !== '') {
        //concat url with search value
        getMovies(SEARCH_API + searchTerm)
        //clears search input field
        search.value = '';
    } else {
        //if no value reload page
        window.location.reload();
    }

})
