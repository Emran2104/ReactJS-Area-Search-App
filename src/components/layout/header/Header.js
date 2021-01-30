import React, { Component } from 'react'

import "./header.css"

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-div">
                    <button className="header-menu">Home</button>
                </div>
                <div className="header-div">
                    <button className="header-menu">List (coming soon)</button>
                </div>
            </div>
        )
    }
}
