import React, { Component} from 'react';
import WeatherIcons from '../weather_icons/WeatherIcons';

const CurrentWeatherCard = ({ weatherData }) => {
  const icons = new WeatherIcons();
  if(!weatherData) {
    return(
      <section className="currentWeatherSection">
        <h4>Please Enter a State and City</h4>
      </section>
    )
  }
  const weatherIconClasses = `weatherIcon ${icons[weatherData.forecast.txt_forecast.forecastday[0].icon]}`;
  return(
    <section className="currentWeatherSection">
      <h1 className="currentCity">{weatherData.current_observation.display_location.full}</h1>
      <h2 className="currentDay">TODAY {weatherData.forecast.txt_forecast.forecastday[0].title}</h2>
      <h3 className="currentTemp">{weatherData.current_observation.temp_f} °F</h3>
      <h3 className="simpleForecast">{weatherData.forecast.simpleforecast.forecastday[0].conditions}</h3>
      <div className={weatherIconClasses}></div>
      <h4 className="weatherSum">{weatherData.forecast.txt_forecast.forecastday[0].fcttext}</h4>
      <div className="loHiContainer">
        <h3 className="currentHi">High {weatherData.forecast.simpleforecast.forecastday[0].high.fahrenheit}</h3>
        <h3 className="currentLo">Low {weatherData.forecast.simpleforecast.forecastday[0].low.fahrenheit}</h3>
      </div>
    </section>
  )
}

export default CurrentWeatherCard
