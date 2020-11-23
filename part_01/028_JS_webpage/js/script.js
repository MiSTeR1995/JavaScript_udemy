'use strict';

// обращение к DOM идет через document.
// document работает только в браузере
// вместилище информации

// старые методы получения элементов
const box = document.getElementById('box'); // поиск по ID. ID только 1 на стр.

console.log(box); // div с ID box

// HTML коллекция элементов по тэгу, записывается в псевдомассив
const buttons = document.getElementsByTagName('button'); // не один элемент, а псевдомассив

console.log(buttons);
const button2 = document.getElementsByTagName('button')[1]; // только вторую
console.log(button2);
console.log(buttons[1]); // второй вариант

// даже если один элемент на странице, все равно будет передаваться HTML коллекция
// и нужно также получать доступ  к ним через индексы массива

const circles = document.getElementsByClassName('circle'); // без . только назв класса
console.log(circles); // HTML коллекция


// новые методы
// селектор поддерживает все варианты получения элементов.
// один большой плюс: возможность использования forEach
const hearts = document.querySelectorAll('.heart'); // помещаем css-селектор

console.log(hearts); // nodeList у которого есть метод forEach. Но он все равно псевдомассив

// получение доступа ко всем элементам
hearts.forEach( item => {
    console.log(item);
});

// похожий метод на получение первого элемента
// получает только один элемент, который первый попал под данный css селектор
// удобно использовать, когда элемент уникален по css селектору
const oneHeart = document.querySelector('.heart'); // также css селекторы
console.log(oneHeart);
