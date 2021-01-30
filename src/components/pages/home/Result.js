import React, { Component } from 'react'

export default class Result extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            dataOut: this.props.dataOut
        })
    }


    render() {
        console.log(this.props.dataOut)
        return (
            this.state.dataOut.map((data) => 
                <div className="home-section-result-form">
                    <div className="home-section-result-type">City Name:</div>
                    <div className="home-section-result-text">{data.name}</div>
                </div>
            )
        
            )
        
    }
}
