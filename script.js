'use strict';

function one (x) {
    x = Math.floor(Math.random( ) * (100 - 1 + 1)) + 1;
    function two (i = 10) {
        let a = prompt('Угадай число от 1 до 100');

        if (a === null) {
            alert('Игра окончена');
        }else if (a < x && a !== null) {
            if (i > 0) {
                alert(`Загаданное число больше, осталось попыток ${i - 1}`);
                two(i - 1);
            } else {
                if (confirm ('Попытки закончились, хотите сыграть еще?')) {
                    two();
                } else {
                    alert ('Всего хорошего!');
                }
            }
        } else if (a > x && a !== null) {
            if (i > 0) {
                alert(`Загаданное число меньше, осталось попыток ${i - 1}`);
                two(i - 1);
            } else {
                if (confirm ('Попытки закончились, хотите сыграть еще?')) {
                    two();
                } else {
                    alert ('Всего хорошего!');
                }
            }
        } else if (a == x && a !== null) {
            if (confirm ('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?')) {
                two();
            } else {
                alert ('Всего хорошего!');
            }
        } else if (a !== /[^\d]/) {
            alert('Введи число!');
            two(i);
        }
    }
    two();
}
one();