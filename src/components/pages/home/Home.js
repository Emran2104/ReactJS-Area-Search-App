import React, { Component } from 'react'

import "./home.css"
import data from "./list/list.json"


export default class Home extends Component {
    constructor(){
        super()
        this.state = ({
            inp_area_code: "",
            dataOut : []
        })
    }



    getData = () => {
        this.setState({
            dataOut: data[this.state.inp_area_code]
        })

    }

    
    setCode = (e) => {
        this.setState({
            [e.target.id]: e.target.value
            
        })
    }

    render() {
        return (
            <div className="page-home">

                <div className="home-section">
                    <div className="home-section-form">
                        <div className="home-section-title">Search up Area</div>
                        <input id="inp_area_code" className="home-section-input" type="text" placeholder="Area Code" maxLength="10" onChange={this.setCode}/>
                        <button className="home-section-btn" onClick={this.getData}>Search</button>
                    </div>
                </div>

                <div className="home-section">
                    <div className="home-section-title">Result</div>
                    <div className="home-section-result">
                        <div className="home-section-result-form-main">
                             <p className="home-section-result-text"><span className="home-section-result-type">Area Code:</span>   {this.state.inp_area_code}</p>
                        </div>
                        {this.state.dataOut ? this.state.dataOut.map((data, index) => 
                            <div className="home-section-result-form" key={index}>
                                <div className="home-section-result-type-main">City Name</div>
                                <div className="home-section-result-type-main">City Distance</div>
                                <div className="home-section-result-text">{data.name}</div>
                                <div className="home-section-result-text">{data.num}</div>
                                <button className="home-section-result-btn" onClick={() => window.open("http://maps.google.com/?q=" + data.name + ", Stockholm Sweden")}>
                                        Maps
                                </button>
                            </div>
                        ) : "Invalid Code"}
                    </div>
                </div>

            </div>
        )
    }
}
