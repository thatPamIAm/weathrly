import React, { Component} from 'react';
import $ from 'jquery';
import $ui from 'jquery-ui'

export default class NavBar extends Component {
  constructor() {
    super()
    this.state = {
      location : "",
      autocomplete: [],
    };
  }

  handleInput(e) {
    const inputValue = e.target.value;
    this.setState({
      location : inputValue
    })
    this.autoCompleteApiGenerator(inputValue)
  }

  autoCompleteApiGenerator(inputValue) {
    $.getJSON(`http://autocomplete.wunderground.com/aq?cb=?&query=${inputValue}`).then((data) => {
      this.state.autocomplete = []
      data.RESULTS.forEach( location => {
        if(inputValue.length > 2) {
          this.state.autocomplete.push(location.name)
          this.handleAutoComplete()
        }
      });
    });
  }

  handleAutoComplete() {
    $('.text-input').autocomplete({
      minLength : 2,
      source    : this.state.autocomplete,
      open      : () => $('.ui-menu').width(290),
      select    : (event, ui) => {
        this.setState({
          location: ui.item.value
        })
      }
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
