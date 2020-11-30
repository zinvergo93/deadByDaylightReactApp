import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Survivor from "./survivorRoulette"
import Killer from "./killerRoulette"
import NavBar from "./navbar"
import Home from "./home"

export default class App extends Component {
  constructor() {
    super();
    this.state = {  };
  }

  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component = {Home} />
          <Route path="/survivor-roulette" component = {Survivor} />
          <Route path="/killer-roulette" component = {Killer} />
        </Switch>
      </Router>
    )
  }
}
