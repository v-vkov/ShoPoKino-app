const config = {
    TMDB_API_KEY: "5eac1aff03e860a0ff4bad1bca17b1d0"
};

const xhr = new XMLHttpRequest();

async function fetchMovies() { 
    
    // LexicalEnvironment = { config.TMDB_API_KEY : "5eac1aff03e860a0ff4bad1bca17b1d0", randomPage: undefined, res : undefined} 

    const randomPage = Math.floor(Math.random()*386)+1;
    const res = await new Promise(function (resolve, reject) {
        const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${config.TMDB_API_KEY}&language=en-US&page=${randomPage}`;

        xhr.open("GET", url);
        xhr.responseType = 'json';
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
    });
    // LexicalEnvironment = { config.TMDB_API_KEY : "5eac1aff03e860a0ff4bad1bca17b1d0", randomPage: {someRandom}, res : {objectOfResults}} 
    return res;
}


export default fetchMovies;