/* eslint-disable no-undef */

function getCurrentPosition() {
  const API_KEY = '1160a79f9b1f6797b56a85e0a80b706f';

  const $city = getQuerySelector('.weather-in-app .city > .text');
  const $temp = getQuerySelector('.weather-in-app .temp > .text');
  const $description = getQuerySelector('.weather-in-app .description > .text');

  async function onGeoOk({ coords: { latitude, longitude } }) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

    await fetch(url).then(response =>
      response
        .json()
        .then(({ name, main: { temp }, weather: [{ description }] }) => {
          $city.textContent = name;
          $temp.textContent = `${temp}°`;
          $description.textContent = description;
        })
    );
  }

  function onGeoError() {
    $city.textContent = 'access denied.';
    $temp.textContent = `--.--°`;
    $description.textContent = '';
  }

  return function _closure() {
    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
  };
}

function activeWeatherApp() {
  activeClassToggle($currentScreen, 'weather-in-app');
  activeClassToggle($homeScreen, 'hidden');

  appInfo = [
    {
      className: 'city',
      text: 'Loading...'
    },
    {
      className: 'temp',
      text: '--.--°'
    },
    {
      className: 'description',
      text: ''
    }
  ].map(element => createElement(element));

  changeScreen($currentScreen, appInfo, $homeScreen);

  getCurrentPosition()();
}

addEventListenerFunc($weatherAppIcon, 'click', activeWeatherApp);

addEventListenerFunc($homeButton, 'click', () => {
  clickHomeButton('weather-in-app');
  clickHomeButton('todo');
});
