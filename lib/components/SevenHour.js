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

  return(
    <article>
      {sevenHourForecast.map((hour, i) => {
        return(
          <div key={i}>
            <h4 className="hourly-forecast">{hour.temp.english}°F</h4>
            <h4 className="hourly-forecast">{hour.FCTTIME.civil}</h4>
            <div className={icons[hour.icon]}></div>
          </div>
        );
      })}
    </article>
  )
}

export default SevenHour;
