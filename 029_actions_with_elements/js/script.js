'use strict';

const box = document.getElementById('box');
const buttons = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');


// неочевидная возможность JS по получению элементов, о которой часто забывают
// нам не всегда нужно использовать document для получения элементов

// если у нас уже есть полученные родитель (wrapper), то мы можем сказать
// что можно искать четко в этом родителе, заменив document на wrapper

const wrapper = document.querySelector('.wrapper');
const hearts = wrapper.querySelectorAll('.heart');
const oneHeart = document.querySelector('.heart');

// console.dir(box); // получим в качестве объекта, где можно посмотреть все его методы и стили

// формирование inline стилей. По приоритету они самые важные
// сделано для того, чтобы с помощью JS ими манипулировать
box.style.backgroundColor = 'blue'; // прописывать точно также как должно быть в CSS
box.style.width = '500px';

buttons[1].style.borderRadius = '100%';

// Самая частая ошибка
// circles.style.backgroundColor = 'red'; // обращение к псевдомассиву. будет ошибка
// нужно указать четко номер элемента
circles[0].style.backgroundColor = 'red';

// сразу несколько inline стилей. CSSText

box.style.cssText = 'background-color: black; width: 400px';

// можно подставлять переменные
box.style.cssText = `background-color: black; width: ${500}px`;


// сразу над несколькими элементами несколько действий
// for, for of, forEach

// есть методы получше
// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'green';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'black';
});

// создание элементов налету

const div = document.createElement('div'); // он существует только внутри JS
const text = document.createTextNode('Тут был я'); // текстовые узлы, без оболочки тега

// Элемент можно застилизовать

// Добавление классов через className - устаревшее и неудобное

// classList - новое и мощное средство
div.classList.add('black'); // добавили созданному элементу класс

// современные методы для работы с элементаи на странице
// добавление div в конец body

// document.body.append(div); // тэг body родитель, ему в конец добавляем div

// можно вставить также и в любого другого родителя
// document.querySelector('.wrapper').append(div); // если wrapper используется только один раз

// если его нужно будет использовать несколько раз, то лучше создать отдельную перменную

wrapper.append(div);
// wrapper.prepend(div); // в начале родителя
// устаревшие конструкции appendChild()
// wrapper.appendChild(div); // аналогично append

// перед каким-то элементом или после
// hearts[0].before(div); // перед первым сердечком
// hearts[0].after(div); // после первого сердечка
//insertBefore()
// wrapper.insertBefore(div, hearts[2]); // 1 - элемент который вставить, 2 - перед чем


// удаление со страницы remove
// circles[0].remove();
// не существовало раньеш remove, аналогия replaceChild()
// wrapper.removeChild(hearts[1]);

// полезный метод replace with - замена элемента другим
// hearts[0].replaceWith(circles[0]);
// replaceChild()
// wrapper.replaceChild(circles[0], hearts[0]);

// добавление текста в элементы
// 1) innerHTML
// div.innerHTML = 'Hello World';
// можно вставлять также HTML структуру
div.innerHTML = '<h1>Hello World</h1>';

// 2) textContent - создан для безопасности, чтобы пользователи не вводили
// различные скрипты и структуры
// div.textContent = 'Hello'; // только текст, HTML структура не пройдет

// Комбинация всех знаний полученных выше
// insertAdjacentHTML. 1 аргумент - 4 метода
// beforebegin - позволяет вставлять данные HTML перед элементом
// afterbegin - в начало элемента, к которому применяется метод (div)
// beforeend - перед концом нашего элемента
// afterend - после элемента
div.insertAdjacentHTML('afterend', '<h2>Hello</h2>'); // 2 аргумент может быть большая HTML структура, которую нужо вставить
