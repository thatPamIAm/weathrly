import React, { Component} from 'react';

export default class NavBar extends Component {
  constructor() {
    super()
    this.state = {
      location : "",
    };
  }

  handleInput(e) {
    const inputValue = e.target.value;
    this.setState({
      location : inputValue
    })
  }

  handleSubmit() {
    this.props.handleSubmit(this.state.location);
    this.setState({
      location : "",
    })
  }

  render() {
    return (
      <navbar>
        <input className="text-input" type="text" value={this.state.location} placeholder='Search Location' onChange={(e) => this.handleInput(e)}/>
        <input className="submit-btn" type="submit" value='Search' onClick={() => this.handleSubmit()}/>
      </navbar>
    )
  }
}
