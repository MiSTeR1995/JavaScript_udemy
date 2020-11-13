'use strict';
// событие - сигнал от браузера, о том что, что-то произошло
// 3 способа назначить событие
// 1 html аттрибут onclick <button onclick="alert('Click')" id="btn">
// в реальных проектах такой код не используется и его не стоит применять

// 2 - свойство DOM дерева onclick
// такой метод также редко используется
// проблема: при повторном назначении обработчика события, то первая часть вообще
// не будет работать. В большом коде можно забыть о таком назнчении.
// также после это событие удалить невозможно
// const btn = document.querySelector('button');
// btn.onclick = function() {
//     alert('click');
// };

// const btn = document.querySelector('.button');

// плюс: можно назначать множество событий. первое действие не теряется
// 1 аргумент - событие 2 - callback функция
// btn.addEventListener('click', () => {
//     alert('CLick');
// } ); // слушатель события
// btn.addEventListener('click', () => {
//     alert('Second CLick');
// } );

// события выполняются в порядке очереди
// по наведению мыши
// иногда необходимо получать данные об элементе с которым взаимодествуем
// за это отвечает объект event и передается как аргумент в callback функцию,
// причем называть его можно как угодно. обычно event или e. Всегда первым


// btn.addEventListener('mouseenter', (event) => {
//     // console.log(event.target);
//     // event.target.remove();
//     console.log(`hover`);
// });


// чтобы удалить обработчик события, нужно использовать одну и ту же функцию
// для этого создадим для нее переменную

// let i = 0;
// const deleteElement = (e) => {
//     // e.target.remove();
//     console.log(e.target);
//     i++;
//     if (i == 1)
//         btn.removeEventListener('click', deleteElement);
// };

// // назначаем обработчик и сразу же его удаляем. ничего не произойдет
// btn.addEventListener('click', deleteElement);
//  обычно этот метод вызывается при определенном условии, когда обработчик уже не нужен
// btn.removeEventListener('click', deleteElement);

// всплытие события
// когда есть два элемента, один из них является родителем и на них назначены
// обработчики события, которые обрабатывают одно и тоже действие (напр клик)
// то обработчки в итоге будет срабатывать дважды на самом вложенном объекте
// есть способы избежать этого . либо использовать currentTarget либо отменить всплытие
// всплытие события - когда обработчик срабатывает на самом вложенном элементе, и идет по иерархии вверх

const overlay = document.querySelector('.overlay');
const btn = overlay.querySelector('button');

// const deleteElement = (e) => {
//     console.log(e.currentTarget);
//     console.log(e.type);
// };
// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

// гораздо важнее отменять стандартное поведение в браузере

// 2 способа первый устаревший.
const link = document.querySelector('a');
// отменим стандартное поведение
link.addEventListener('click', (event) => {
    event.preventDefault(); // отменяет поведение браузера. всегда в самом начале
    console.log(event.target);
});

// частая ошибка новичков
// чтобы на несколько элементов вешать обработчкик, то нужно перебирать весь массив

const btns = document.querySelectorAll('button');

// btns.forEach(btn => {
//     btn.addEventListener('click', (event) => {
//         console.log(event.target);
//     });
// });

// опции события (3 аргумент addEventListener объект с опциями)
// once - только однократное срабатывание
btns.forEach(btn => {
    btn.addEventListener('click', (event) => {
        console.log(event.target);
    }, {once:true});
});
