import React from 'react';
import WeatherIcons from '../weather_icons/WeatherIcons'

const SevenHour = ({hourlyForecast}) => {
  if(!hourlyForecast){
    return(
      <div></div>
    )
  }

  const icons = new WeatherIcons();
  const sevenHourForecast = hourlyForecast.slice(0, 8)

  return(
    <section className="seven-hour-container">
      {sevenHourForecast.map((hour, i) => {
        return(
          <div key={i} className="hourly-box">
            <h2 className="hourly-forecast">{hour.FCTTIME.civil}</h2>
            <h6 className={icons[hour.icon]}></h6>
            <h2 className="hourly-forecast temp">{hour.temp.english}°F</h2>
          </div>
        );
      })}
    </section>
  )
}

export default SevenHour;
