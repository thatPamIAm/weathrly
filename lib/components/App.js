import React, {Component} from 'react';
import $ from 'jquery';
import CurrentWeatherCard from './CurrentWeatherCard';

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      location:'',
      responseData: null,
      currentData: null,
      forecastData: null,
      hourlyData: null,
    };
  }

  componentDidMount() {
    const lsLocation = localStorage.getItem("weathrly")
    if (lsLocation) {
      this.getWeatherData(lsLocation);
    }
  }


  handleInput(e) {
    this.setState({
      location: e.target.value,
    })
  }

  handleSubmit(){
    const currentLocation = this.state.location
    this.getWeatherData(currentLocation);
  }

  getWeatherData(currentLocation) {
    $.get(`http://api.wunderground.com/api/878e77b9c3411d19/hourly/conditions/forecast10day/q/${currentLocation}.json`).then((data)=> {
      this.persistLocation(currentLocation)
      this.handleData(data)
    })
  }

  handleData(weatherData){
    const keys = Object.keys(weatherData)
    this.setState({
      location:'',
      responseData:weatherData[keys[0]],
      currentData:weatherData[keys[1]],
      forecastData:weatherData[keys[2]],
      hourlyData:weatherData[keys[3]],
    })
  }

  persistLocation(location){
    localStorage.setItem("weathrly", location)
  }

  render() {
    return (
      <div>
        <navbar>
          <input type="text" value={this.state.location} onChange={this.handleInput.bind(this)}/>
          <input type="submit" onClick={this.handleSubmit.bind(this)}/>
        </navbar>
        <h1 className="welcomeHeader">Weathrly</h1>
        <CurrentWeatherCard currentData={this.state.currentData} forecastData={this.state.forecastData}/>
      </div>
    )
  }
}
