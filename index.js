const apiKey = "1fe70bb9f98439edc2956a2daeee75e1";
const apiUrl =  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather (city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        document.querySelector(".error").style.display = "none";
    }

    var data = await response.json();

    console.log(data);

    document.querySelector(".temp").textContent = Math.round(data.main.temp) + "°c";
    document.querySelector(".city").textContent = data.name;
    document.querySelector(".humidity").textContent = data.main.humidity + "%";
    document.querySelector('.wind').textContent = data.wind.speed + " kmph";

    switch(data.weather[0].main) {
        case "Clouds":
            weatherIcon.src = 'images/clouds.png';
            break;

        case "Clear":
            weatherIcon.src = 'images/clear.png';
            break;

        case "Rain":
            weatherIcon.src = 'images/rain.png';
            break;

        case "Drizzle":
            weatherIcon.src = 'images/drizzle.png';
            break;

        case "Mist":
            weatherIcon.src = 'images/mist.png';
            break;

        case "Haze":
            weatherIcon.src = 'images/haze.png';
            break;

        default: console.log("Unavailaible");
    }

    document.querySelector(".weather").style.display = "block";

}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter"){
        checkWeather(searchBox.value);
    }
})


