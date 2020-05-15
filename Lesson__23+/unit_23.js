
// Task 1 ============================================
/* Создайте функцию t1 которая записывает  в LS  ключ 5 со значением 11. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-1. */

function t1() {
	localStorage.setItem(5, 11);
}

document.querySelector('.b-1').onclick = t1;

// Task 2 ============================================
/* Создайте функцию t2 которая записывает  в LS  массив a2 = [7,6,5]. Ключ a2. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-2. */

function t2() {
	let a2 = [7,6,5];
	localStorage.setItem('a2', JSON.stringify(a2));
}

document.querySelector('.b-2').onclick = t2;


// Task 3 ============================================
/*  При нажатии кнопки t3 выведите из LS сохранненный массив a2. Выведите в out-3 в формате ключ пробел значение перенос строки.  */

function t3() {
	let out = document.querySelector('.out-3');
	let b2 = localStorage.getItem('a2');
	b2 = JSON.parse(b2);
	for (const key in b2) {
		out.innerHTML += key + ' ' + b2[key] + '<br>'; 
	}
}

document.querySelector('.b-3').onclick = t3;


// Task 4 ============================================
/*  Создайте функцию t4 которая записывает  в LS  массив a4 = {hello: world, hi:mahai}. Ключ a4. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-4.*/

function t4() {
	let a4 = {hello:'world', hi:'mahai'}
	localStorage.setItem('a4', JSON.stringify(a4));
	console.log(a4);
}

document.querySelector('.b-4').onclick = t4;

// Task 5 ============================================
/*   При нажатии кнопки t5 выведите из LS сохранненный массив a24. Выведите в out-4 в формате ключ пробел значение перенос строки. */

function t5() {
	let out = document.querySelector('.out-5');
	let a4 = localStorage.getItem('a4');
	a4 = JSON.parse(a4);
	for (const key in a4) {
		out.innerHTML += key + ' ' + a4[key] + '<br>'; 
	}
}

document.querySelector('.b-5').onclick = t5;

// Task 6 ============================================
/*  Создайте функцию t6 которая очищает весь LS. Запуск по кнопке b-6*/

function t6() {
	localStorage.clear();
}

document.querySelector('.b-6').onclick = t6;


// Task 7 ============================================
/*  Создайте input i-7 куда пользователь может вводить числа и строки. Создайте массив a7. Когда пользователь нажимает кнопку b-7 число должно добавляться в массив. Массив должен сохраняться в LS с ключем a7.*/

function t7() {
	let inp = document.querySelector('.i-7').value;
	let a7 = [];
	if( localStorage.getItem('a7') === null ) {
		a7.push(inp);
	}
	else{
		let a71 = localStorage.getItem('a7');
		a71 = JSON.parse(a71);
		a71.push(inp);
		a7 = a71;
	}
	localStorage.setItem('a7', JSON.stringify(a7));
}

document.querySelector('.b-7').onclick = t7;

// Task 8 ============================================
/*   Создайте функцию t8 при запуске которой из a7 удаляется последний элемент. После чего массив сохраняется в LS с ключем a7. Использовать массив из предыдущего задания. */

function t8() {
	let a8 = localStorage.getItem('a7');
	a8 = JSON.parse(a8);
	a8.pop();
	localStorage.setItem('a7', JSON.stringify(a8));
}

document.querySelector('.b-8').onclick = t8;


