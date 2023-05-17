const weatherForm = document.querySelector('#grid1');
const cityInput = document.querySelector('[name="city"]');
const cityNameEl = document.querySelector('#cityName');
const temperatureEl = document.querySelector('#temperature');
const humidityEl = document.querySelector('#humidity');
const windEl = document.querySelector('#wind');

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const city = cityInput.value;
  const apiKey = '7c85d7baf6fe2abd16a96ce817959ccb'; // Replace with your actual API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  // Fetch weather data from OpenWeatherMap API and update the UI
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const cityName = data.name;
      const temperature = data.main.temp;
      const humidity = data.main.humidity;
      const windSpeed = data.wind.speed;

      cityNameEl.textContent = `City: ${cityName}`;
      temperatureEl.textContent = `Temperature: ${temperature}°C`;
      humidityEl.textContent = `Humidity: ${humidity}%`;
      windEl.textContent = `Wind Speed: ${windSpeed} m/s`;
    })
    .catch(error => console.error(error));
});
