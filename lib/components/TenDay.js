import React from 'react';
import WeatherIcons from '../weather_icons/WeatherIcons';


const TenDay = ({ tenDayForecast }) => {
  if (!tenDayForecast) {
    return (
      <div></div>
    );
  }
  const forecastArray = tenDayForecast.simpleforecast.forecastday;
  const icons = new WeatherIcons();
  const tenDayDataLoop = forecastArray.map((day, i) => {
    return (
      <div className='ten-day-data' key={i}>
        <h4 className='ten-day-day ten-day' tabIndex="0">{day.date.weekday_short}</h4>
        <h4 className={`ten-day-icon ${icons[day.icon]}`} tabIndex="0" alt="daily weather icon" aria-label="daily weather icon"></h4>
        <h4 className='ten-day-lo ten-day' tabIndex="0">{day.low.fahrenheit}°</h4>
        <h4 className='ten-day-hi ten-day' tabIndex="0">{day.high.fahrenheit}°</h4>
      </div>
    );
  });

  return (
    <section>
      {tenDayDataLoop}
    </section>
  );
};

export default TenDay;
