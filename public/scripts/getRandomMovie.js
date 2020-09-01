import fetchMovies from './fetchMovies.js';

const imgSrc = "https://image.tmdb.org/t/p/original/";

async function getRandomMovie () {
    
    const movies = await fetchMovies();

    const resCount = movies.results.length-1;
    const randomCount = Math.floor(Math.random()*resCount);

    const randomMovie = movies.results[randomCount].title;
    const yearOfMovie = movies.results[randomCount].release_date.split("").slice(0,4).join("");
    const voteAverage = movies.results[randomCount].vote_average;
    const overview = movies.results[randomCount].overview;
    const movieImg = imgSrc.concat(movies.results[randomCount].poster_path);

    const randomResult = {
        randomMovie,
        yearOfMovie, 
        voteAverage,
        overview,
        movieImg
    }
    
    return randomResult;
}

export default getRandomMovie;