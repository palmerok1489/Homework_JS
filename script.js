'use strict';


let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
  count: ['numberOfFilms'],
  movies: {},
  actors: {},
  genres: [],
  privat: false
};


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

if (personalMovieDB.count < 10) {
  console.log ('Просмотренно довольно много фильмов');
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
  console.log ('Вы класический зритель');
} else if (personalMovieDB.count >= 30 ) {
  console.log ('Да вы киоман!');
} else {
  console.log ('Произошла ошибка');
}

console.log (personalMovieDB);
