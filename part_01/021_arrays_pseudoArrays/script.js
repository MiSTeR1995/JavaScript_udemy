"use strict";

const arr = [11, 22, 3, 6, 8];

// свойство length соотносится с порядковыми номерами следующим образом:
// последний номер индекса в массиве + 1 - так соотносится
console.log(arr.length);


arr.pop(); // удаляет последний элемент с конца
arr.push(10); // добавляет в конце массив элемент

// методы для добавляения и удаления из начала элементов shift и unshift
// на практике используются редко, из-за того, что нужно менять индексацию элементов

// помимо обычного for можно использовать for of для перебора массива
// такая конструкция работет с массивоподобными сущностями
// массив, строка, псевдомассив, сущности map и set
for (let value of arr) {
    console.log(value);
}


// структура for each - наиболее популярный метод. Позволяет гибко перебрать
// все элементы наход в массиве
// принимает в себя callback функцию, которяа будет выполнятся каждый раз, для
// каждого элемента массива. Callback эта имеет 3 аргумента:
// 1 - элемент, который перебираем
// 2 - номер по порядку
// 3 - ссылка на тот массив, который надо перебрать
arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

// метод for of имеет хороший плюс, можно  использовать break и continue,
// в отличии от forEach , в котором нельзя использовать их

// методы arr.map arr.every/some arr.filter arr.reduce -это методы трансформации
// массивов, которые на выходе выдают новый массив

const str = prompt("", "");
const products = str.split(', '); // формирование массива на основании строки. Разделитель может быть разным
console.log(products);
console.log(products.join('; ')); // объединение элементов массива в строку

products.sort(); // метод сортировки внутри массива как строки  по алфавиту

// числа он принимает как строки и сортирует неправильно
// чтобы избежать это нужно ввести callback функцию внутрь sort

arr.sort(compareNum);
console.log(arr);
function compareNum(a, b) {
    return a - b;
}

// псевдомассивы - объект структура которого совпадает со структурой массива, одно
// важное условие - у такого массива нет вышеперечисленных методов. Это просто структура
// которая хранит данные по порядку