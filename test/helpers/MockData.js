const CurrentData = {
  display_location: {
    full: 'Den'
  },
  temp_f: 70
};

const ForecastData = {
  txt_forecast: {
    forecastday:[{
      title: 'Monday',
      fcttext: 'Clear all day',
    }]
  },
  simpleforecast: {
    forecastday:[{
      conditions: 'Clear',
      high: {
        fahrenheit: 70,
      },
      low: {
        fahrenheit: 32,
      }
    }]
  }
};

export default { CurrentData, ForecastData };

