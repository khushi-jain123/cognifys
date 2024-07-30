document.getElementById('fetch-weather').addEventListener('click', fetchWeather);

function fetchWeather() {
  const city = document.getElementById('city').value;
  const apiKey = '833ccff057d4137b0edb45838d008862';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      displayWeather(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function displayWeather(data) {
  const weatherContainer = document.getElementById('weather-container');
  weatherContainer.innerHTML = ''; // Clear any previous data

  const card = document.createElement('div');
  card.className = 'card text-dark bg-light';
  card.innerHTML = `
    <div class="card-body">
      <h5 class="card-title">${data.name}</h5>
      <p class="card-text">Temperature: ${data.main.temp} °C</p>
      <p class="card-text">Weather: ${data.weather[0].description}</p>
    </div>
  `;
  weatherContainer.appendChild(card);
}
