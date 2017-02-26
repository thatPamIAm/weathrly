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
      <div className='tenDayData' key={i}>
        <h4 className='tenDayDay ten-day'>{day.date.weekday_short}</h4>
        <h4 className='tenDayHi ten-day'>Hi {day.high.fahrenheit}</h4>
        <h4 className='tenDayLo ten-day'>Lo {day.low.fahrenheit}</h4>
        <div className={icons[day.icon]}></div>
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
