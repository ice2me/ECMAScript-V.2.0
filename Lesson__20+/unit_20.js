
// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая выводит в .out-1 символ и возвращает его. Во всех последующих задачах - работаем с латиницей и цифрами.*/

function t1() {
	let inp = document.querySelector('.i-1').value;
	let out = document.querySelector('.out-1');
	out.innerHTML = inp;
}

document.querySelector('.i-1').onkeyup = t1;

// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая выводит в .out-2 код символа и возвращает его. */

function t2(e) {
	let ch = e.charCode;
	return ch;
	
}

document.querySelector('.i-2').onkeypress = function (e) {
	document.querySelector('.out-2').innerHTML = t2(e);
}


// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте код клавиши. */

let w3 = 75;
function t3(e) {
	console.log(e);
	let ch = e.charCode;
	if (ch >= 48 && ch <= 57) {
		return 'false';
	}
	else{
		return 'true';
	}
}

document.querySelector('.i-3').onkeypress = function (e) {
	document.querySelector('.out-3').innerHTML = t3(e);
}


// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out получаем ab4bci. */

function t4() {
	let inp = document.querySelector('.i-4').value;
	document.querySelector('.out-4').innerHTML = inp.toLowerCase()
}

document.querySelector('.i-4').onkeyup = t4;
// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */

function t5() {
	let inp = document.querySelector('.i-5').value;
	document.querySelector('.out-5').innerHTML = inp.toUpperCase()
}

document.querySelector('.i-5').onkeyup = t5;
// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая выводит в .i-6 только символы в нижнем регистре.  */

function t6(event) {
	event.preventDefault();
	
let inp = event.key.toLowerCase();
	event.target.value += inp;
}

document.querySelector('.i-6').onkeypress = t6;

// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный символ из массива a7 при каждом вводе символа. */

function t7() {
	const a7 = ['w', 'r', 56, 't', 'y', 'p', 's', 'g', 'h', 4, 'c', 23, 'm'];
	let out = document.querySelector('.out-7');
	out.innerHTML += a7[random(0, a7.length - 1)];
};
function random(min, max) {
    let r = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(r);
}

document.querySelector('.i-7').onkeyup = t7;


// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая выводит в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */
let a8 = {
    i: 1,
    o: 0,
    l: 7,
}
function t8(e) {
	if (a8[e.key] !== undefined){
		return a8[e.key];
	}
	else{
		return e.key;
	}
}

document.querySelector('.i-8').onkeyup = (e) => {
	document.querySelector('.out-8').innerHTML = t8(e)
};

// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t8, выводит в .out-9 количество нажатых клавиш стрелка вниз. */
let arrDown = 0;
function t9(e) {
	let out = document.querySelector('.out-9');
	console.log(e.keyCode);
	arrDown++;
	out.innerHTML = arrDown;
}
document.querySelector('.i-9').onkeyup = t9;
// Task 10 ============================================
/*  Дан input .i-10 и изображение 1.png. Добавьте событие на input, при нажатии клавиш стрелка вправо и стрелка влево увеличивать ширину изображения. Клавиши стрелка вверх и вниз - увеличивать высоту изображения. Одно нажатие клавиши - 1px. */
let arr = 75;
function t10(e) {
	let div = document.querySelector('.div-10 img');
	let xy = e.keyCode;

	if (xy == 38 || xy == 40) div.style.height = arr++ + 'px';
	else if (xy == 37 || xy == 39) div.style.width = arr++ + 'px';
}
document.querySelector('.i-10').addEventListener('keyup', t10);



// Task 11 ============================================
/*  Проект. Дан input .i-11. Используя знания html и css нарисуйте клавиатуру (можно схематически). Изображение должно содержать числа, символьные клавиши, пробел, enter, caps lock, shift, tab, alt. При вводе текста в input в момент нажатия клавиши - затемняйте ее, в момент отпускания - возвращайте к первоначальному состоянию. Аналогично при нажатии enter, space, alt, shift, ctrl. Затемнение реализуйте через добавление класса CSS. Для удобства рекомендую каждой клавише добавить атрибут data с символом. Если нажата клавиша caps lock - то присвоить ей затемнение, которое работает до последующего отжатия клавиши. */

function t11(e) {
	let simbol = e.key;
	let div = document.querySelectorAll('.btnKey');
	for (let item of div) {
		let attr = item.getAttribute('data-key');
		if (simbol == attr) item.classList.add('activeBtn');
		setTimeout( () => item.classList.remove('activeBtn'), 300);
	}
}
document.querySelector('.i-11').onkeyup = t11;

