'use strict';
// скрипт нельзя вставлять в Head!
// скрипт блокирует построение страницы пока сам не загрузится
// аттрибут defer - сообщает браузеру, что он должен продолжать обрабатывать страницу
// и загружать скрипт в фоновом режиме, а затем запустить после загрузки
// скрипты с defer никогда не блокируют страницу
// 2 особенность: скрипты всегда выполняются когда наше DOM Дерево готово
// они всегда будут дожидаться полной готовности верстки, но срабатывают до
// события DOMContentLoaded
// такой скрипт неважно куда помещать, он всегда будет дожидаться полной загрузки
// defer также включает последовательную загрузку скриптов

// Используется для порядка загрузки всех полезных утилит, не блокируя страницу
//
const p = document.querySelectorAll('p');
console.log(p);


// async
// 1 особенность. Страница не ждет ассинхронных скриптов
// СОдержимое обрабатывается и отображается
// 2 особенонсть. DOMContentLoaded и асинхронные скрипты не ждут друг друга
// Асинхр загружается в фоновом режиме и запускается сразу же как загрузился
// они работают независимо, как загрузился, так и работает
// они нужны для сторонних скриптов, которые нужно загружать независимо
// Использовтаь async в тех сллучаях, если уверены, что он не завист от DOM структуры страницы
// и он не должен зависеть от других скриптов

// помещаем скрипты на страницу с помощью js
// такой скрипт будет загружаться только после добавления его на страницу
// динамические скрипты ведут себя как async, они тоже не ждут никого после загрузки



function loadScript (src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false; // блокируем у него ассинхронность
    document.body.append(script);
}

// за счет async = false они будут загружаться друг за другом.
loadScript('test.js');
loadScript('some.js');

// такой способ загрузки частый
