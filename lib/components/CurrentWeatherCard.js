import React, { Component} from 'react';
import WeatherIcons from '../weather_icons/WeatherIcons';

const CurrentWeatherCard = ({ weatherData }) => {
  const icons = new WeatherIcons();
  console.log("test"); //<------------------why is this loggin on keyup
  if(!weatherData.length) {
    return(
      <section className="currentWeatherSection">
        <h4>Please Enter a State and City</h4>
      </section>
    )
  }
  const weatherIconClasses = `weatherIcon ${icons[weatherData[0].forecast.txt_forecast.forecastday[0].icon]}`;
  return(
    <section className="currentWeatherSection">
      <h1 className="currentCity">{weatherData[0].current_observation.display_location.full}</h1>
      <h2 className="currentDay">TODAY {weatherData[0].forecast.txt_forecast.forecastday[0].title}</h2>
      <h3 className="currentTemp">{weatherData[0].current_observation.temp_f} °F</h3>
      <h3 className="simpleForecast">{weatherData[0].forecast.simpleforecast.forecastday[0].conditions}</h3>
      <div className={weatherIconClasses}></div>
      <h4 className="weatherSum">{weatherData[0].forecast.txt_forecast.forecastday[0].fcttext}</h4>
      <div className="loHiContainer">
        <h3 className="currentHi">High {weatherData[0].forecast.simpleforecast.forecastday[0].high.fahrenheit}</h3>
        <h3 className="currentLo">Low {weatherData[0].forecast.simpleforecast.forecastday[0].low.fahrenheit}</h3>
      </div>
    </section>
  )
}

export default CurrentWeatherCard;