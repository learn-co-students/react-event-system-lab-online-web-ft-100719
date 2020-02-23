// Code Keypad Component Here
import React, { Component } from "react"

class Keypad extends React.Component {
  constructor() {
    super()

  }

  handleKeyUp = () => {
    console.log("Entering password...")
  }

  render() {
    return (
      <div> 
        <label for="pwd">Password:</label>
        <input type="password" id="pwd" name="pwd" 
        onKeyUp={this.handleKeyUp}></input>
      </div>
      
    )
  }
}

export default Keypad