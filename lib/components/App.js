import React, {Component} from 'react';
import $ from 'jquery';
import CurrentWeatherCard from './CurrentWeatherCard';
import NavBar from './NavBar';
import SevenHour from './SevenHour'
import TenDay from './TenDay';
import LocationNotFound from './LocationNotFound';
const wuURL = `http://api.wunderground.com/api/878e77b9c3411d19/`;


export default class App extends Component {
  constructor(){
    super()
    this.state = {
      responseData: null,
      currentData : null,
      forecastData: null,
      hourlyData  : null,
    };
  }

  componentDidMount() {
    try {
      localStorage.getItem("weathrly")
    } catch(e) {
      console.error(e)
    }
    const lsLocation = localStorage.getItem("weathrly")
    if (lsLocation) {
      // this.getWeatherData(lsLocation);
    }
  }

  persistLocation(location){
    localStorage.setItem("weathrly", location)
  }

  handleData(weatherData){
    const keys = Object.keys(weatherData)
    this.setState({
      responseData: weatherData[keys[0]],
      currentData : weatherData[keys[1]],
      forecastData: weatherData[keys[2]],
      hourlyData  : weatherData[keys[3]],
    })
  }

  handleSubmit(location){
    this.getWeatherData(location);
  }

  getWeatherData(currentLocation) {
    $.get(`${wuURL}hourly/conditions/forecast10day/q/${currentLocation}.json`).then((data)=> {
      this.handleError(data);
      this.handleData(data);
      this.persistLocation(currentLocation);
    });
  }

  handleError(errorData){
    if(errorData.response.error) {
      this.setState({error: errorData.response.error})
    }
  }

  render() {
    return (
      <div>
        <NavBar handleSubmit={this.handleSubmit.bind(this)} />
        <h1 className="welcomeHeader">Weathrly</h1>
        <CurrentWeatherCard currentData={this.state.currentData} forecastData={this.state.forecastData} responseData={this.state.responseData}/>
        <SevenHour hourlyForecast={this.state.hourlyData} />
        <TenDay tenDayForecast={this.state.forecastData}/>
        {this.state.error && <LocationNotFound responseData={this.state.error}/> }
      </div>
    )
  }
}
