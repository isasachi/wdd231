document.addEventListener("DOMContentLoaded", async () => {
    const weatherNode = document.getElementById('weather');
    
    const lat = -8.115732333345614;
    const lon = -79.02539455449237;
    const appId = '5eb92a32fb342431913bce6747846956';

    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${appId}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&cnt=24&appid=${appId}`;

    const apiFetch = async (url) => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Oh no, an error has occurred: ${errorText}`);
            }
            const data = await response.json();
            return data;
        } catch (err) {
            console.error(err);
            return null;
        }
    };

    const displayCurrentWeather = (data) => {
        const weatherIcon = document.createElement('img');
        weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        weatherIcon.setAttribute('alt', data.weather[0].description);
        weatherNode.appendChild(weatherIcon);

        const currentTemp = document.createElement('span');
        currentTemp.textContent = `${Math.floor(data.main.temp)}°C`;
        weatherNode.appendChild(currentTemp);

        const captionDesc = document.createElement('figcaption');
        captionDesc.textContent = data.weather[0].description[0].toUpperCase() + data.weather[0].description.slice(1);
        weatherNode.appendChild(captionDesc);
    };

    const displayForecast = (data) => {
        const forecastNode = document.createElement('ul');
        weatherNode.appendChild(forecastNode);
        const forecastTitle = document.createElement('p');
        forecastTitle.textContent = 'Forecast:';
        forecastNode.appendChild(forecastTitle);
        for (let i = 0; i < data.list.length; i += 8) {
            const forecast = data.list[i];
            const forecastItem = document.createElement('li');
            forecastItem.textContent = `${new Date(forecast.dt_txt).toDateString('en-US')}: ${Math.floor(forecast.main.temp)}°C`;
            forecastNode.appendChild(forecastItem);
        }
    }

    const currentWeatherData = await apiFetch(currentWeatherUrl);
    const forecastData = await apiFetch(forecastUrl);

    displayCurrentWeather(currentWeatherData);
    displayForecast(forecastData);
});