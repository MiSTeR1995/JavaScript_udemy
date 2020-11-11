'use strict';

// любые конструкции прототипно наследуются от объекта. Т.е у массива могут быть методы объекта

// Большой прототип, который описывает всех солдат и их свойства
const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello');
    }
};

const john = {
    health: 100,

};

// // устаревший формат , но лучше такое не использовать
// // john.__proto__ = soldier; // прототип джона это солдат
// console.log(john); // health: 100
// console.log(john.armor); // health: 100 100
// john.sayHello();

// современный формат, идентично устаревшей записи
// если нужно сделать в динамике - этот метод
Object.setPrototypeOf(john, soldier); // 1 - кому прототип. 2 - сам прототип
john.sayHello();

// заранее при создании объекта

// создается объект petr, который наследуется от soldier
const petr = Object.create(soldier); // на базовом уровне записывается прототип
petr.sayHello();

// JS - прототипно-ориентированный язык.
