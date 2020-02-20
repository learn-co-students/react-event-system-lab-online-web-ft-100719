import React, { Component } from 'react'; 

class KeyPad extends Component {
    handleKeyUp = () => {
        console.log('Entering password...')
    }

    render() {
        return(
            <input type="password" onKeyUp={this.handleKeyUp} ></input>
        )
    }
}

export default KeyPad
