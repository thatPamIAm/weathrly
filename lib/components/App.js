import React, {Component} from 'react';
import $ from 'jquery';
import CurrentWeatherCard from './CurrentWeatherCard';
import NavBar from './NavBar';
const wuURL = `http://api.wunderground.com/api/878e77b9c3411d19/`;

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      location    : '',
      responseData: null,
      currentData : null,
      forecastData: null,
      hourlyData  : null,
    };
  }

  componentDidMount() {
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
      location    : '',
      responseData: weatherData[keys[0]],
      currentData : weatherData[keys[1]],
      forecastData: weatherData[keys[2]],
      hourlyData  : weatherData[keys[3]],
    })
  }

  handleInput(inputValue) {
    this.setState({
      location: inputValue,
    });
  }

  handleSubmit(){
    const currentLocation = this.state.location
    this.getWeatherData(currentLocation);
  }

  getWeatherData(currentLocation) {
    console.log(currentLocation);
    $.get(`${wuURL}hourly/conditions/forecast10day/q/${currentLocation}.json`).then((data)=> {
      this.persistLocation(currentLocation);
      this.handleData(data);
    });
  }

  render() {
    return (
      <div>
        <NavBar handleSubmit={this.handleSubmit.bind(this)}
          handleInput={this.handleInput.bind(this)} inputText={this.state.location}/>
        <h1 className="welcomeHeader">Weathrly</h1>
        <CurrentWeatherCard currentData={this.state.currentData}
          forecastData={this.state.forecastData}/>
      </div>
    )
  }
}
