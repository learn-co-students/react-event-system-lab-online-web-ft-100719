// Code Keypad Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends Component {

  buttonFocusHandler() {
    console.log('Good!')
  }

  buttonBlurHandler() {
    console.log('Hey! Eyes on me!')
  }
  render() {
    return (
      <button onFocus={this.buttonFocusHandler} onBlur={this.buttonBlurHandler}></button>
    )
  }
}