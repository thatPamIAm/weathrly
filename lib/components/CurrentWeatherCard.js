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
    <h1>{weatherData.forecast.txt_forecast.date}</h1>
  )
}

export default CurrentWeatherCard;