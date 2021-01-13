'use strict';

// самый простой и гибкий способ использование css3 анимаций
// но у них есть некоторые ограничения
// css не умеет нормально анимировать канвас элементы
// чтобы создать более сложное, то в css можно замучаться

// но анимации также можно создавать и через Js
// 2 вида.
// через setInterval и setTimeout
// проблема такой анимации - установка вручную как показывается анимация
// например при разных частотах кадра может глючить.
// браузер стремится рендерить 60 кадров, но при высокой нагрузке на комп, она может снижаться
// и при установке интервалов можно словить рассинхронизацию
// и когда запускать много таких анимаций, то память быстро съедается

// для решения такой проблемы создана функция requestAnimationFrame
// используется для запуска функций в качестве анимаций
// запускается так, что подстраивает анимацию под частоту обновления браузера
// таким образом на странице все будет плавно и нагрузка будет меньше
// если на странице несколько анимаций, они будут выполнятся одновременно

// сравним эти два вида на примере

const btn = document.querySelector('.btn');
const elem = document.querySelector('.box');
let pos = 0;
// function myAnimation() {
//     let pos = 0;

//     const id = setInterval(frame, 10);
//     function frame() {
//         if(pos == 300) {
//             clearInterval(id);
//         }
//         else {
//             pos++;
//             elem.style.top = pos + 'px';
//             elem.style.left = pos + 'px';
//         }
//     }
// }

// через reqauestAnimationFrame
// суть этого метода, она запускает функцию в виде колбека

function myAnimation() {

    pos++;
    elem.style.top = pos + 'px';
    elem.style.left = pos + 'px';

    // теперь запуск интервалов не нужен
    if (pos < 300) {
        // теперь за запуск отвечает reqAnimFr
        // когда запускаем myAnimation, то внутри себя она начинает зацикливать
        // анимацию при помощи этой команды и выполнит ее 300 раз
        requestAnimationFrame(myAnimation);
    }
}

// по клику запустим выполнение этой функции
btn.addEventListener('click', () => {
    if(pos < 300)
        requestAnimationFrame(myAnimation);
});

// эту анимацию также можно останавливать как интервалы
// когда помещаем вызов animFrame в переменную, она точно также оставляет ID анимации
let id = requestAnimationFrame(myAnimation);
// Отмена анимации
cancelAnimationFrame(id);
