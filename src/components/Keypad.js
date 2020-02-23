import React, { Component } from 'react'

class Keypad extends Component {
  handleKeyUp = () => {
      console.log('Entering password...')
  }
  render() {
    return (
      <div>
        <form>
          <input type="password" onKeyUp={this.handleKeyUp} />
        </form>
      </div>
    )
  }
}

export default Keypad