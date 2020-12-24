import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./App.css"

export default class Home extends Component {
  render() {
    return (
      <Router>
        <div className="MainAppContainer"> 
          <Switch>
            {/* <Route path="/" exact component={Home}></Route> */}
            <div>akjshf </div>
              
          </Switch>
        </div>
          
      </Router>
    )
  }
}
