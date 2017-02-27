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
  const tenDayDataLoop = forecastArray.map((day, i) => {
    return(
      <div className='ten-day-data' key={i}>
        <h4 className='ten-day-day ten-day'>{day.date.weekday_short}</h4>
        <div className={`ten-day-icon ${icons[day.icon]}`}></div>
        <h4 className='ten-day-lo ten-day'>{day.low.fahrenheit}°</h4>
        <h4 className='ten-day-hi ten-day'>{day.high.fahrenheit}°</h4>
      </div>
    );
  })

  return(
    <section>
      {tenDayDataLoop}
    </section>
  )
};

export default TenDay;
