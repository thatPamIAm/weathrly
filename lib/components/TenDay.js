import React from 'react';
import icons from '../weather_icons/WeatherIcons';

const TenDay = ({ tenDayForecast }) => {
  if (!tenDayForecast) {
    return null;
  }
  const forecastArray = tenDayForecast.simpleforecast.forecastday;
  const tenDayDataLoop = forecastArray.map((day, i) => {
    return (
      <div className='ten-day-data' key={i}>
        <h4 className='ten-day-day ten-day' tabIndex="0">{day.date.weekday_short}</h4>
        <div className={`ten-day-icon ${icons[day.icon]}`} tabIndex="0" alt="daily weather icon"
          aria-label="daily weather icon"></div>
        <h4 className='ten-day-lo ten-day' tabIndex="0">{day.low.fahrenheit}°</h4>
        <h4 className='ten-day-hi ten-day' tabIndex="0">{day.high.fahrenheit}°</h4>
      </div>
    );
  });

  return (
    <section className='ten-day-container'>
      {tenDayDataLoop}
    </section>
  );
};

export default TenDay;
