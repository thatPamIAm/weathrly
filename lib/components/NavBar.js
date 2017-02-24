import React, { Component} from 'react';

export default class NavBar extends Component {

  handleInput(e) {
    const inputText = e.target.value
    this.props.handleInput(inputText)
  }

  render() {
    return (
      <navbar>
        <input type="text" value={this.props.inputText}
          onChange={this.handleInput.bind(this)}/>
        <input type="submit" onClick={this.props.handleSubmit.bind(this)}/>
      </navbar>
    )
  }
}