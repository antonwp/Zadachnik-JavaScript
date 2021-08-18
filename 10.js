// 1. Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.
function sendSqrt(num) {
    return num * num;
}
console.log(sendSqrt(4));

// 2. Сделайте функцию, которая возвращает сумму двух чисел.
function sendSqrt(one, two) {
    return one + two;
}
console.log(sendSqrt(4, 6));

// 3. Сделайте функцию, которая отнимает от первого числа второе и делит на третье.
function sendSqrt(one, two, three) {
    return (one - two) / three;
}
console.log(sendSqrt(10, 6, 2));

// 4. Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
function day(num) {
    if (num == 1) {
        return 'Понедельник';
    } else if (num == 2) {
        return 'Вторник';
    } else if (num == 3) {
        return 'Среда';
    } else if (num == 4) {
        return 'Четверг';
    } else if (num == 5) {
        return 'Пятница';
    } else if (num == 6) {
        return 'Суббота';
    } else if (num == 7) {
        return 'Воскресенье';
    } else {
        return 'Введите число от 1 до 7';
    }
}
console.log(day(3));
