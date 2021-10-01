const input = document.querySelector('[data-input]');
const search = document.querySelector('[data-search]');
const city = document.querySelector('[data-city]');
const tempNow = document.querySelector('[data-temp]');
const iconNow = document.querySelector('[data-icon]');
const descriptionNow = document.querySelector('[data-description]');
const humidityNow = document.querySelector('[data-humidity]');
const wind = document.querySelector('[data-wind]');

const weather = {
    "apiKey": "58ac2854ba28fc18ec95200828077b7d",
    fetchWeather(city){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`)
        .then(response => response.json())
        .then(data => this.displayWeather(data));
    },
    displayWeather(data){
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        city.textContent = `Weather in ${name}`;
        iconNow.src = `https://openweathermap.org/img/wn/${icon}.png`;
        descriptionNow.textContent = description;
        tempNow.textContent = `${temp}°C`;
        humidityNow.textContent = `Humidity: ${humidity}%`;
        wind.textContent = `Wind speed: ${speed} km/h`;
    },
}

search.addEventListener('click', () => {
    weather.fetchWeather(input.value);
});

input.addEventListener('keyup', e => {
    if(e.key === 'Enter') weather.fetchWeather(input.value);
})