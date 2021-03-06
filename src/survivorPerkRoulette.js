import React, { Component } from "react";
import axios from "axios";

export default class SurvivorPerk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      survivorPerks: [],
      randomPerk: [],
    };
  }

  getSurvivorPerks = () => {
    axios
      .get("https://zi-dbd-roulette-api.herokuapp.com/survivor-perks")
      .then((response) => {
        console.log("grabbing survivor perks", response.data);
        this.setState({
          survivorPerks: this.state.survivorPerks.concat(response.data),
        });
        return this.state.survivorPerks;
      })
      .catch((error) => {
        console.log("Error grabbing survivor perks", error);
      });
  };

  randomSurvivorPerk = () => {
    const randPerk = this.state.survivorPerks[
      Math.floor(Math.random() * this.state.survivorPerks.length)
    ];
    console.log(randPerk);
    return this.setState({
      randomPerk: randPerk,
    });
  };

  componentDidMount() {
    this.getSurvivorPerks();
  }

  render() {
    return (
      <div className="perk-container">
        <button onClick={this.randomSurvivorPerk} className="roulette-button">
          Roll Perk
        </button>

        <h3>{this.state.randomPerk.name}</h3>
        <h5> {this.state.randomPerk.teachable}</h5>
        <p>{this.state.randomPerk.description}</p>
      </div>
    );
  }
}
