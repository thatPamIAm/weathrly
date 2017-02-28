import React, { Component } from 'react';
import Greeting from './Greeting';
import icons from '../weather_icons/WeatherIcons';

const CurrentWeatherCard = ({ currentForecast, forecast }) => {
  if (!currentForecast) {
    return (
      <Greeting/>
    );
  }

  const forecastWeather = forecast.txt_forecast.forecastday[0];
  const simpleForecast = forecast.simpleforecast.forecastday[0];
  const weatherIconClasses = `weather-icon ${icons[currentForecast.icon]}`;

  return (
    <section className='current-weather-section'>
      <h2 className='current-day'>{forecastWeather.title}</h2>
      <h1 className='current-city'>{currentForecast.display_location.full}</h1>
      <h3 className='simple-forecast'>{simpleForecast.conditions}</h3>
      <div className={weatherIconClasses}></div>
      <h3 className='current-temp'>
        {currentForecast.temp_f}
        <span className='fahrenheit'>°F</span>
      </h3>
      <h4 className='weather-sum'>{forecastWeather.fcttext}</h4>
      <div className='lo-hi-container'>
        <h3 className='current-hi'>{simpleForecast.high.fahrenheit}°</h3>
        <h3 className='current-lo'>{simpleForecast.low.fahrenheit}°</h3>
      </div>
    </section>
  );
};

export default CurrentWeatherCard;
