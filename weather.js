'use strict'

const header = document.querySelector('.header');
const title = document.querySelector('.title');
const cityData = document.querySelector('#cityname');
const btnClick = document.querySelector('#submit');
const cityTemp = document.querySelector('.temp');
const weatherDetails = document.querySelector('.details');
const changeWeather = document.querySelector('#reset');



//&units=imperial
const weatherList = [];

const reset = function(){
   location.reload()
}

const renderWeather = function(city){
    const condition = city.weather[0]
    const icon = condition.icon;
    

    let html = `
    <div class = 'details'>
    <p class = 'temp'>${city.name}</p>
    <p class = 'temp'>${city.main.temp} °F</p>
    <img id = 'icon' src = 'http://openweathermap.org/img/w/${icon}.png'>
    <p class = 'temp'>${condition.description}</p>
    <p class = 'temp'> max: ${city.main.temp_max} </p>   
    <p class = 'temp'> min: ${city.main.temp_min}</p>
    </div>
    `
    header.insertAdjacentHTML('afterend', html);
    cityData.value = '';
    weatherList.pop();
    // btnClick.addEventListener('click',reset);
    } 
    
    



const getWeather = function (e){
    e.preventDefault();
    const cityName = cityData.value;
    const apiKey = 'f0a32881413367c192b8f613a2aac828';

    const weatherData = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`)
    .then(res => res.json())
    .then(res => {
        weatherList.push(res);
        renderWeather(res);
    })
    .catch(err => console.log(err)) 


    // btnClick.addEventListener('click', clearHtml);


}

btnClick.addEventListener('click', getWeather);
changeWeather.addEventListener('click', reset);


