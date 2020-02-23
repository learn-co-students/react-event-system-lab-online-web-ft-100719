// Code EyesOnMe Component Here
import React from 'react';

export default class EyesOnMe extends React.Component {
    constructor(){
        super()

    }

    handleFocus = () => {
        console.log("Good!")
    }

    handleBlur = () => {
        console.log('Hey! Eyes on me!')
    }

    render(){
        return(
            <div>
                <button onFocus={this.handleFocus} onBlur={this.handleBlur}>Eyes On Me</button>
            </div>
        )
    }
}