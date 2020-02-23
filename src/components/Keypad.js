import React, { Component } from "react";

class Keypad extends Component {
  enteringPassword = () => {
    console.log("Entering password...");
  };

  render() {
    return (
      <div>
        <input onKeyUp={this.enteringPassword} type="password" />
      </div>
    );
  }
}

export default Keypad;
