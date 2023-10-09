const apiKey = " 047d0392682740f08d1132625232304";
const apiUrl = "https://api.weatherapi.com/v1/current.json?&q=";

const inputCity = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
var weatherImg = document.querySelector(".weather img");
var weatherCondition = document.querySelector("#weather-text");

//console.log(weatherImg.src);
//console.log(weatherCondition.innerHTML);

weatherImg.style.visibility = "hidden";

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&key=${apiKey}`);
    var data = await response.json();

    //console.log(data);

    document.querySelector(".city").innerHTML = data.location.name;
    document.querySelector(".temp").innerHTML = Math.round(data.current.temp_c) + "°C";
    document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
    document.querySelector(".wind").innerHTML = data.current.wind_kph + " kmph";

    //console.log(data.current.condition.text);

    const wCondition = data.current.condition.text;
    //console.log(wCondition);

    /* Changing weather icon */
    if(wCondition=='Light rain shower'||wCondition=='Patchy light rain with thunder'){
        weatherImg.src= '/Projects/weather_app/images/rain.png';
        weatherCondition.innerHTML = wCondition

    } else if(wCondition == 'Sunny' || wCondition == 'Clear') {
        weatherImg.src= "/Projects/weather_app/images/clear.png";
        weatherCondition.innerHTML = wCondition
 
    } else if(wCondition == 'Mist'){
        weatherImg.src= "/Projects/weather_app/images/mist.png";
        weatherCondition.innerHTML = wCondition
 
    } else if(wCondition == 'Partly cloudy' || wCondition =='Cloudy'){
        weatherImg.src="/Projects/weather_app/images/clouds.png" ;
        weatherCondition.innerHTML = wCondition
 
    } else if(wCondition == 'Snow'){
        weatherImg.src="/Projects/weather_app/images/snow.png" ;
        weatherCondition.innerHTML = wCondition
 
    } else if(wCondition=='Rain'|| wCondition == 'Patchy rain possible'|| wCondition == 'Thundery outbreaks possible') {
        weatherImg.src= "/Projects/weather_app/images/drizzle.png";
        weatherCondition.innerHTML = wCondition
 
    } else {
        wCondition.src = '';
        weatherCondition.innerHTML = wCondition
    }
    /* making icon visible */
    weatherImg.style.visibility = "visible";

};

searchBtn.addEventListener('click', function(e){
    if (inputCity.value == false){
        alert("Please enter a city name")
        
    } else{
        checkWeather(inputCity.value)

    }
});

