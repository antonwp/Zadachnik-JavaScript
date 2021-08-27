// 1. Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.

function isNumberInRange (num) {
    if (num > 0 && num < 10) {
        return true;
    } else {
        return false;
    }
}
console.log(isNumberInRange(9));

// 2.  Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.
let arr = [1, 100, 20, 2, 3, 4, 5, 30, 40, 50, 5, 6, 7, 8, 9];
let newArr = [];
for (let i = 0; i < arr.length; i++) {
    if(isNumberInRange(arr[i])) {
        newArr.push(arr[i]);
    }
}
console.log(newArr);

// 3. Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.
function getDigitsSum (getNum) {
    let sum = 0;
    newNum = String(getNum);
    newArr = newNum.split('');
    for(let i = 0; i < newArr.length; i++) {
        sum = sum + Number(newArr[i]);
    }
    return sum;
}
console.log(getDigitsSum(101));

// 4.  Найдите все года от 1 до 2021, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.
let getYear = 0;
let postArr = [];
for (let j = 0; j <= 2021; j++) {
    getYear = getDigitsSum(j);
    if (getYear == 13) {
        postArr.push(String(j));
    }
}
console.log(postArr);

// 5.  Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.
function isEven(getNumber) {
    if (getNumber % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(1);

// 6. Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.
let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let newNumArr = [];
for (let i = 0; i < numArr.length; i++) {
    if (isEven(numArr[i])) {
        newNumArr.push(numArr[i]);
    }
}
console.log(newNumArr);

// 7. Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число).
function getDivisors (getNum) {
    let arr = [];
    for (let i = 0; i <= getNum; i++) {
        if (getNum % i == 0) {
            arr.push(i);
        }
    }
    return arr;
}

console.log(getDivisors(20));