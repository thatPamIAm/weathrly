import React, { Component} from 'react';

export default class NavBar extends Component {
  constructor(){
    super()
    this.state = {
      inputValue: ""
    };
  }

  getWeatherData(){
    this.props.grabUserInput(this.state.inputValue)
    this.setState({
      inputValue: '',
    });
  }

  handleInput(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }

  render() {
    return (
      <navbar>
        <input type="text" value={this.state.inputValue}
          onChange={this.handleInput.bind(this)}/>
        <input type="submit" onClick={this.getWeatherData.bind(this)}/>
      </navbar>
    )
  }
}
