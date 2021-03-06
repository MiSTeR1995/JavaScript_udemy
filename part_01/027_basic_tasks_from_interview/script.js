'use strict';
// Какое будет выведено значение: let x = 5; alert( x++ );
let x = 5;
alert(x++); // 5 из-за постфиксной записи инкремента ++х уже будет 6

// Чему равно такое выражение: [ ] + false - null + true ?
// Запомнить особенность с пустым массивом
console.log([] + false); // пустой массив приведется к пустой строке '' // false
console.log([] + false - null); // NaN (нематематическая операция)
console.log([] + false - null + true); // NaN (нематематическая операция)

// Что выведет этот код: let y = 1; let x1 = y = 2; alert(x1); ?
let y = 1;
let x1 = y = 2; // действия справа налево. y =2, потом x=y
alert(x1);

// Чему равна сумма [ ] + 1 + 2?
console.log([] + 1 + 2); // 12. Особенности пустого массива

// Что выведет этот код: alert( "1"[0] )?
console.log("1"[0]); // 1. К каждому элементу строки можно обратится по индексу.

// Чему равно 2 && 1 && null && 0 && undefined ?
// оператор И (&&) всегда запинается на лжи
console.log(2 && 1 && null && 0 && undefined); // null, впервые наткнулся на ложь и начинает его возвращать

// Есть ли разница между выражениями? !!( a && b ) и (a && b)?
console.log(!!(1 && 2) === (1 && 2)); // false !! превращают в bool => они неравны
console.log((1 && 2)); // 2

// Что выведет этот код: alert( null || 2 && 3 || 4 ); ?
// Нужно помнить про приоритеты операторов
// && приоритетнее ИЛИ (||)
//                3
alert( null || 2 && 3 || 4 ); // 3. А также оператор || запинается на правде

// a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
// ответ НЕТ, т.к  это два разных хранилища, но это не одни и те же хранилища,
// неважно, что они похожи, это все равно разные хранилища, поэтому они неравны
const a = [1, 2, 3];
const b = [1, 2, 3];
console.log(a==b); // false

// Что выведет этот код: alert( +"Infinity" ); ?
console.log(+'Infinity'); // Infinity
console.log(typeof(+'Infinity')); // number из-за унарного плюса

// Верно ли сравнение: "Ёжик" > "яблоко"?
console.log("Ёжик" > "яблоко"); // false посимвольное сравнивание, с помощью таблиц юникода. Обращать внимание на регистр

// Чему равно 0 || "" || 2 || undefined || true || falsе ?

console.log(0 || "" || 2 || undefined || true || false); // 2
