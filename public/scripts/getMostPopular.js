import fetchMovies from './fetchMovies.js';

const imgSrc = "https://image.tmdb.org/t/p/original/";

async function getMostPopular(count) {

    // LexicalEnvironment = { imgSrc: "https://image.tmdb.org/t/p/original/" , movies: undefined, popularMovies: undefined} 

    try {

        const movies = await fetchMovies();
        const popularMovies = [];
    
        for (let i=1; i<= count; i++ ) {
            const topMovie = {
                topTittle : movies.results[i].title,
                topRate : movies.results[i].vote_average,
                topOverview : movies.results[i].overview,
                topMovieImg : imgSrc.concat(movies.results[i].poster_path)
                }
            
            popularMovies.push(topMovie);
        }
         // LexicalEnvironment = { imgSrc: "https://image.tmdb.org/t/p/original/" , movies: {objectOfMovies}, popularMovies: {arrayOfObjects}} 
        return popularMovies;
    }

    catch(err) {
        alert("Error! Try again, please!");
        console.log(err);
    }   

}


export default getMostPopular;



