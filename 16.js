// 1. Дана строка. Сделайте заглавным первый символ каждого слова этой строки. Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку, делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.
let str = "какая то там строка";

function ucfirst (slovo) {
    let firstChar = slovo[0].toUpperCase();
    let otherStr = slovo.substr(1);
    return firstChar + otherStr;
}

function predlojeniye (getStr) {
    let arr = getStr.split(' ');
    let x = arr.length;
    let newArr = [];
    for (let i = 0; i < x; i++) {
        newArr[i] = ucfirst(arr[i]);
    }
    return newArr.join(' ');
}

console.log(predlojeniye(str));

// 2. Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.
let str = 'var_text_hello';
function ucfirst (slovo) {
    let firstChar = slovo[0].toUpperCase();
    let otherStr = slovo.substr(1);
    return firstChar + otherStr;
}

function predlojeniye (getStr) {
    let arr = getStr.split('_');
    let x = arr.length;
    let newArr = [];
    for (let i = 0; i < x; i++) {
        newArr[i] = ucfirst(arr[i]);
    }
    return newArr.join('');
}

console.log(predlojeniye(str));

// 3. Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать true или false.
let arr = ['один', 'два', 'три'];

function searchWord (text, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == text) {
            return true;
        }
    }
    return false;
}

console.log(searchWord('три', arr));

// 4. Дана строка, например, '123456'. Сделайте из нее '214365'.
let str = '123456';
function resortNum (stroka) {
    let arr = stroka.split('');
    let newArr = [];
    for (let i = 0; i < arr.length; i = i + 2) {
        newArr[i] = arr[i + 1];
        newArr[i + 1] =  arr[i];
    }
    return newArr.join('');
}

console.log(resortNum(str));