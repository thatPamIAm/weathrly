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

  // handleInput(e) {
  //   const inputValue = e.target.value;
  //   this.setState({
  //     location : inputValue
  //   })
  // }
  handleInput(e) {
      const inputValue = e.target.value;
      let val = `http://autocomplete.wunderground.com/aq?cb=?&query=${inputValue}`
      $.getJSON(val).then((data) => {
        this.state.autocomplete = []
        data.RESULTS.forEach( location => {
          console.log(location.name)
          if(inputValue.length > 2) {
            this.state.autocomplete.push(location.name)
            this.handleAutoComp()
          }
        });
      });
      this.setState({
        location : inputValue
      })
    }

  handleAutoComp() {
    $('.text-input').autocomplete({
      minLength: 3,
      source: this.state.autocomplete,
      delay: 500,
      open: () => $('.ui-menu').width(300),
      select: (event, ui) => {
        console.log(ui.item.value)
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