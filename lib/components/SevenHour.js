import React from 'react';
import WeatherIcons from '../weather_icons/WeatherIcons'

const SevenHour = ({hourlyForecast}) => {
  if(!hourlyForecast){
    return(
      <div></div>
    )
  }

  const icons = new WeatherIcons();
  const sevenHourForecast = hourlyForecast.slice(0, 7)
  const sevenHourDataLoop = sevenHourForecast.map((hour, i) => {
    return(
      <div key={i} className="hourly-box">
        <h2 className="hourly-forecast hourly-time" tabIndex="0">{hour.FCTTIME.civil}</h2>
        <h6 className={`hourly-icon ${icons[hour.icon]}`} tabIndex="0" alt="hourly weather icon" aria-label="hourly weather icon"></h6>
        <h2 className="hourly-forecast hourly-temp" tabIndex="0">{hour.temp.english}°F</h2>
      </div>
    );
  })

  return(
    <section className="seven-hour-container">
      {sevenHourDataLoop}
    </section>
  )
}

export default SevenHour;
