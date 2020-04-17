// Task 1.
// Создайте две переменные a = 7 и b = 9. Выведите в консоль результа умножения a на b.
let a = 7;
let b = 9;
console.log(a * b);


// Task 2.
// Создайте две переменные c = 7 и d = 9. Выведите на страницу в .out-2 результат деления c на d.
let c = 7;
let d = 9;
document.querySelector('.out-2').textContent = c / d;
// document.querySelector('.out-2').textContent = 


// Task 3.
// Создайте две переменные e = 3 и f = 5. Выведите на страницу в .out-3 результат сложения e + f.
let e = 3;
let f = 5;
document.querySelector('.out-3').textContent = e + f;
// document.querySelector('.out-3').textContent = 


// Task 4.
// Создайте две переменные e1 = '3' и f1 = 5. Выведите на страницу в .out-4 результат сложения e1 + f1. Объясните разницу.
let e1 = '3'; //<- строка, происходит конкатенация
let f1 = 5;
document.querySelector('.out-4').textContent = e1 + f1;
// document.querySelector('.out-4').textContent = 


// Task 5.
// Создайте две переменные e2 = 3 и f2 = 0. Выведите на страницу  в .out-5 результат деления e2 на f2.
let e2 = 3;
let f2 = 0;
document.querySelector('.out-5').textContent = e2 / f2;
// document.querySelector('.out-5').textContent = 


// Task 6.
// Создайте две переменные e3 = 3 и f3 = 'Hello'. Выведите на страницу  в .out-6 результат сложения двух переменных.
let e3 = 3;
let f3 = 'Hello';
document.querySelector('.out-6').textContent = e3 + f3;
// document.querySelector('.out-6').textContent = 


// Task 7.
// Создайте две переменные e4 = 3 и f4 = 'Hello'. Выведите на страницу  в .out-7 результат умножения двух переменных.
let e4 = 3;
let f4 = 'Hello';
document.querySelector('.out-7').textContent = e3 * f3;
// document.querySelector('.out-7').textContent =


// Task 8.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит в консоль то, что пользователь ввел в input.
let input = document.querySelector('.input-8');
document.querySelector('.b-8').onclick = t8;

function t8() {
	console.log(input.value);
}


// Task 9.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу,  что пользователь ввел в input. Добавьте очистку input после нажатия кнопки.
let inputText = document.querySelector('.i-9');
let outText = document.querySelector('.out-9');
document.querySelector('.b-9').onclick = t9;

function t9() {
	let r = inputText.value;
	outText.innerHTML = r;
	inputText.value = '';
}


// Task 10.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое ввел пользователь умноженное на 10.
document.querySelector('.b-10').onclick = t10;
let inputIn = document.querySelector('.i-10');
let outIn = document.querySelector('.out-10');

function t10() {
	let t = inputIn.value;
	outIn.innerHTML = t * 10;
}


// Task 11.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу в .out-11 число, которое ввел пользователь и к нему добавленное число 10.
document.querySelector('.b-11').onclick = t11;
let inputEl = document.querySelector('.i-11');
let outEl = document.querySelector('.out-11');

function t11() {
	let q = +inputEl.value;
	outEl.innerHTML = q + 10;
}


// Task 12.
// Создайте два input (i-12_1 и i-12_2) и кнопку. В первый input пользователь вводит имя, во второе фамилию. При нажатии кнопки выполняется функция, которая выводит в .out-12 строку 'Hello имя фамилия', где имя - имя пользователя и фамилия - введенная фамилия.
let inputQuOne = document.querySelector('.i-12_1');
let inputQuTwo = document.querySelector('.i-12_2');
let outQu = document.querySelector('.out-12');
document.querySelector('.b-12').onclick = t12;
function t12() {
	let name = inputQuOne.value;
	let lastName = inputQuTwo.value;
	outQu.innerHTML = 'Hello ' + name + ' ' + lastName;
}


// Task 13.
// Создайте два input и кнопку. В input пользователь вводит числа. При нажатии кнопки выполняется функция, которая выводит сумму данных двух чисел на страницу в .out-13.
document.querySelector('.b-13').onclick = t13;
let inpOne = document.querySelector('.i-13_1');
let inpTwo = document.querySelector('.i-13_2');
let outSum = document.querySelector('.out-13');

function t13() {
	let numberOne = +inpOne.value;
	let numberTwo = +inpTwo.value;
	outSum.innerHTML = numberOne + numberTwo
}


// Task 14.
// Создайте input .i-14 и пропишите ему в html value = 77. С помощью JS измените value на 'Hello'.
document.querySelector('.i-14').value = 'Hello';
// document.querySelector('.i-14').value = 


// Task 15.
// Создайте input i-15 и получите его в переменную y. В js выполните следующее присвоение: y.style.border = '2px solid red' . Изучите результат операции.

let y = document.querySelector('.i-15');
y.style.border = '2px solid red';


// Task 16.
// Создайте два input type=number, куда пользователь может ввести числа. Выведите на страницу сумму данных чисел по нажатию кнопки b-16
let inpSixOne = document.querySelector('.i-16_1');
let inpSixTwo = document.querySelector('.i-16_2');
let outSix = document.querySelector('.out-16');
document.querySelector('.b-16').onclick = t16;

function t16() {
	let oneNum = +inpSixOne.value;
	let twoNum = +inpSixTwo.value;
	outSix.innerHTML = oneNum + twoNum;
}


// Task 17.
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseInt(t), и результат операции выведите в out-17. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.
let textInput = document.querySelector('.i-17');
let outInput = document.querySelector('.out-17');
document.querySelector('.b-17').onclick = t17;
function t17() {
	let t = textInput.value;
	t = parseInt(t);
	outInput.innerHTML = t;
}


// Task 18.
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseFloat(t), и результат операции выведите в консоль. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.

let floatInput = document.querySelector('.i-18');
let outFloat = document.querySelector('.out-18');
document.querySelector('.b-18').onclick = t18;
function t18() {
	let t = floatInput.value;
	t = parseFloat(t);
	outFloat.innerHTML = t;
}


// Task 19.
// Создайте два input type=number, куда пользователь может ввести отрицательные числа. Выведите на страницу сумму данных чисел. Мы это делали! Зачем? Затем, что нужно понимать как влияет перевод в число с помощью + и parseInt на отрицательные числа!!!
document.querySelector('.b-19').onclick = t19;
let xOne = document.querySelector('.i-19_1');
let yTwo = document.querySelector('.i-19_2');
let zOut = document.querySelector('.out-19');
function t19() {
	let x = +xOne.value;
	let y = +yTwo.value;
	x = parseInt(x);
	y = parseInt(y);
	zOut.innerHTML = x + y
}


// Task 20
// Создайте опросник, куда пользователь может ввести имя, фамилию, возраст, род занятий. И кнопку. По нажатию кнопки выведите на страницу предложение 'Уважаемый Иван, Иванов, ваш возраст 33 года, по професси вы ...' куда поставьте соответствующие данные из inputов.
document.querySelector('.b-20').onclick = t20;
let typeName = document.querySelector('.firstname');
let lostName = document.querySelector('.lastname');
let age = document.querySelector('.age');
let hobby = document.querySelector('.hobby');
let listenOut = document.querySelector('.out-20');
function t20() {
	let fn = typeName.value;
	let la = lostName.value;
	let ag = age.value;
	let ho = hobby.value;
	listenOut.innerHTML = 'Уважаемый ' + fn + ', ' + la + ', ' + 'ваш возраст ' + ag + ' ' + 'года, ' + 'по професси вы ' + ho + '.';
}