// Code EyesOnMe Component Here
import React, { Component } from 'react'

export default class EyesOnMe extends Component {

  handleFocus = () => {
    console.log('Good!')
  }

  handleBlur = () => {
    console.log('Hey! Eyes on me!')
  }



  render(){
    return (
      <div>
        <h1>Eye on me </h1>
        <button onFocus={this.handleFocus} onBlur={this.handleBlur}>Eyes on Me button</button>
      </div>
    )
  }

}
