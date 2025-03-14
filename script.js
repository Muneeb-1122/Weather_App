alert('If you enter the city name. Make sure, the first letter of every city will be Capital Letter. and then click the search icon.')

const click_btn = document.querySelector('.click-btn');
const find_location = document.querySelector('.find-location');
const locationName = document.querySelector('.location_name');
const temperature = document.querySelector('.temperature');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const dateDiv = document.querySelector(".date");
const weather_icon = document.querySelector('.weather-icon')

// OpenWeather API
const apiKey = '12b7f811ceb682851e0e4dceff883a8e';
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

document.addEventListener("DOMContentLoaded", function () {
    createDate(); 
});

function createDate() {
    let datePara = document.createElement("p");
    let currentDate = new Date();
    // Format the date
    const options = { month: "long", day: "numeric", year: "numeric", };
    let formattedDate = currentDate.toLocaleDateString("en-US", options);
    datePara.textContent = formattedDate;
    dateDiv.appendChild(datePara);
}

click_btn.addEventListener('click', () => {
    checkWeather(find_location.value); 
})

async function checkWeather(city) {
    try {
        const response = await fetch(`${apiUrl}&q=${city}&appid=${apiKey}`);
        const data = await response.json();

        if (data.cod === 200) { 
            locationName.innerHTML = data.name;
            temperature.innerHTML = Math.round(data.main.temp) + '°C';
            wind.innerHTML = Math.round(data.wind.speed) + ' Km/h';
            humidity.innerHTML = Math.round(data.main.humidity) + '%';
        } 
        else {
            alert("City not found! Please enter a valid city name.");
        }
    } catch (hello) {
        console.error("Error fetching weather data:", hello);
    }
}