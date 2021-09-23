const numberOfFilm = +prompt ('Сколько фильмов вы смотрели?');

const personalMovieDB = {
    count: numberOfFilm,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt('Один из просмотренных фильмов?',''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из просмотренных фильмов?',''),
      d = prompt('На сколько оцените его?', '');

      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;

      console.log(personalMovieDB);
