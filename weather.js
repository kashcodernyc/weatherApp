'use strict'

const citydata = document.querySelector('#cityname');
const btnclick = document.querySelector('#submit');
const namecity = document.querySelector('#namecity');
const citytemp = document.querySelector('#tempcity');
const imgicon = document.querySelector('#icon');
const conditioncity = document.querySelector('#conditioncity');
const maxtemp = document.querySelector('#max_temp');
const mintemp = document.querySelector('#min_temp');
const errormsg = document.querySelector('#errormsg');
const humidity = document.querySelector('#humidity');
const details = document.querySelector('.details');




//&units=imperial
const weatherlist = [];




const renderWeather = function(city){
    const condition = city.weather[0]
    const icon = condition.icon;

    document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${city.name}')`
    namecity.innerHTML = city.name;
    citytemp.innerHTML = `${city.main.temp} °F`; 
    imgicon.src = `http://openweathermap.org/img/w/${icon}.png`;
    conditioncity.innerHTML = `${condition.description}`
    maxtemp.innerHTML = `max: ${city.main.temp_max}`;
    mintemp.innerHTML = `min: ${city.main.temp_min}`;
    humidity.innerHTML = `humidity: ${city.main.humidity} %`;

    
    citydata.value = '';
   
} 
    
    
const getWeather = function (e){
    e.preventDefault();
    const cityname = citydata.value;
    const apikey = 'f0a32881413367c192b8f613a2aac828';

    const weatherData = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}&units=imperial`)
    .then(res => res.json())
    .then(res => {
        weatherlist.push(res);
        renderWeather(res);
        console.log(res);
    })
    .catch(err => {

        errormsg.innerHTML = `enter valid city name or zip code`;
        console.log(err)
    
        namecity.innerHTML = '';
        citytemp.innerHTML = ''; 
        imgicon.src = ``;
        conditioncity.innerHTML = ``;
        maxtemp.innerHTML = ``;
        mintemp.innerHTML = ``;
        citydata.value = '';
        humidity.innerHTML = ``;
       
    });


}


btnclick.addEventListener('click', getWeather);


