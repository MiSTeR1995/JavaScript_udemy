'use strict';
// localstorage - это объект который встроен в браузер и он может хранить различные данные
// если копнуть глубже, то это свойства глобального объекта window

// этот объект уникален для каждого домена для безопасности
// объект нужен для сохранения различных настроек сайта и тд, при повторном заходе на сайт
// он существует только в пределах одного домена. Около 5 мб информации

// запись нового ключа
// если такое свойство и ключ есть, то значение перезаписывается
localStorage.setItem('key','value');

// получение данных их localstorage
localStorage.getItem('key');
console.log(localStorage.getItem('key'));

// удаление ключа
localStorage.removeItem('key');
console.log(localStorage.getItem('key'));

// очистить хранилище clear
localStorage.clear();

const checkbox = document.querySelector('#checkbox');
const form = document.querySelector('form');
const change = document.querySelector('#color');

// поработаем с хранилищем чтобы сохранять настройки

// проверим локальное хранилище на наличие ключа и нужного значение (в данном случае true)
if(localStorage.getItem('isChecked')) {
    checkbox.checked = true;
}

checkbox.addEventListener('change', () => {
    // изменяем хранилище при клике на галочку
    localStorage.setItem('isChecked', true);
});
