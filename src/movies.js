// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray){
    return moviesArray.map(movie=> {
        return movie.director;
    });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

let howManyMovies = moviesArray => {
    let filteredMoviesArray = moviesArray.filter(movie => {
        return movie.director.toUpperCase () === 'STEVEN SPIELBERG' & 
        movie.genre.includes('Drama');
    });

    return filteredMoviesArray.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arrOfMovies) {
    if (arrOfMovies.length === 0) return 0;
  
    let avgValue = 0;
  
    avgValue = arrOfMovies.reduce(function(acc, movie){
      if(movie.rate === "" || movie.rate === undefined) {
        return acc;
      } else {
        return parseFloat(acc + movie.rate);
      } 
    }, 0)
  
    avgValue = avgValue / arrOfMovies.length;
    avgValue = parseFloat(avgValue.toFixed(2));
  
    return avgValue;
  }


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arrOfMovies) {
    let arrayOfDramaMovie = [];

    arrayOfDramaMovie = arrOfMovies.filter(movie => {return movie.genre.includes('Drama')})

    return ratesAverage(arrayOfDramaMovie);
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear (arrOfmovies) {
    let arrOfSortMovie = [];
    arrOfSortMovie = arrOfmovies.sort((a,b)=> {
        if (a.year < b.year) return -1;
        if (a.year > b.year) return 1;
        return a.title.localeCompare(b.title);
    });
    return arrOfSortMovie;
}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

let orderAlphabetically = arrOfmovies => {
    let movieTitles = arrOfmovies.map(movie => movie.title);
    movieTitles.sort((movie1, movie2) => {
        return movie1.localeCompare(movie2);
     });
    return movieTitles.slice(0,20);
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes (moviesArray) {
    let movies = JSON.parse(JSON.stringify(moviesArray));

    movies.forEach(movie => {
        let hoursToMinuts = 0;
        let minutes = 0;

        if (movie.duration.includes('h')) {
            let indexH= movie.duration.indexOf('h');
            let hours = movie.duration.slice(indexH -1, indexH);
            hoursToMinuts += parseInt(hours) * 60;
        }

        if (movie.duration.includes('min')) {
            let indexMin = movie.duration.indexOf('min');
            let min = movie.duration.slice(indexMin -2, indexMin);
            minutes += parseInt(min);
        }
        
        let totalTime = hoursToMinuts + minutes;
        movie.duration= totalTime;
    
    });

    return movies;
}



// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
