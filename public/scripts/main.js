import getRandomMovie from './getRandomMovie.js';
import getMostPopular from './getMostPopular.js';

const countOfTopRated = 4;
const randomMovie = document.getElementById("randomMovie");
const randomMovieImg = document.getElementById("randomMovieImg");
const randomOverviewTittle = document.getElementById("randOverviewTittle");
const randomOverview = document.getElementById("randOverview");
const randomShowMore = document.getElementById("randomShowMore");


class Movie {
    constructor(tittle, overview, movieImg) {
        this.tittle = tittle;
        this.overview = overview;
        this.movieImg = movieImg;
    }
}

class TopMovie extends Movie {
    
    constructor (tittle, overview, movieImg, rating) {
        super(tittle, overview, movieImg);
        this.rating = rating;
    }

    todaysMovie() {
        console.log(`Hey, your choice today is ${this.tittle} with rating ${this.rating}!`)
    }
}

function User (name, favGenre) {
    this.name = name;
    this.favGenre = favGenre;
}

User.prototype.findFavGenre = function () {
    console.log(`Hey, ${this.name}! Your favourite genre is ${this.favGenre}.`)
}

document.getElementById("mainBtn").onclick = () => {
    

    getRandomMovie()
    .then(response => {
        randomMovie.innerHTML = `Try this one: <b>${response.randomMovie}</b> (${response.yearOfMovie}) - rating: ${response.voteAverage}`;
        randomMovieImg.innerHTML = `<img src="${response.movieImg}" alt="">`
        
        randomShowMore.onclick = () => {
            randomOverviewTittle.innerHTML = `More about... "${response.randomMovie}"`;
            randomOverview.innerHTML=`${response.overview}`;
        }

        let whatsToday =  new TopMovie(response.randomMovie, response.overview, response.movieImg, response.voteAverage);
        let user1 = new User("Guest", "drama");
        whatsToday.todaysMovie();
        user1.findFavGenre();

    })
    .catch(err => randomMovie.innerHTML="Oooops! Try again, please!");
}



    
getMostPopular(countOfTopRated).then(response => {

    // LexicalEnvironment = {countOfTopRaqted : 4} 
    for (let i=0; i<countOfTopRated; i++) {

        let topMovieImg = document.getElementById(`topImg${i+1}`);
        let topOverview = document.getElementById(`topOverview${i+1}`);
        let topShowMore = document.getElementById(`topShowMore${i+1}`);
        let topOverviewMore = document.getElementById(`topOverviewMore`);
        
        topMovieImg.innerHTML = `<img src="${response[i].topMovieImg}" alt="">`;
        topOverview.innerHTML=`${response[i].topOverview}`;
        topShowMore.onclick = () => {
            topOverviewTittle.innerHTML = `${response[i].topTittle}`;
            topOverviewMore.innerHTML=`${response[i].topOverview}`;
        }
    }

}).catch(err => alert("Something wrong with API:( Please, try to reload page!", err.message))




    
        







