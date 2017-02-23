import React, { Component} from 'react';

const CurrentWeatherCard = ({ weatherData }) => {
  if(!weatherData.length) {
    return(
      <section>
        Please Enter a State and City
      </section>
    )
  }
  return(
    <section>
      <p>Current Day:{weatherData[0].forecast.txt_forecast.forecastday[0].title}</p>
      <p>Summary:{weatherData[0].forecast.txt_forecast.forecastday[0].fcttext}</p>
      <p>Icon:{weatherData[0].forecast.txt_forecast.forecastday[0].icon}</p>
      <p>Current conditions:{weatherData[0].forecast.simpleforecast.forecastday[0].conditions}</p>
      <p>High:{weatherData[0].forecast.simpleforecast.forecastday[0].high.fahrenheit}</p>
      <p>Low:{weatherData[0].forecast.simpleforecast.forecastday[0].low.fahrenheit}</p>
      <p>City:{weatherData[0].current_observation.display_location.full}</p>
      <p>Current temp:{weatherData[0].current_observation.temp_f}</p>
    </section>
  )
}

export default CurrentWeatherCard;
