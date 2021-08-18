// 1. Дан массив с числами. Проверьте, что в этом массиве есть число 5. Если есть - выведите 'да', а если нет - выведите 'нет'.
let massiv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let status = false;
for (let i = 0; i < massiv.length; i++) {
    if (massiv[i] == 5) {
        status = true;
        break;
    } else {
        status = false;
    }
}

if (status == true) {
    console.log('Есть');
} else {
    console.log('Нет');
}

// 2. Дано число, например 31. Проверьте, что это число не делится ни на одно другое число кроме себя самого и единицы. То есть в нашем случае нужно проверить, что число 31 не делится на все числа от 2 до 30. Если число не делится - выведите 'false', а если делится - выведите 'true'.
function proverka(num) {
    let ostatok;
    for (let i = 2; i < num; i++) {
        ostatok = num % i;
        if (ostatok == 0) {
            return true;
        } else {
            return false;
        }
    }
}
console.log(proverka(31));

// 3. Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть - выведите 'да', а если нет - выведите 'нет'.
let massiv = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10];
let status = false;
for (let i = 0; i < massiv.length; i++) {
    if (massiv[i] == massiv[i+1]) {
        status = true;
        break;
    } else {
        status = false;
    }
}

if (status == true) {
    console.log('Есть');
} else {
    console.log('Нет');
}