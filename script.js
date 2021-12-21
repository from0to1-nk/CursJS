'use strict'
let numberOfFilms = +prompt('сколько фильмов вы уже посмотрели', '');
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
}



for (let i = 0; i < 2; i++) {
    let a = prompt('Один из последних просмотренных фильмов', ''),
        b = prompt('На сколько вы его оцените', '');

    if (a != null && a.length < 50 & a != '' && b != null && b.length < 50 && b != '') {
        personalMovieDB.movies[a] = b;
        console.log('done')
    } else {
        console.log('error');
        i--;
    }


}
// switch (numberOfFilms) {
//     case (numberOfFilms < 10):
//         alert('Просмотрено довольно мало фильмов')
//         break;
//     case (numberOfFilms >= 10 && numberOfFilms <= 30):
//         alert('Вы классический зритель')
//         break;
//     case (numberOfFilms > 30):
//         alert('Вы киноман')
//         break;

//     default:
//         alert('произошла ошибка')

//         break;
// }

if (numberOfFilms < 10) {
    alert('Просмотрено довольно мало фильмов')
} else if (numberOfFilms >= 10 && numberOfFilms <= 30) {
    alert('Вы классический зритель')
} else if (numberOfFilms > 30) {
    alert('Вы киноман')
} else {
    alert('произошла ошибка')
}