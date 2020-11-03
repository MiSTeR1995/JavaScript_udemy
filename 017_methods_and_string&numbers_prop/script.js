"use strict";
// свойства и методы обхектов можно найти в документации
// а также в консоли браузера ввести console.dir(object)

const fruit = 'Some fruit';

console.log(fruit.indexOf("fruit")); // 5 - находит начало подстроки

const logg = 'Hello world';

console.log(logg.slice(6, 11)); // вырезает подстроку с указанных позиций, конечный символ не включается

console.log(logg.substr(6,5)); // вырезает уже количество указанное колиечство символов

const num = 12.2;
console.log(Math.round(num)); // 12

const test = "12.2px";
console.log(parseInt(test)); // 12
console.log(parseFloat(test)); // 12.2
