'use strict';
// Функции генарторы встречаются в более продвинутых технологиях

// ОНи генерируют какой-то результат, делая это последовательно
// создаем такую функцию function*
// function* generator() {
//     // Когда вызывается один раз, то выдает один результат
//     // Когда вызывается следующий раз, то выдается уже другой результат
//     // за это отвечает ключевое слово yield

//     // для начала будем выдавать 'S"
//     yield 'S';
//     // после вызова второго раза то 'c'
//     yield 'c';
//     // и так далее
//     yield 'r';
//     yield 'i';
//     yield 'p';
//     yield 't';
// }

// // поместим ее в переменную
// const str = generator();

// // чтобы вызвать следующий шаг генератора, нужно использовтаь метод next()
// // когда функция срабатывает, она отдает объект с двумя полями value: наше значение, done: выполнился ли генератор полностью
// console.log(str.next()); // { value: 'S', done: false }
// console.log(str.next()); // { value: 'c', done: false }
// console.log(str.next()); // { value: 'r', done: false }
// console.log(str.next()); // { value: 'i', done: false }
// console.log(str.next()); // { value: 'p', done: false }
// console.log(str.next()); // { value: 't', done: false }

// // вызовем последний раз. КОгда генератор полностью выполнился, то что бы мы не делали
// // все время будем получать undefined, т.к генератор уже выполнился
// console.log(str.next()); // { value: undefined, done: true }

function* count(n) {

    // итерации будут срабатывать по мере вызова функции генератора
    // если вызвали один раз, то сработает один. i = 0
    // при следующем вызове i = 1, и т.д.
    for (let i = 0; i < n; i++) {
        yield i; // каждый раз отдаем i
    }
}

// const counter = count(7);

// console.log(counter.next().value); // 0
// console.log(counter.next().value); // 1
// console.log(counter.next().value); // 2

// генератор можно перебирать с помощью for of вместо ручного режима

for (let k of count(7)) {
    console.log(k);
}
