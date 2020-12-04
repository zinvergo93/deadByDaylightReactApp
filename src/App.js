import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/main.scss";
import Survivor from "./survivorRoulette";
import Killer from "./killerRoulette";
import NavBar from "./navbar";
import Home from "./home";

import ReactAudioPlayer from "react-audio-player";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      play: true,
      pause: false,
    };
  }

  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <ReactAudioPlayer
            id="audio-player"
            src="Dead by Daylight theme.mp3"
            preload="auto"
            loop
          />
          <ReactAudioPlayer
            id="audio-player"
            src="Dead by Daylight theme.ogg"
            preload="auto"
            loop
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
