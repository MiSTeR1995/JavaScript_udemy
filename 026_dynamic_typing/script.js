"use strict";
// динамическая типизация - возможность одного типа данных превращаться в другое

// To string
// 1) устаревший
console.log(typeof(String(null))); //string
console.log(typeof(String(4))); //string

// 2) Конкатенация
console.log(typeof (5 + '')); //string

const num = 5;
console.log("https://vk.com/catalog/" + num);
const fontSize = 26 + 'px';

// to Number
console.log(typeof (Number('4'))); // Number

// 2) Унарный плюс
console.log(typeof (+'4')); // Number

// 3)
console.log(parseInt("15px",10)); // 15, 2 аргумент - система исчисления

// to boolean

// всегда false: 0, '', null, undefined, NaN, все остальное true

// можно использовать как различные переключатели
let switcher = null;
if (switcher) {
    console.log('Working...');
}
// 2) бесполезный
console.log(Boolean('4'));

// 3) // Boolean
console.log(typeof(!!"44444")); // Boolean
console.log(!!"44444"); // Boolean
