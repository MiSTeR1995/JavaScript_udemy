"use strict";
// Замыкание функции это сама функция вместе со всеми внешними переменными,
// которые ей доступны

function calc (a, b) {
    return (a + b); // позволяет вернуть значение во внешний мир
}
console.log(calc(2,4));
console.log(calc(5,6));
console.log(calc(10,6));

function ret() {
    let num = 50;

    // какой-то код...
    // ...

    return num;
}
const anotherNum = ret();
console.log(anotherNum);

// function declaration - все что выше, это классическая запись функции
// особенность:  существует до того, как код запустится подобно var
// это значит, что функция будет работать, даже если ее вызов произошел до ее
// объявления


// function expression - функциональное выражение
// let foo = function() {...};
// особенность: создается только тогда, когда до ее дошел поток кода, т.е. ,
// можно вызвать только после объявления

const logger = function () {
    console.log("Hello");
};
logger();

// Стрелочные функции - современный стандарт ES6
// () =>
// const calculate = (a,b) => a + b; сокращенный вариант (если в одну строку)
// особенность: не имеет контекста вызова. Позволяет сократить код

const calculate = (a, b) => {
    return a + b;
};