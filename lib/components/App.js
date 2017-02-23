import React, {Component} from 'react';
import $ from 'jquery';
import CurrentWeatherCard from './CurrentWeatherCard';

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      location:'',
      weatherData: [],
    };
  }

  handleInput(e) {
    this.setState({
      location: e.target.value,
    })
  }

  handleSubmit(){
    const currentLocation = this.state.location
    $.get(`http://api.wunderground.com/api/878e77b9c3411d19/hourly/conditions/forecast10day/q/${currentLocation}.json`).then((data)=> {
      this.state.weatherData.push(data)
      this.setState({
        location:'',
        weatherData: this.state.weatherData,
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Welcome to our weather app</h1>
        <input type="text" value={this.state.location} onChange={this.handleInput.bind(this)}/>
        <input type="submit" onClick={this.handleSubmit.bind(this)}/>
        <CurrentWeatherCard weatherData={this.state.weatherData}/>
      </div>
    )
  }
}
