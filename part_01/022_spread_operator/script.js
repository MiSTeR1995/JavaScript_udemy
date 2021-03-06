"use strict";

// работая с примитивными типами данных (строки, числа и.тд) передача данных
// передается по значению значения оригиналов при изм. копии не меняются
// а вот при работе с данными типа объектов, то передача данных идет по ссылке
// т.е просто так объект мы скопировать не можем, изменяя копию будет меняться ориг

const obj = {
    a: 5,
    b: 1
};

const copy = obj; // ссылка

copy.a = 10;
//одинаковый вывод, а переназнчилось и у оригинала
console.log(copy);
console.log(obj);

// как же тогда копировать объекты?
// замечание: вложенный объект нужно обработать подобным образом, иначе он будет
// менять значение и в оригинале. Нужно делать глубокую копию
function copyObj(mainObj) {
    console.log(mainObj);
    let objCopy = {};
    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
        console.log(mainObj[key]);
    }
    return objCopy;
}


const numbers = {
    a: 2,
    b: 3,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copyObj(numbers);

// newNumbers.a = 10;
console.log(newNumbers);

const add = {
    d: 18,
    e: 20
};
// соединяем объекты
// с помощью этого метода также создается поверхностная копия
console.log(Object.assign(numbers, add)); // 1 арг - куда 2 - что поместить

// просто отдельная копия
const clone = Object.assign({}, add);
clone.d = 20;
console.log(add); // { d: 18, e: 20 }
console.log(clone); // { d: 20, e: 20 }

const origArr = ['a', 'b', 'c'];
// const newArr = origArr; // по прежнему передается ссылка
const newArr = origArr.slice(); // поможет просто скопировать массив

newArr[1] = 'dhfghjfgj';
console.log(origArr);
console.log(newArr);


// Новые стандарты ES6 и ES8
// оператор разворота Spread - разворачивает структуру и превращает ее в набор
// каких-то данных
const video = ['yt', 'vimeo', 'rutube'],
    blogs = ['wp', 'blogger', 'livejournal'],
    internet = [...video, ...blogs, 'vk', 'facebook']; // такой синтаксис вытаскиет элементы из массивов и помещает их через запятую
console.log(internet);

// пример посложнее
function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
const num = [2, 5, 7];
log(...num); // с помощью spread оператора можно передвать массив в функции, т.к он разобьет их через запятую и они будут аргументами

const array = ['a', 'b'];
// поверхностная копия  с помощью spread оператора
const newArray = [...array];
console.log(newArray);

// этот оператор работает также и с объектами
const objct = {
    one: 1,
    two: 2
};
const newObjct = {...objct}; // это стандарт ES9
console.log(newObjct);
