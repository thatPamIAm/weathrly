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
        <input className="textInput" type="text" value={this.state.location} onChange={(e) => this.handleInput(e)}/>
        <input className="submitBtn" type="submit" onClick={() => this.handleSubmit()}/>
      </navbar>
    )
  }
}