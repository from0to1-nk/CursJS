'use strict'
let numberOfFilms
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}


function start() {
    numberOfFilms = +prompt('сколько фильмов вы уже посмотрели', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('сколько фильмов вы уже посмотрели', '');
    }
}
//start()

function rememberMyFilms() {
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
}
//rememberMyFilms()


function detectPersonalLevel() {
    if (numberOfFilms < 10) {
        alert('Просмотрено довольно мало фильмов')
    } else if (numberOfFilms >= 10 && numberOfFilms <= 30) {
        alert('Вы классический зритель')
    } else if (numberOfFilms > 30) {
        alert('Вы киноман')
    } else {
        alert('произошла ошибка')
    }
}
//detectPersonalLevel()

let genres

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером, ${i}`);
    }
}

//writeYourGenres()

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB)
    }
}
//showMyDB(personalMovieDB.privat)


const numbers = [1, 2, 3, 4, 5]


numbers.forEach((item, i, arr) => {
    console.log(`${i}:${item} in array ${arr}`)
})
const str = [22, 1, 33, 7, 5, 100, 54]

function compareNum(a, b) {
    return a - b
}
console.log(str.sort(compareNum))