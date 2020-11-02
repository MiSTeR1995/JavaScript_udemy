"use strict";

const category = 'toys';

console.log('https://someurl.com/' + category + '/' + '4'); // так делали раньше

// сейчас используют интерполяцию, с помощью кавычек-бэктиков (``)
console.log(`https://someurl.com/${category}/5`); // использование интерполяции

const user = 'Alex';
alert(`Hello, ${user}`);
