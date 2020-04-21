//  Task 1
// Добавьте кнопку .b-1, которая запускает функцию f1. Функция присваивает блоку .out-1 ширину 200px, высоту 40px.


function f1() {
	let out = document.querySelector('.out-1');
	out.style.width = "200px";
	out.style.height = "40px";
}

document.querySelector('.b-1').onclick = f1;

//  Task 2
// По нажатию кнопки b-2 запускайте функцию f2, которая присваивает блоку out-2 класс .bg-2.

function f2() {
	let out = document.querySelector('.out-2');
	out.classList.add('bg-2');
}

document.querySelector('.b-2').onclick = f2;


//  Task 3
// По нажатию кнопки b-3 запускайте функцию f3, которая удаляет у блока out-3 класс .bg-3.

function f3() {
	let out = document.querySelector('.out-3');
	out.classList.remove('bg-3');
}

document.querySelector('.b-3').onclick = f3;

//  Task 4
// По нажатию кнопки b-4 запускайте функцию f4, которая делает toggle класса bg-4 для блока out-4.


function f4() {
	let out = document.querySelector('.out-4');
	out.classList.toggle('bg-4');
}

document.querySelector('.b-4').onclick = f4;


//  Task 5
// По нажатию b-5 запускайте функцию f5, которая проверяет наличие класса bg-4 у блока out-4 (да, именно bg-4 у out-4 ). Результат - true или false, выводите в out-5.

function f5() {
	let outFive = document.querySelector('.out-5');
	let outFour = document.querySelector('.out-4');
	outFour.classList.contains('bg-4');
	outFive.innerHTML = outFour.classList.contains('bg-4');
	
}

document.querySelector('.b-5').onclick = f5;


//  Task 6
// По нажатию b-6 запускайте функцию f6, которая выводит в out-6 количество параграфов с классом p-6.

function f6() {
	let out = document.querySelector('.out-6');
	let p = document.querySelectorAll('.p-6').length;
	out.innerHTML = p;
}

document.querySelector('.b-6').onclick = f6;


//  Task 7
// По нажатию кнопки b-7 запускайте функцию f7, которая присваивает блокам out-7 класс .bg-7. Обратите внимание, что данных блоков больше одного, следовательно нужен цикл.

let blocks7 = document.querySelectorAll('.out-7');

function f7() {
	//внутри цикла blocks7[i].classList....
	for (let i = 0; i < blocks7.length; i++){
		blocks7[i].classList.add('.bg-7');
		console.log(blocks7[i]);
		
	}
}

document.querySelector('.b-7').onclick = f7;


//  Task 8
// По нажатию кнопки b-8 запускайте функцию f8, которая делает toggle блокам out-8 класс .bg-8. Обратите внимание, что данных блоков больше одного, следовательно нужен цикл.

let blocks8 = document.querySelectorAll('.out-8');

function f8() {
	//внутри цикла blocks8[i].classList....
	for (let i = 0; i < blocks8.length; i++){
		blocks8[i].classList.toggle('.bg-8');
		console.log(blocks8[i]);
	}
}

document.querySelector('.b-8').onclick = f8;


//  Task 9
// Усложним предыдущие задачи. С помощью цикла повесьте на блоки out-9 событие клик. По клику должна выполняться функция f9. Функция, должна добавлять класс bg-9 тому out-9 на котором кликнули.

function f9() {
	//this.classList...  // все решается одной строкой
	this.classList.add('.bg-9');
	console.log(this);
	
}

let div9 = document.querySelectorAll('.out-9');

for (let i = 0; i < div9.length; i++) {
	div9[i].onclick = f9;
}


//  Task 10
// Усложним предыдущие задачи. С помощью цикла повесьте на блоки out-10 событие клик. По клику должна выполняться функция f10. Функция, должна делать toggle класса bg-10 тому out-10 на котором кликнули.

//let div10 = тут получите все out-10

function f10() {
	this.classList.toggle('.bg-10');
	console.log(this);
}

// а тут цикл, похожий на предыдущее задание
let div10 = document.querySelectorAll('.out-10');

for (let i = 0; i <div10.length; i++){
	div10[i].onclick = f10;
}

//  Task 11
// Добавьте кнопку .b-11, которая запускает функцию f11. Функция создает через createElement div c текстом 25 и добавляет его через append в out-11.


