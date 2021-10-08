'use strict';

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

function one (x) {
    x = Math.floor(Math.random( ) * (100 - 1 + 1)) + 1;
    function two () {
        let a = prompt('Угадай число от 1 до 100');
        if (a == null) {
            alert('Игра окончена');
        }else if (a < x && a !== null) {
            alert('Загаданное число больше');
            two();
        } else if (a > x && a !== null) {
            alert('Загаданное число меньше');
            two();
        } else if (a == x && a !== null) {
            alert('Поздравляю, Вы угадали!!!');
        } else if (!isNumber(a) && a !== null) {
            alert('Введи число!');
            two();
        }
    }
    two();
}
one();