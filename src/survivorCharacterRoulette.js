import React, { Component } from "react";
import axios from "axios";

export default class SurvivorCharacter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      survivors: [],
      randomSurvivor: [],
    };
  }

  getSurvivors = () => {
    axios
      .get("https://zi-dbd-roulette-api.herokuapp.com/survivors")
      .then((response) => {
        console.log("grabbing data", response.data);
        this.setState({
          survivors: this.state.survivors.concat(response.data),
        });
        return this.state.survivors;
      })
      .catch((error) => {
        console.log("get survivor list error", error);
      });
  };

  randomSurvivor = () => {
    const randSurv = this.state.survivors[
      Math.floor(Math.random() * this.state.survivors.length)
    ];
    console.log(randSurv);
    return this.setState({
      randomSurvivor: randSurv,
    });
  };

  componentDidMount() {
    this.getSurvivors();
  }

  render() {
    return (
      <div className="single-roulette">
        <button onClick={this.randomSurvivor} className="roulette-button">
          Roll Survivor
        </button>
        <h3>{this.state.randomSurvivor.name}</h3>

        <a href={this.state.randomSurvivor.url}>See more...</a>
      </div>
    );
  }
}