function f11() {
	let out = document.querySelector('.out-11');
	let div = document.createElement('div');
	div.append('25');
	console.log(div);
	out.append(div);
}

document.querySelector('.b-11').onclick = f11;

//  Task 12
// Добавьте кнопку .b-12, которая запускает функцию f12. Функция создает через createElement div c текстом 12 и добавляет ему класс bg-12. Созданный div добавляется в out-12.


function f12() {
	let out = document.querySelector('.out-12');
	let div = document.createElement('div');
	div.append('12');
	div.classList.add('.bg-12');
	console.log(div);
	out.append(div);
}

document.querySelector('.b-12').onclick = f12;

//  Task 13
// Добавьте кнопку .b-13, которая запускает функцию f13. Функция создает через createElement div c текстом pushMe и добавляет ему класс bg-13. Также, созданному div добавляется событие onclick, по которому выполняется функция f13_1. Созданный div добавляется в out-13.

function f13() {
	let out = document.querySelector('.out-13');
	let div = document.createElement('div');
	div.append('pushMe');
	div.classList.add('bg-13');
	div.onclick = f13_1;
	out.append(div);
	
}

function f13_1() {
    document.querySelector('.out-13-1').innerHTML += this.innerHTML;
}


document.querySelector('.b-13').onclick = f13;

//  Task 14
// Добавьте кнопку .b-14, которая запускает функцию f14. Функция создает через createElement div c текстом 14 и добавляет ему класс bg-14. Созданный div добавляется в out-14 с помощью prepend.


function f14() {
	let out = document.querySelector('.out-14');
	let div = document.createElement('div');
	div.append('14');
	div.classList.add('bg-14');
	out.prepend(div);
}

document.querySelector('.b-14').onclick = f14;

//  Task 15
// Добавьте кнопку .b-15, которая запускает функцию f15. Функция создает через createElement div c текстом 15 и добавляет ему класс bg-15. Созданный div добавляется в out-15 с помощью before.

function f15() {
	let out = document.querySelector('.out-15');
	let div = document.createElement('div');
	div.append('15');
	div.classList.add('bg-15');
	out.before(div);
}

document.querySelector('.b-15').onclick = f15;

//  Task 16
// Добавьте кнопку .b-16, которая запускает функцию f16. Функция создает через createElement div c текстом 16 и добавляет ему класс bg-16. Созданный div добавляется в out-16 с помощью after.

function f16() {
	let out = document.querySelector('.out-16');
	let div = document.createElement('div');
	div.append('16');
	div.classList.add('bg-16');
	out.after(div);
}

document.querySelector('.b-16').onclick = f16;

//  Task 17
// Добавьте кнопку .b-17, которая запускает функцию f17. Функция создает через createElement div c текстом 17 и добавляет ему класс bg-17. Созданный div заменяет  out-17 с помощью replaceWith.

function f17() {
	let out = document.querySelector('.out-17');
	let div = document.createElement('div');
	div.append('17');
	div.classList.add('bg-17');
	out.replaceWith(div);
}

document.querySelector('.b-17').onclick = f17;

//  Task 18
// Добавьте кнопку .b-18, которая запускает функцию f18. Функция с помощью getAttribute получает data-b атрибут с параграф p-18 и выводит в out-18.

function f18() {
	let p = document.querySelector('.p-18');
	let out = document.querySelector('.out-18');
	let at = p.getAttribute('data-b');
	out.append(at);
	
}

document.querySelector('.b-18').onclick = f18;

//  Task 19
// Добавьте кнопку .b-19, которая запускает функцию f19. Функция с помощью getAttribute получает data-b атрибут с параграфов p-19 и выводит в out-19 через пробел. Обратите внимание, что элементов p-19 больше одного.

function f19() {
	let p = document.querySelectorAll('.p-19');
	let out = document.querySelector('.out-19');
	
	for (let i = 0; i < p.length; i++){
		let data = p[i].getAttribute('data-b');
		out.append(data + ' ');
	}
}

document.querySelector('.b-19').onclick = f19;

//  Task 20
// Добавьте кнопку .b-20, которая запускает функцию f20. Функция с помощью setAttribute присваивает атрибут title="go" в div.out-20.

function f20() {
	let out = document.querySelector('.out-20');
	out.setAttribute('title', 'go');
	console.log(out);
	
	
}

document.querySelector('.b-20').onclick = f20;