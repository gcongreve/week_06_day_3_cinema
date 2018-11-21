const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function(){
  const titles = this.films.map((film) => {
    const filmTitle = film.title;
    return filmTitle;
  })
  return titles;
}

Cinema.prototype.findByTitle = function(title){
  const result = this.films.filter((film) => {
    if (film.title === title) {
      return film
    }
  });
  return result;
};

// Cinema.prototype.findByGenre = function(genre){
//   const result = this.films.filter((film) => {
//     if (film.genre === genre) {
//       return film
//     }
//   });
//   return result;
// };

Cinema.prototype.filmYears = function(){
  const years = this.films.map((film) => {
    const filmYear = film.year;
    return filmYear;
  })
  return years;
};

Cinema.prototype.filmFromYear = function(year){
  const filmYears = this.filmYears();
  return filmYears.includes(year);
};

Cinema.prototype.filmLength = function(duration){
  const longFilms = this.films.filter((film) => {
    if (film.length >= duration){
      return film;
    }
  });
  return this.films.length === longFilms.length;
};

Cinema.prototype.filmTimes = function(){
  const times = this.films.map((film) => {
    const filmTime = film.length;
    return filmTime;
  })
  return times;
};

// Cinema.prototype.totalTime = function(){
//   let total = 0;
//    for (film){}
// };


Cinema.prototype.totalTime = function(){
    const total = this.filmTimes().reduce((accum, time) => {
      return accum + time;
    }, 0);
    return total;
}

Cinema.prototype.findByProperty = function(property, value){
  const result = this.films.filter((film) => {
    if (film.property === value) {
      return film;
    }
});
return result;
};




module.exports = Cinema;
