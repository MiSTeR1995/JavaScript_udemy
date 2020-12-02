'use strict';
// создание табов ( переключающиеся элементы)
window.addEventListener('DOMContentLoaded', () => {

    // Создание табов
    const tabs = document.querySelectorAll('.tabheader__item');
    const tabsContent = document.querySelectorAll('.tabcontent');
    const tabsParent = document.querySelector('.tabheader__items'); // родитель для делегирования событий

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }
    function showTabContent(i = 0) {

        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');

    }

    hideTabContent();
    showTabContent();

    // с помощью делегирования событий сделаем обработчик
    tabsParent.addEventListener('click', (event) => {

        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach( (item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    // Создание таймера

    const deadline = '2020-12-12';

    // функция определения разницы между дедлайном и текущим временем
    function getTimeRemaining(endTime) {

        // в переменной хранится разница между датами в милисекундах
        const t = Date.parse(endTime) - Date.parse(new Date());

        // сколько осталось дней с округлением до ближайшего целого
        const days = Math.floor(t / (1000 * 60 * 60 * 24));

        // Общее число часов не нужно, т.к нужны только хвостики в сутках
        const hours = Math.floor((t / (1000 * 60 * 60) % 24));

        // Аналогично и для минут. хвостик не более 60 минут
        const minutes = Math.floor((t / (1000 * 60) % 60));

        // С секундами тоже самое
        const seconds = Math.floor((t / 1000) % 60);

        // вернем объект оставшегося времени. Такой прием часто используется
        return {
            'total': t, // ост. время, нужно, чтобы знать закончился ли таймер
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    // функция для получения 0: 05 часов 09 минут 03 секунд...
    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }


    // функция, которая устанавливает таймеры на страницу
    function setClock(selector, endTime) {
        const timer = document.querySelector(selector);
        const days = timer.querySelector('#days');
        const hours = timer.querySelector('#hours');
        const minutes = timer.querySelector('#minutes');
        const seconds = timer.querySelector('#seconds');
        const timeRemaining = getTimeRemaining(endTime);

        // таймер на запуск функции обновления времени каждую секунду
        let timeInterval; // let, т.к. проверям не вышел ли таймер вообще


        // запустим один разок для инициализации даты и уберем мигание верстки
        // после этого уже будет работать интервал в 1с
        if (timeRemaining.total && timeRemaining.total <= 0) {

            days.innerHTML  = `00`;
            hours.innerHTML = `00`;
            minutes.innerHTML = `00`;
            seconds.innerHTML = `00`;

        } else {

            // таймер на запуск функции обновления времени каждую секунду
            timeInterval = setInterval(updateClock, 1000);
            updateClock();
        }

        // функция обновления таймера
        function updateClock() {
            const t = getTimeRemaining(endTime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            // если дедлайн вышел, то останавливаем обновление таймера
            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);

    // Создание модального окна
    const modalWin = document.querySelector('.modal');
    const modalTrigger = document.querySelectorAll('[data-modal]');
    const modalClose = document.querySelector('[data-close]');

    // разбил на две функции открытия и закрытия
    function openModal() {

        modalWin.classList.add('show');
        modalWin.classList.remove('hide');

        // блокируем прокруту страницы
        document.body.style.overflow = 'hidden';

        // если пользователь сам открыл модальное окно до того, как оно открылось
        // само, то убираем таймер, чтобы не доставать его лишний раз
        clearInterval(modalTimerId);
    }

    function closeModal() {
        modalWin.classList.add('hide');
        modalWin.classList.remove('show');

        // // реализация через toggle
        // modalWin.classList.toggle('show');

        // восстанавливаем прокрутку
        document.body.style.overflow = '';

    }
    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    modalClose.addEventListener('click', closeModal);

    // делаем закрытие модального окна, если пользователь нажимает на подложку
    modalWin.addEventListener('click', event => {
        if (event.target === modalWin) {
            closeModal();
        }
    });

    // закрываем по клавише esc только при открытом окне
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modalWin.classList.contains('show')) {
            closeModal();
        }
    });

    // вызываем модальное окно через определенное время
    const modalTimerId = setTimeout(openModal, 3000);

    function showModalByScroll() {

        // pageYOffset - прокрученная часть по высоте
        // если долистали до конца, то прокрученная часть плюс клиент, который
        // сейчас видно должны равняться всей высоте сайта
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();

            // как только один раз польз. долистал до конца стр., то удаляем обработчик, чтобы не бесил
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    // вызываем модалку в определенном месте (например в конце страницы)
    // цепляем на глобальное окно
    window.addEventListener('scroll', showModalByScroll);

});
