"use strict";

console.log('arr' + ' - object'); // + как конкатенация строк
console.log( 4 + ' - object'); // 4 - object
console.log( 4 + +'5'); // + перед строкой это унарный плюс

let incr = 10,
    decr = 10;

// incr++; // оператор инкремента в постфиксной форме
// decr--; // оператор декремента в постфиксной форме

console.log(++incr); // в префиксной форме отобразится новое значение сразу
console.log(--decr);
console.log(incr);
