"use strict";

// const result = confirm("Are you here?");
// console.log(result);

// const answer = +prompt("Вам есть 18?", ""); // + перед переменной преобразует ее в числовой тип данных
// console.log(answer);

const answers =  [];
answers[0] = prompt('What is your name?', '');
answers[1] = prompt('What is your surname?', '');
answers[2] = prompt('How is your old?', '');

// document.write(answers); // устаревшая функция

for (let i = 0; i < answers.length; i++){
    console.log(answers[i]);
}

console.log(typeof(null)); // общепризнанная ошибка, показывает object стоит это помнить
