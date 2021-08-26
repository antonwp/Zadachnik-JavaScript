// 1. Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее.
let arr = [];
let x = "x";
let a = "";
for (let i = 0; i < 10; i++) {
    a = a + x;
    arr[i] = a;
}
console.log(arr);

// 2.  Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333' и так далее.
let arr = [];
let x = "";
for (let i = 0; i < 9; i++) {
    x = "";
    for (let j = 1; j <= i + 1; j++) {
        x = x + (i + 1);
    }
    arr[i] = x;
}
console.log(arr);

// 3.  Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].

function arrayFill(param, kolvo) {
    let arr = [];
    for(let i = 0; i < kolvo; i++) {
        arr[i] = param;
    }
    return arr;
}
console.log(arrayFill("x", 11));

// 4.  Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100];
let num = 0;
let summ = 0;
for (let i = 0; i < arr.length; i++) {
    summ = arr[i] + arr[i + 1];
    if (summ <= 10) {
        num = num + 1;
        continue;
    } else {
        console.log(num);
        break;
    }
}

// 5.  Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr);
let newArr = [];
for (let i = arr.length; i > 0; i--) {
    x = arr[i-1];
    newArr.push(x);
}
console.log(newArr);

// 6.  Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
let arr = [10, [1, 2, 3], [4, 5], [6]];
let summ = 0;
for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
        for (let j = 0; j < arr[i].length; j++) {
            summ = summ + arr[i][j];
        }
    } else {
        summ = summ + arr[i];
    }
}
console.log(summ);

// 7.  Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let summ = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        for (let k = 0; k < arr[i][j].length; k++) {
            summ = summ + arr[i][j][k];
        }
    }
}
console.log(summ);