👉🏻Test on thunderclient GET api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={api_key} <br> API calls return an error 401  You can get the error 401 in the following cases:  You did not specify your API key in API request. Your API key is not activated yet. Within the next couple of hours, it will be activated and ready to use. <br> https://www.youtube.com/watch?v=MdIfZJ08g2I



![Application screenshot](./public/screenshot.png)

<br/>
<br/>

With [The Weather Forecasting](https://the-weather-forecasting.netlify.app) user can search locations by city name and observe the weather for the next 5-6 days and 3 hour interval.
<br />
The app is developed using React.js and material-UI.

<br/>

## 💻 Live Demo:

https://the-weather-forecasting.netlify.app

<br/>

## ✨ Getting Started

- Make sure you already have `Node.js` and `npm` installed in your system.
- You need an API key from [OpenWeatherMap](https://openweathermap.org/). After creating an account, [grab your key](https://home.openweathermap.org/api_keys).
- Then, under the `src` directory, go to `api/OpenWeatherService` and replace `WEATHER_API_KEY` with your OpenWeatherMap API Key.
  - **`api/OpenWeatherService.js`**: It contains the code related to the back-end of the application.

<br/>

## ⚡ Install

- Clone the repository:

```bash
git clone https://github.com/Amin-Awinti/the-weather-forecasting.git

```

- Install the packages using the command `npm install`

<br/>

## 📙 Used libraries

- `react-js`
- `material-ui`

Check `packages.json` for details

<br/>

## 📄 Todos

- [ ] Styled-components
- [ ] Convert the entire project to TypeScript
- [ ] Unit Testing
- [ ] On launch, find user location weather by utilizing GeolocationAPI/GEOCODING
- [ ] Celcius/Fahrenheit conversion
- [ ] Dark/Light Mode

<br/>
Thank You ☺
