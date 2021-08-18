'use strict'

const header = document.querySelector('.header');
const title = document.querySelector('.title');
const cityData = document.querySelector('#cityname');
const btnClick = document.querySelector('#submit');
const cityTemp = document.querySelector('.temp');



//&units=imperial



const renderWeather = function(city){
    const html = `
    <p class = 'temp' >${city.name}</p>
    <p class = 'temp' >${city.main.temp} °F</p>
    <p class = 'temp'>${city.weather[0].description}</p>
    `
    header.insertAdjacentHTML('afterend', html);
}


const getWeather = function (e){
    e.preventDefault();
    const cityName = cityData.value;
    const apiKey = 'f0a32881413367c192b8f613a2aac828';

    const weatherData = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`)
    .then(res => res.json())
    .then(res => {
        console.log(res)
        renderWeather(res)
    })
    .catch(err => console.log(err)) 

    
  
}

btnClick.addEventListener('click', getWeather);


