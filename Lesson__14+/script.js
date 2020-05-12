
function weather(city = 'london'){
	fetch (`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e6da5661b2413ba9de480ce46b51dd5f`)
	.then(function (resp){ return resp.json() })
	.then(function(data){
		document.querySelector('.weather__name').innerHTML = data.name;
		document.querySelector('.weather__temp').innerHTML = Math.round(data.main.temp - 273) + ' &deg' + 'C';

		document.querySelector('.weather__country').innerHTML = (data.sys.country);

		document.querySelector('.weather__time').innerHTML = new Date();
		
		document.querySelector('.weather__description').textContent = data.weather[0]['description'];

		document.querySelector('.weather__features').innerHTML = `<img src = "https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;

		document.querySelector('.weather__wind').innerHTML = data.wind['speed'] + ' m/s';
	})
	.catch(function (){
		
	});
	console.log(fetch);
}

document.querySelector('.push__city-select').onclick = () =>{
    flag = '.push__city-select';
    let select = document.querySelector('.push__city-select');
    weather(select.value);
}

document.querySelector('.push__city-button').onclick = ()=>{
    flag = '#typeSity';
    let input = document.querySelector('#typeSity').value;
    if(input !== '') weather(input);
}

