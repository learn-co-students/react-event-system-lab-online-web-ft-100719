// Code Keypad Component Here
import React from 'react';

export default class EyesOnMe extends React.Component {
    constructor(){
        super()

    }
    handleKeyUp = () => {
        console.log('Entering password...')
    }
    render(){
        return (
        <div>
            <input type="password" onKeyUp={this.handleKeyUp}></input>

        </div>
        )
    }
}