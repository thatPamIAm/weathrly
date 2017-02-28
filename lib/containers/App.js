import React, { Component } from 'react';
import CurrentWeatherCard from '../components/CurrentWeatherCard';
import NavBar from '../components/NavBar';
import SevenHour from '../components/SevenHour';
import TenDay from '../components/TenDay';
import LocationNotFound from '../components/LocationNotFound';
const wuURL = 'http://api.wunderground.com/api/878e77b9c3411d19/';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      response: null,
      currentForecast: null,
      forecast: null,
      hourlyForecast: null,
    };
  }

  componentDidMount() {
    try {
      const lsLocation = localStorage.getItem('weathrly');
      if (lsLocation) {
        // this.getWeatherData(lsLocation);
      }
    } catch (e) {
      console.error(e);
    }
  }

  persistLocation(location) {
    localStorage.setItem('weathrly', location);
  }

  handleData({ response, current_observation, forecast, hourly_forecast }) {
    this.setState({
      response: response,
      currentForecast: current_observation,
      forecast: forecast,
      hourlyForecast: hourly_forecast,
    });
  }

  handleSubmit(location) {
    this.getWeatherData(location);
    this.setState({
      error: '',
    });
  }

  getWeatherData(currentLocation) {
    $.get(`${wuURL}hourly/conditions/forecast10day/q/${currentLocation}.json`)
      .then((resp) => {
        this.handleResponse(resp, currentLocation);
      })
    .catch(e => console.error(e));
  }

  handleResponse(resp, currentLocation) {
    if (resp.response.error) {
      this.handleError(resp.response.error);
      return;
    }
    this.handleData(resp);
    this.persistLocation(currentLocation);
  }

  handleError(errorReponse) {
    this.setState({
      response: null,
      currentForecast: null,
      forecast: null,
      hourlyForecast: null,
      error: errorReponse,
    });
  }

  render() {
    const { currentForecast, forecast, response, hourlyForecast } = this.state;
    return (
      <div>
        <NavBar handleSubmit={ location => this.handleSubmit(location) } />
        <h1 className='main-header'>Weathrly</h1>
        <CurrentWeatherCard
          currentForecast={currentForecast}
          forecast={forecast}
          response={response}
        />
        <SevenHour hourlyForecast={hourlyForecast} />
        <TenDay tenDayForecast={forecast} />
        { this.state.error && <LocationNotFound response={this.state.error}/> }
      </div>
    );
  }
}
