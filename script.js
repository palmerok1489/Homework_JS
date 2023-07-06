'use strict';

let numberOfFilms;

function start () {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms =='' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}

start();

let personalMovieDB = {
  count: ['numberOfFilms'],
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function rememberOfFilms() {
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
}

rememberOfFilms();

function detectPersonalLevel () {
  if (personalMovieDB.count < 10) {
    console.log ('Просмотренно довольно много фильмов');
  } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    console.log ('Вы класический зритель');
  } else if (personalMovieDB.count >= 30 ) {
    console.log ('Да вы киноман!');
  } else {
    console.log ('Произошла ошибка');
  }
}

detectPersonalLevel();

function showMyDb(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDb(personalMovieDB.privat);

function writeYourGenres () {
  for(let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр фильма под номером ${i}`);
  }
}
writeYourGenres ();
