// 1. Выведите с помощью цикла столбец чисел от 1 до 100.
for (let i = 1; i <=100; i++) {
    console.log(i);
}

// 2. Выведите с помощью цикла столбец чисел от 100 до 1.
for (let i = 100; i > 0; i--) {
    console.log(i);
}

// 3. Выведите с помощью цикла столбец четных чисел от 1 до 100.
for (let i = 1; i <=100; i++) {
    if ( i % 2 == 0) {
        console.log(i);
    }
}

// 4. Заполните массив 10-ю иксами с помощью цикла.
let arr = [];
for (let i = 0; i < 10; i++) {
    arr[i] = 'x';
}
console.log(arr);

// 5. Заполните массив числами от 1 до 10 с помощью цикла.
let arr = [];
for (let i = 0; i < 10; i++) {
    arr[i] = i + 1;
}
console.log(arr);

// 6. Заполните массив 10-ю случайными числами (дробями) от 0 до 1 с помощью цикла. Дроби округляйте до двух знаков в дробной части.
let arr = [];
for (i = 0; i < 10; i++) {
    arr[i] = Math.random().toFixed(2);
}
console.log(arr);

// 7. Заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла.
let arr = [];
for (i = 0; i < 10; i++) {
    arr[i] = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
}
console.log(arr);

// 8. Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.
let arr = [1, 2, 20, 3, 30, 4, 40, 5, 50, 7, 60];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] < 10) {
        console.log(arr[i]);
    }
}

// 9. Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5. Как только будет найден первый такой элемент - выведите 'Есть' и оборвите цикл. Если такого элемента нет - ничего не выводите.
let arr = [1, 2, 5, 9, 4, 13, 4, 10];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 5) {
        console.log('Есть!');
        break;
    }
}

// 10. Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.
let arr = [1, 2, 3, 4, 5];
let result = 0;
for (i = 0; i < arr.length; i++) {
    result = result + arr[i];
}
console.log(result);

// 11. Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.
let arr = [1, 2, 3, 4, 5];
let result = 0;
for (i = 0; i < arr.length; i++) {
    result = result + (arr[i]*arr[i]);
}
console.log(result);

// 12. Дан массив с числами. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество).
let arr = [1, 2, 3, 4, 5];
let result = 0;
for (i = 0; i < arr.length; i++) {
    result = result + arr[i];
}
console.log(result/arr.length);