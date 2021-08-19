// 1. Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.
function getNum(one, two) {
    if(one == two) {
        return true;
    } else {
        return false;
    }
}
console.log(getNum(2, 2));
//второй вариант
function getNum(one, two) {
    return one == two;
}
console.log(getNum(2, 2));
// 2. делайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть функция вернет true, а если нет - false.
function getNum(one, two) {
    let summ = one + two;
    if(summ > 10) {
        return true;
    } else {
        return false;
    }
}
console.log(getNum(12, 2));
//второй вариант
function getNum(one, two) {
    let summ = one + two;
    return summ > 10;
}
console.log(getNum(12, 2));

// 3. Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.
function getNum(num) {
    if (num < 0) {
        return true;
    } else {
        return false;
    }
}
console.log(getNum(-1));
//второй вариант
function getNum(num) {
    return num < 0;
}
console.log(getNum(-1));