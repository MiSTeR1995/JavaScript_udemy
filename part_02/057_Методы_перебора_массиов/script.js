'use strict';

// метод forEach никогда не возвращает новый массив. Он его просто перебирает

// filter() - фильтрует по правилу элементы внутри массива.

const names = ['Ivan', 'Alex', 'John', 'Voldemart'];

// получить все имена, меньше 5 символов
// условия могут быть различные

// в отличии от forEach этот метод и подобные возвращают уже новый измененный массив

// внутри callback, который перебирает элементы и возвращает те, которые подходят под условие
const shortNames = names.filter(function(name) {
    // возвращаем именно те, которые подходят под условие
    return name.length < 5; // сокращенная запись с условием. МОжет быть любое условие
});

console.log(shortNames);

// map() - позволяет взять исходный массив и изменить каждый элемент внутри него
// на выходе получается новый массив с измененными данными
// map - трансформирующий метод

const answers = ['AlEx', 'AnnA', 'Hello'];

// нужно получить данные в нормальном формате для сервера

// внутри тоже callback
// const result = answers.map(item => {
//     return item.toLowerCase();
// });
//  сделаем в сокращенном виде
const result = answers.map(item => item.toLowerCase());
console.log(result);

// каждый раз создавать отдельную переменную не нужно
// можно также перезаписывать исходный массив, но тогда брать уже let
// но лучше так не делать и оставлять исходные данные на месте
let answers1 = ['AlEx', 'AnnA', 'Hello'];
answers1 = answers1.map(item => item.toLowerCase());
console.log(answers1);

// every и some - похожи по структуре и своим задачам
// some - берет массив, перебирает его и если хотя бы какой-то один элемент
// подходит по какому-то условию из callback, то в этом случае возвращается true и если нет то false
// возвращают только bool

const some = [4, 'qew', 'sstttttst'];

// есть ли хотя бы одно число
console.log(some.some(item => typeof(item) === 'number'));

// some работает когда хотя бы один соответстввует условию
// every же работает когда все элементы соответсвуют условию, тольк ов таком случае будет true

const every = [4, 'qew', 'sstttttst'];
console.log(every.every(item => typeof (item) === 'number')); // false

const every2 = [4, 4, 5];
console.log(every2.every(item => typeof (item) === 'number')); // true

// Эти два метода иимеют много применений

// reduce - наиболее сложный из предыдущих. Собирает массив в одно единое целое

const arr = [4, 5, 1, 3, 2, 6];

// быстро получить сумму элементов
// reduce соберет массив и вернет новый сформированный результат

// когда запускается метод. У него есть 2 аргумента, которые подставляются автоматом
// 1 это сумма всех элементов, подставляет автоматически и изначально равен нулю
// 2 это current - каждый элемент, который приходит от массива
// reduce проходит по всем элементам и складывает их( не обязательно сложение, может быть другое действие)
// суть -  собрать весь массив в единственное значение
//           1 этап      sum=0  cur= 4 sum+=current = 4 и переходим на след этап
const res = arr.reduce((sum, current) => sum + current); //21
console.log(res);

// reduce можно использовать не только с цифрами

const arr1 = ['apple', 'pear', 'plum'];

// получаем одну большую строку, через запятую содержащую элементы
const res1 = arr1.reduce((sum, current) => `${sum}, ${current}`);
console.log(res1);

// метод reduce принимает еще один аргумент после callback fn
// это начальное значение для суммы, с который оно будет начинаться.
// тоже самое применимо и к строкам
const res2 = arr.reduce((sum, current) => sum + current, 3); //24
console.log(res2);


// практический пример всех этих методов

// допустим есть объект, который можно получить как угодно (напр с сервера)
// содержащий различные поля, в не том формате, который нужен
// иногда будут приходить данные не в том формате, в котором ожидается
const obj = {
    alex: 'person',
    ann: 'person',
    dog: 'animal',
    cat: 'animal'
};

// вытащить именна людей из объекта
// с условием, что мы не знаем как эти данные расположены на сервере и т д
// и способы типа obj[0] не сработали бы. Мы не можем напрямую к ним обращаться

// метод превращающий объект в матрицу (массив массивов)
// он глобальный у глобального объекта Object
// const newArr = Object.entries(obj); // тут лежит уже новый массив
// console.log(newArr);

// прием chaining - запись в цепочку через точку. Иногда очень полезный
// нужно получить два свойства у которых значение person
// получается нужно отфильтровать эти массивы
const newArr = Object.entries(obj)
.filter(item => item[1] === 'person') // возвращаем в новый массив только элементы содержащие Person
// получить теперь нужно первые элементы ( имена) в новый массив
.map(item => item[0]);
console.log(newArr);

// вывод
// 1) если знать эти методы, то можно решить задачу в одну строчку
// 2) эти методы позволяют как итог получать новый массив и соблюдается имутабельность
// 3) эти методы можно запускать по цепочке - это еще один большой плюс
