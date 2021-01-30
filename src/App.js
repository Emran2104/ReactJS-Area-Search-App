import ReactGA from 'react-ga';
import React, { Component } from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"

import './App.css';
import Header from "./components/layout/header/Header";
import Home from './components/pages/home/Home';


ReactGA.initialize('UA-179121302-1');


export default class App extends Component {
  
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />

          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>

        </BrowserRouter>
      </div>
    )
  }
}
