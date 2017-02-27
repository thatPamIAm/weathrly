import React from 'react';
import WeatherIcons from '../weather_icons/WeatherIcons';

const SevenHour = ({ hourlyForecast }) => {
  if (!hourlyForecast) {
    return (
      <div></div>
    );
  }

  const icons = new WeatherIcons();
  const sevenHourForecast = hourlyForecast.slice(0, 7);
  const sevenHourDataLoop = sevenHourForecast.map((hour, i) => {
    return (
      <div key={i} className="hourly-box">
        <h2 className="hourly-forecast hourly-time">{hour.FCTTIME.civil}</h2>
        <h6 className={`hourly-icon ${icons[hour.icon]}`}></h6>
        <h2 className="hourly-forecast hourly-temp">{hour.temp.english}°F</h2>
      </div>
    );
  });

  return (
    <section className="seven-hour-container">
      {sevenHourDataLoop}
    </section>
  );
};

export default SevenHour;
