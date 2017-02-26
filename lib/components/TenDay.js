import React from 'react';
import WeatherIcons from '../weather_icons/WeatherIcons';


const TenDay = ({ tenDayForecast }) => {
  if(!tenDayForecast) {
    return(
      <div></div>
    )
  }
  const forecastArray = tenDayForecast.simpleforecast.forecastday;
  const icons = new WeatherIcons();

  return(
    <article>
      {forecastArray.map((day, i) => {
        return(
          <div className='tenDayData' key={i}>
            <h4 className='tenDayDay'>{day.date.weekday_short}</h4>
            <h4 className='tenDayHi'>Hi {day.high.fahrenheit}</h4>
            <h4 className='tenDayLo'>Lo {day.low.fahrenheit}</h4>
            <div className={icons[day.icon]}></div>
          </div>
        );
      })}
    </article>
  )
};

export default TenDay;