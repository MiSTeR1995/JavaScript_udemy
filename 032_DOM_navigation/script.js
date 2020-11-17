'use strict';
// console.log(document.body);
// обращаемся ко всему html
// console.log(document.documentElement);

// console.log(document.body.childNodes); // узлы потомки элемента body
// перенос строки является текстовым узлом, это нужно учитывать

// каждая сущность на странице это узел, но не каждый узел это элемент страницы

// firstChild lastChild - первый или последний потомок

// console.log(document.querySelector('#current').parentNode); // родитель узла
// console.log(document.querySelector('#current').parentNode.parentNode); // родитель родителя


// дата аттребуты в HTML5 - data-<произвольная часть>="..."
// полученеи такого аттребута
// nextSibling - получаем следующий соседний узел
// console.log(document.querySelector('[data-current="3"]').nextSibling);
// previousSibling - получаем предыдущий соседний узел
// console.log(document.querySelector('[data-current="3"]').previousSibling);


// получение не узла а элемента с помощью nextElementSibling
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);
// console.log(document.querySelector('#current').parentElement.parentElement); // родитель родителя элемента

// все команды можно получать только элементы. firstElementChild и.т.д
// у childNodes нет аналога. иногда его создают вручную
// childNodes именно псевдоколлекция, forEach не работает. for of используем
// переберем все узлы, исключая текстовые
for (let node of document.body.childNodes) {
    // посмотрим все аттрибуты узлов, через браузер и найдем название ноды для условия
    if (node.nodeName == '#text' || node.nodeName == '#comment' ){
        continue;
    }

    console.log(node);
}
