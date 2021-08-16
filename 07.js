// 1.  Дана строка 'js'. Сделайте из нее строку 'JS'.
let str = "js";
console.log(str.toUpperCase());

// 2.  Дана строка 'JS'. Сделайте из нее строку 'js'.
let str = "JS";
console.log(str.toLowerCase());

// 3.  Дана строка 'я учу javascript!'. Найдите количество символов в этой строке.
let str = 'я учу javascript!';
console.log(str.length);

// 4.  Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).
let str = 'я учу javascript!';
console.log(str.substr(2, 3)); //substr(откуда отрезать, сколько отрезать)
console.log(str.substring(2, 5)); //substring(откуда отрезать, докуда отрезать)
console.log(str.slice(2, 5)); //slice(откуда отрезать, докуда отрезать)

// 5.  Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'.
let str = 'я учу javascript!';
console.log(str.indexOf('учу'));

// 6.  Дана переменная str, в которой хранится какой-либо текст. Реализуйте обрезание длинного текста по следующему принципу: если количество символов этого текста больше заданного в переменной n, то в переменную result запишем первые n символов строки str и добавим в конец троеточие '...'. В противном случае в переменную result запишем содержимое переменной str.
let str = "Какой-то текст супер длинный текст";
let n = "15"; // задаем максимальное кол-во символов
if (str.length > n) {
    let result = str.slice(0, n);
    console.log(result + '...');
} else {
    result = str;
    console.log(result);
}

// 7.  Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!' с помощью глобального поиска и замены.
let str = 'Я-учу-javascript!';
console.log(str.replace(/-/g, '!'));

// 8.  Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.
let str = 'я учу javascript!';
let newStr = str.split(' ');
console.log(newStr);

// 9.  Дана строка 'я учу javascript!'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива.
let str = 'я учу javascript!';
let newStr = str.split('');
console.log(newStr);

// 10. В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31.12.2025' 
let date = '2025-12-31';
let getDate = date.split("-");
let newDate = getDate[0] + "." + getDate[1] + "." + getDate[2];
console.log(newDate);

//  11. Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!'.
let arr = ['я', 'учу', 'javascript', '!'];
let newArr = arr.join('+');
console.log(newArr);

// 12.  Преобразуйте первую букву строки в верхний регистр.
let myName = 'антон';
let firstChar = myName[0].toUpperCase();
let otherWords = myName.substring(1);
console.log(firstChar + otherWords);

// 13.  Преобразуйте первую букву каждого слова строки в верхний регистр.
let str = 'фамилия имя отчество';
let newStr = str.split(' ');
let getWord;
let contineWord;
let firstChar;
let result;
let resultStr = [];
for (let i = 0; i < newStr.length; i++) {
    getWord = newStr[i];
    firstChar = getWord[0].toUpperCase();
    contineWord = getWord.slice(1);
    result = firstChar + contineWord;
    resultStr[i] = result;
}
let fio = resultStr.join(' ');
console.log(fio);

// 14. Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками.
let str = "var_test_text_new_super_text";
let indexChar;
let getChar;
let leftPart;
let rightPart;
for (let i = 0; i < str.length; i++) {
    indexChar = str.indexOf('_');
    if (indexChar != -1) {
        getChar = str[indexChar+1].toUpperCase();
        leftPart = str.substring(0, indexChar);
        rightPart = str.substring(indexChar+2);
        str = leftPart + getChar + rightPart;
    }
}
console.log(str);