"use strict";
// объекты в js это ассоциатвные массивы

// const obj = new Object(); // так лучше не записывать
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function () {
        console.log('Test');
    }
};
// console.log(options.name);

// delete options.name;
// console.log(options);

// console.log(options['colors']['border']);


/* let counter = 0; // посчитаем количество объектов внутри
// перебор свойств объекта с помощью for ( let key in ...)
for (let key in options) {
    if (typeof (options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
}
console.log(counter);
*/

// более удобный способ подсчета ключей объекта. Очень полезный прием.
// console.log(Object.keys(options)); // [ 'name', 'width', 'height', 'colors' ]
// console.log(Object.keys(options).length); // теперь у объекта можно проверить длину, так как после этого возвращается массив

options.makeTest();


// свойства акцессоры (access) - get & set


// деструктуризация объектов (ES6) - извлечение переменных из объекта в качестве
// отдельных коробочек(структур) и использовать в дальнейшем

const {border, bg} = options.colors;
console.log(border);
