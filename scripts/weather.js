document.addEventListener("DOMContentLoaded", async () => {
    const currentTemp = document.getElementById('current-temp'); 
    const weatherIcon = document.getElementById('weather-icon');
    const captionDesc = document.querySelector('figcaption');

    if (!currentTemp || !weatherIcon || !captionDesc) {
        console.error("Error: One or more elements not found in the DOM.");
        return;
    }

    const lat = 49.749447299959535;
    const lon = 6.636947263725597;
    const appId = '5eb92a32fb342431913bce6747846956';

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${appId}`;

    const apiFetch = async (url) => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Oh no, an error has occurred: ${errorText}`);
            }
            return await response.json();
        } catch (err) {
            console.error(err);
            return null;
        }
    };

    const displayResults = (data) => {
        currentTemp.textContent = `${data.main.temp}°C`;
        captionDesc.textContent = data.weather[0].description;
        weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        weatherIcon.setAttribute('alt', data.weather[0].description);
    };

    const data = await apiFetch(url);
    displayResults(data);
});