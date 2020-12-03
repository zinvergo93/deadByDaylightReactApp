import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";

import "./styles/main.scss";
import Survivor from "./survivorRoulette";
import Killer from "./killerRoulette";
import NavBar from "./navbar";
import Home from "./home";

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <ReactAudioPlayer
            src="./public/Dead by Daylight theme.mp3"
            src="./public/Dead by Daylight theme.ogg"
            autoPlay="true"
            loop="true"
          />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/survivor-roulette" component={Survivor} />
            <Route path="/killer-roulette" component={Killer} />
          </Switch>
        </Router>
      </div>
    );
  }
}
