import React, {Component} from 'react';
import $ from 'jquery';
// import NavBar from './NavBar';

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      location:'',
      weatherdata: [],
    };
  }

  handleInput(e) {
    this.setState({
      location: e.target.value,
    })
  }

  handleSubmit(){
    const currentLocation = this.state.location
    $.get(`http://api.wunderground.com/api/878e77b9c3411d19/forecast/q/${currentLocation}.json`).then((data)=> {
      this.setState({
        location:'',
        weatherdata: data,
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Welcome to our weather app</h1>
        <input type="text" value={this.state.location} onChange={(e) => this.handleInput(e)}/>
        <input type="submit" onClick={() => this.handleSubmit()}/>
      </div>
    )
  }
}
