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
    <section>
      {forecastArray.map((day, i) => {
        return(
          <div key={i}>
            <h4 className="ten-day">{day.date.weekday_short}</h4>
            <h4 className="ten-day">Low {day.low.fahrenheit}</h4>
            <h4 className="ten-day">Hi {day.high.fahrenheit}</h4>
            <div className={icons[day.icon]}></div>
          </div>
        );
      })}
    </section>
  )
};

export default TenDay;
