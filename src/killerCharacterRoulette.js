import React, { Component } from "react";
import axios from "axios";

export default class KillerCharacter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      killers: [],
      randomKiller: [],
    };
  }

  getKillers = () => {
    axios
      .get("http://localhost:5000/killers")
      .then((response) => {
        console.log("grabbing data", response.data);
        this.setState({
          killers: this.state.killers.concat(response.data),
        });
        return this.state.killers;
      })
      .catch((error) => {
        console.log("get killer list error", error);
      });
  };

  randomKiller = () => {
    const randKill = this.state.killers[
      Math.floor(Math.random() * this.state.killers.length)
    ];
    console.log(randKill);
    return this.setState({
      randomKiller: randKill,
    });
  };
  componentDidMount() {
    this.getKillers();
  }
  render() {
    return (
      <div>
        <button onClick={this.randomKiller} className="roulette-button">
          Roll Killer
        </button>
        <h3>{this.state.randomKiller.name}</h3>
        <a href={this.state.randomKiller.url}>See more...</a>
      </div>
    );
  }
}
