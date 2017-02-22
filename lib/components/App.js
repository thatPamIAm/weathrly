import React, {Component} from 'react';
// import NavBar from './NavBar';

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      location:'',
      weatherdata: [],
    };
  }



  render() {
    return (
      <div>
        <h1>Welcome to our weather app</h1>
        <input type="text" value={this.state.location} onChange={(e)=> this.setState({location: e.target.value})}/>
        <input type="submit"/>
      </div>
    )
  }
}
