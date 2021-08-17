// 1. Дана строка. Сделайте заглавным первый символ этой строки не используя цикл. Найдите два решения.
// 1
let str = 'какая-то строка';
str = str[0].toUpperCase() + str.substr(1);
alert(str);

// 2
let str = 'какая-то строка';
str = str.split('');
str[0] = str[0].toUpperCase();
let result = str.join('');
alert(result);

// 2. Дана строка, например, '123456'. Переверните эту строку (сделайте из нее '654321') не используя цикл.
let str = "123456";
let newStr = str.split('');
let b = newStr.reverse();
console.log(b);

// 3. Проверьте, что строка начинается на http://
let url = "http://antonwp.ru";
let checkUrl = url.substr(0, 7);
if (checkUrl == 'http://') {
	console.log('Да');
} else {
	console.log('Нет');
}

// 4. Проверьте, что строка заканчивается на .html
let url = "http://antonwp.ru/index.html";
let checkUrl = url.substr(-5);
console.log(checkUrl);
if (checkUrl == '.html') {
	console.log('Да');
} else {
	console.log('Нет');
}