const codes = {
  0: 'Unknown',
  1000: 'Clear, Sunny',
  1100: 'Mostly Clear',
  1101: 'Partly Cloudy',
  1102: 'Mostly Cloudy',
  1001: 'Cloudy',
  2000: 'Fog',
  2100: 'Light Fog',
  4000: 'Drizzle',
  4001: 'Rain',
  4200: 'Light Rain',
  4201: 'Heavy Rain',
  5000: 'Snow',
  5001: 'Flurries',
  5100: 'Light Snow',
  5101: 'Heavy Snow',
  6000: 'Freezing Drizzle',
  6001: 'Freezing Rain',
  6200: 'Light Freezing Rain',
  6201: 'Heavy Freezing Rain',
  7000: 'Ice Pellets',
  7101: 'Heavy Ice Pellets',
  7102: 'Light Ice Pellets',
  8000: 'Thunderstorm',
};

const apiKey = 'kfcMIocn5SrYVEiRlbZ3uPHWInDbVgIs';
const locationApi = '059f6ec7a13540cf9a5c294494fbd54c';
const options = { method: 'GET', headers: { accept: 'application/json' } };

// GET current location coordinates
const getCoords = async () => {
  const pos = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
  console.log('INSIDE getCoords');
  return {
    long: pos.coords.longitude,
    lat: pos.coords.latitude,
  };
};

// GET current location city name
async function getCurrentCity() {
  let locationResponse = await getCoords();
  let longitude = await locationResponse.long;
  let latitude = await locationResponse.lat;
  let locationObject = await fetch(
    `https://api.opencagedata.com/geocode/v1/json?key=${locationApi}&q=${latitude}+${longitude}&pretty=1`
  );
  let locationInfo = await locationObject.json();
  console.log('INSIDE getCurrentCity');
  return locationInfo.results[0].components.city;
}

// GET weather conditions by current location
async function getCurrentWeather() {
  // let locationResponse = await getCoords();
  // let longitude = await locationResponse.long;
  // let latitude = await locationResponse.lat;

  // let weatherObject = await fetch(
  //   `https://api.tomorrow.io/v4/weather/realtime?location=${latitude},${longitude}&fields=temperature&apikey=${apiKey}`,
  //   options
  // );

  // let weatherInfo = await weatherObject.json();
  console.log('INSIDE getCurrentWeather');
  // return {
  //   temp: Math.round(weatherInfo.data.values.temperature),
  //   weatherCode: weatherInfo.data.values.weatherCode,
  // };
  return {
    temp: 20,
    weatherCode: 1000,
  };
}

const { temp, weatherCode } = await getCurrentWeather();
const city = await getCurrentCity();

// GET weather description by weather code
function getWeatherDescription(weatherCode) {
  const descrName = codes[weatherCode] || 'unknown';
  return descrName;
}

const weatherDescription = await getWeatherDescription(weatherCode);

// ADD weather info into HTML
const weatherWidget = document.querySelector('#weather-container');

weatherWidget.innerHTML = `<div class="card-header text-bg-dark">Temperature outside</div>
                            <div class="card-body">
                              <h5 class="card-title">${city}</h5>
                              <p class="card-text">
                              ${temp}&#8451; ${weatherDescription}
                              </p>
                            </div>`;

export { getCurrentWeather };
