'use strict';

let personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
  
    while (personalMovieDB =='' || personalMovieDB == null || isNaN(personalMovieDB)) {
      personalMovieDB = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },
  rememberOfFilms: function() {
    for(let i = 0; i < 2; i++) {
      let a = prompt("Один из последних просмотренных фильмов", '');
      let b = prompt ('На сколько оцените его?','');
      
      if (a != null && b != null && a != '' && b != "" && a.length < 50){
        personalMovieDB.movies[a] = b;
      } else {
        i--;
      }
      personalMovieDB.movies[a] = b;
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log ('Просмотренно довольно много фильмов');
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
      console.log ('Вы класический зритель');
    } else if (personalMovieDB.count >= 30 ) {
      console.log ('Да вы киноман!');
    } else {
      console.log ('Произошла ошибка');
    }
  },
  showMyDb: function(hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function() {
    if(personalMovieDB.privat) {
      personalMovieDB.privat = false; 
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYourGenres: function() {
    for(let i = 1; i <= 3; i++) {
      let genree = prompt(`Ваш любимый жанр фильма под номером ${i}`);
      if (genree === '' || genree == null) {
        console.log('Вы ввели некорректные данные');
        i--;
      } else {
        personalMovieDB.genres[i-1] = genree;
      }
    }

    personalMovieDB.genres.forEach((item,i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`)
    })
  }
};
