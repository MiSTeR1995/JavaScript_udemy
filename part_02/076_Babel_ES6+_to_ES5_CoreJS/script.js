'use strict';

// При разработке мы чаще всего используем последнюю версию браузера
// В продакшене мы же не знаем какую версию используют пользователи
// Возможно что-то древнее. Поэтому чтобы продукт работал, необходимо использовать
// дополнительные плюшки для корректной работы
// 1) Трансплитер - берет код в новом формате и переводит в старый
// Babel это пример трансплитера, который мы и будем использовтаь
// 2) Полифилы - определеные участки кода, которые эмулируют поведение
// современных стандартов. Пример: foreach(современный метод). В старом коде он будет работать неправильно
// Чтобы его сэмулировать мы пишем определенный кусок кода в основной код
// и он автоматически подстраивается под браузер и если необходимо, добавляет свои действия
// делается все автоматически

// использование babel
// 1) напрямую прогонять каждый файл через него
// 2) подключать babel к сборщикам проектов ( более реальный вариант)
// https://babeljs.io/docs/en/usage

// установка
//npm install --save-dev @babel/core @babel/cli @babel/preset-env
// --save-dev - только для разработки
// @babel/core @babel/cli @babel/preset-env - нужные пакеты. @ означает что они относятся к одному пакету (babel)
// так мы вытаскиваем отдельные модуи
// @babel/core - основа
// @babel/cli - позволяет запускать babel через командную строку
// @babel/preset-env - пресет (набор настроек). env - самый популярный и подходит к большинству проектов.

// npm install --save @babel/polyfill
// в этом пакете содержатся все доп. кусочки кода, нужные для эмулирования старых вариантов в новом формате
// --save - полифилы уже включаются внутрь готового продукта. нужны для работы

// обычно настройки babel можно прописать в конфиге вебпака.(файл в этой папке)
// выносить в отдельный файл нет необходимости

// единственное в файл проекта package.json нужно прописать браузер лист

// большинство модулей настраивается по документации
// после компиляции размер скриптов значительно увеличивается

// иногда может быть так, что при использовании core-js и полифилов от babel
// возможно, что какой-то полифил не будет работать.
// тогда нужно прописать их вручную
// 1) определить что не работает
// 2) найти полифил. в гугл: ES6-promise < полифил >
// 3) установить в проект es-promise
// 4) найти в документации как использовать нужный полифил

// auto polyfill
// require('es6-promise).polyfill(); - желательно вставлять в начале

// настройка полифила для foreach - также ищем в гугле и устанавливаем в проект
// есть импортирование через стандарт ES6
// import 'nodelist-foreach-polyfill

// Важно! запись выше это импорт файла, которого просто не сущеввстует в проекте
// Когда мы устанавливаем какие-то пакеты устанавливаем во внутрь npm проекта
// они заносятся в папку node modules. И так как внутри него лежат все скрипты и библиотеки
// то мы можем напрямую их импортировать в проект
// При импортировании npm пакеты нужно написать только название npm пакета
