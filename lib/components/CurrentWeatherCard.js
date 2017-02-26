import React, { Component} from 'react';
import Greeting from './Greeting';
import WeatherIcons from '../weather_icons/WeatherIcons';

const CurrentWeatherCard = ({ currentData, forecastData }) => {
  if(!currentData) {
    return(
      <Greeting/>
    )
  }

  const icons = new WeatherIcons();
  const txtForecast = forecastData.txt_forecast
  const simpleForecast = forecastData.simpleforecast
  const weatherIconClasses = `weatherIcon ${icons[txtForecast.forecastday[0].icon]}`;
  return(
    <section className="current-weather-section">
      <div className={weatherIconClasses}></div>
      <div className="day-icon-container">
        <h1 className="current-city">{currentData.display_location.full}</h1>
        <h2 className="current-day">{txtForecast.forecastday[0].title}</h2>
      </div>
      <h3 className="current-temp">{currentData.temp_f}<span className="fahrenheit">°F</span></h3>
      <h3 className="simple-forecast">{simpleForecast.forecastday[0].conditions}</h3>
      <h4 className="weather-sum">{txtForecast.forecastday[0].fcttext}</h4>
      <div className="lo-hi-container">
        <h3 className="current-hi">High {simpleForecast.forecastday[0].high.fahrenheit}</h3>
        <h3 className="current-lo">Low {simpleForecast.forecastday[0].low.fahrenheit}</h3>
      </div>
    </section>
  )
}

export default CurrentWeatherCard
