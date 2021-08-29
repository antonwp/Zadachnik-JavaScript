// 1. Дан массив с числами. Выведите последовательно его элементы используя рекурсию и не используя цикл. Показать решение.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let i = 0;

function showArray (getArr) {
    console.log(getArr[i]);
    i++;
    if (i < getArr.length) {
        showArray(getArr);
    }
}

showArray(arr);

// Решение от автора задачи
function func(arr) {
	console.log(arr[0]);
	arr.splice(0, 1);
	if (arr.length > 0) {
		func(arr);
	}
}

// 2. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).
let num = '243425985378465454';

function numSum (getNum, sum) {
    getNum = getNum.split('');
    for (let i = 0; i < getNum.length; i++) {
        sum = sum + Number(getNum[i]);
    }
    getNum = String(sum);
    if (sum > 9) {
        console.log(sum)
        numSum(getNum, 0);
    } else {
        console.log(sum);
        return sum;
    }
}

numSum(num, 0);