import React, { Component} from 'react';
import WeatherIcons from '../weather_icons/WeatherIcons';

const CurrentWeatherCard = ({ currentData, forecastData }) => {

  const icons = new WeatherIcons();
  if(!currentData) {
    return(
      <section className="currentWeatherSection">
        <h4>Please Enter a State and City</h4>
      </section>
    )
  }
  const txtForecast = forecastData.txt_forecast
  const simpleForecast = forecastData.simpleforecast
  const weatherIconClasses = `weatherIcon ${icons[txtForecastC.forecastday[0].icon]}`;
  return(
    <section className="currentWeatherSection">
      <h1 className="currentCity">{currentData.display_location.full}</h1>
      <h2 className="currentDay">TODAY {txtForecast.forecastday[0].title}</h2>
      <h3 className="currentTemp">{currentData.temp_f} °F</h3>
      <h3 className="simpleForecast">{simpleForecast.forecastday[0].conditions}</h3>
      <div className={weatherIconClasses}></div>
      <h4 className="weatherSum">{txtForecast.forecastday[0].fcttext}</h4>
      <div className="loHiContainer">
        <h3 className="currentHi">High {simpleForecast.forecastday[0].high.fahrenheit}</h3>
        <h3 className="currentLo">Low {simpleForecast.forecastday[0].low.fahrenheit}</h3>
      </div>
    </section>
  )
}

export default CurrentWeatherCard
