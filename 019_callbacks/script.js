"use strict";
// callback - функция, которая должна быть выполнена, после того, как другая
// функция завершила свое выполнение


// второй аргумент - функция, которую вызовем после выпонления первой
function learnJS(lang, callback){
    console.log(`Я учу: ${lang}`);
    callback();
}


function done() {
    console.log('Я прошел этот урок!');
}
// передадим callback в качестве анонимной функции.
learnJS('JavaScript', function() {
    console.log('Я прошел этот урок!');
});

// в качетсве callback обычная функция
learnJS('JavaScript',done); // done без (), т.к мы ее только передаем, а не вызываем
