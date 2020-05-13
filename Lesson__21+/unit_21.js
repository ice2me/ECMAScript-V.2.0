
// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие touchstart. Выведите в out-1 слово  touch если событие сработает. */

function t1() {
	document.querySelector('.out-1').innerHTML += 'touch ';
}

document.querySelector('.div-1').addEventListener('touchstart', t1);

// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие touchstart. Выведите в out-2 число срабатываний события. */
let t = 0;
function t2(event) {
	let out = document.querySelector('.out-2');
	t += event.touches.length;
	out.innerHTML = t;
}

document.querySelector('.div-2').addEventListener('touchstart', t2);


// Task 3 ============================================
/*  Создайте блок div-3_1 и div-3_2. Добавьте на них событие touchstart. Выведите в out-3 номер блока 1 или 2 на котором сработало событие. */

function t3(e) {
	let out = document.querySelector('.out-3');
	let div_1 = document.querySelector('.div-3_1');
	if(e.target == div_1) out.innerHTML = '1';
	else out.innerHTML = '2';
}

document.querySelector('.div-3_1').addEventListener('touchstart', t3);
document.querySelector('.div-3_2').addEventListener('touchstart', t3);


// Task 4 ============================================
/*  Создайте блок div-4. И кнопку b-4. При нажатии кнопки - добавляйте событие ontouchstart на блок div-4. При событии происходит вывод текста touch в out-4.  */

function t4() {
	document.querySelector('.div-4').ontouchstart = out;
	function out (){
		document.querySelector('.out-4').innerHTML += 'touch ';
	}
}

document.querySelector('.b-4').onclick = t4;

// Task 5 ============================================
/*  Дана кнопка b-5. При ее нажатии очищайте событие ontouchstart на блоке div-4. */

function t5() {
	document.querySelector('.div-4').ontouchstart = null;
}

document.querySelector('.b-5').onclick = t5;

// Task 6 ============================================
/*  Добавьте событие ontouchend на div-4. При его срабатывании выведите в out-6 слово touchend. */

function t6() {
	document.querySelector('.out-6').innerHTML += 'touchend ';
}

document.querySelector('.div-4').ontouchend = t6;


// Task 7 ============================================
/*  Дан блок div-7. Добавьте событие touch, при срабатывании которого окрашивайте блок в красный цвет. */

function t7() {
	document.querySelector('.div-7').style.background = 'red';
}

document.querySelector('.div-7').ontouchstart = t7;

// Task 8 ============================================
/*  Дан блок div-8. Добавьте на него событие touch, которое при срабатывании окрашивает блок случаным цветом из массива a8=[red, green, blue, orange, pink, yellow] */
let a8 = ['red','green', 'blue', 'orange', 'pink', 'yellow'];
function t8() {
	let randomIndex = Math.floor(Math.random() * 8);
	document.querySelector('.div-8').style.background = a8[randomIndex];
}

document.querySelector('.div-8').ontouchstart = t8;


// Task 9 ============================================
/* Дан блок div-9. Добавьте событие ontouch. Выводите количество одновременных касаний в out-9. */

function t9() {
	event.preventDefault();
	document.querySelector('.out-9').innerHTML += event.touches.length;
}

document.querySelector('.div-9').ontouchstart = t9;


// Task 10 ============================================
/*  Дан блок div-10. Добавьте на него событие touchmove. При срабатывании события - увеличивайте его ширину на 1. */
let r = 75;
function t10() {
	event.preventDefault();
	document.querySelector('.div-10').style.width = r + 'px';
	r++;
}

document.querySelector('.div-10').ontouchmove = t10;

// Task 11 ============================================
/*  Дан блок div-11. Добавьте на него событие touch. При срабатывании выводите радиус события radiusX, radiusY. */

function t11(event) {
	let out11 = document.querySelector('.out-11')
	out11.innerHTML += 'radiusX ' + event.changedTouches[0].radiusX;
	out11.innerHTML += 'radiusY ' + event.changedTouches[0].radiusY;
}
document.querySelector('.div-11').addEventListener("touchstart", t11);

// Task 12 ============================================
/*  Мини проект. Ознакомьтесь с версткой в задании 12.
<p>Изучите html код внутри div-12-wrapper.</p>
<p>1. Добавьте на кнопку nex событие click, touch так, чтобы при событии запускалась функция nextFunction и активным становилось изображение следующее за выделенным классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>2. Добавьте на кнопку prev событие click, touch так, чтобы при событии запускалась функция prevFunction и активным становилось изображение до выделенного классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>3. Учтите краевые эффекты - когда мы доходим до конца или начала, то нажатие кнопки должно приводить к перемещению рамки в начало или конец изображений.</p>
<p>4. Добавьте кнопку reset (функция resetFunction), нажатие которой сбрасывает активное изображение на нулевое. </p>
<p>5. Добавьте во все действия следующее - в изображении img-12-max заменяется src на активную. Т.е. произошло событие - заменилась главная картинка.</p>
*/

let out12 = document.querySelector('.out-12');
const imeges = document.querySelectorAll('.img-12-min');
let imgBig = document.querySelector('.img-12-max');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let reset = document.querySelector('.reset');
let count = 0;
let text = '';

function t12() {
	imeges[count].classList.remove('active-img');
	count = this.getAttribute('data');
	imeges[count].classList.add('active-img');
	imgBig.src = imeges[count].src;
	text = this.getAttribute('data-text');
	out12.innerHTML = text;
}

function t12Next() {
	imeges[count].classList.remove('active-img');
	if (count + 1 == imeges.length) count = 0;
	else count++;
	imeges[count].classList.add('active-img');
	imgBig.src = imeges[count].src;
	text = imeges[count].getAttribute('data-text');
	out12.innerHTML = text;
}

function t12Prev() {
	imeges[count].classList.remove('active-img');
	if (count - 1 == -1) count = 5;
	else count--;
	imeges[count].classList.add('active-img');
	imgBig.src = imeges[count].src;
	text = imeges[count].getAttribute('data-text');
	out12.innerHTML = text;
}

function t12Res() {
	imeges[count].classList.remove('active-img');
	count = 0;
	imeges[count].classList.add('active-img');
	imgBig.src="img/1.png";
	text = imeges[count].getAttribute('data-text');
	out12.innerHTML = text;
}

for (let item of imeges) {
	item.ontouchstart = t12;
}
next.onclick = t12Next;
prev.onclick = t12Prev;
reset.onclick = t12Res;