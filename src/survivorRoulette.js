import React, { Component } from "react";
import SurvivorCharacter from "./survivorCharacterRoulette";
import SurvivorPerk from "./survivorPerkRoulette";

export default class Survivor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      survivor: [],
      survivorPerks: [],
    };
  }

  render() {
    return (
      <div>
        <h1>Hello from Survivor roulette page</h1>

        <div className="survivor-roulette">
          <SurvivorCharacter />
        </div>

        <div className="survivor-perk-container">
          <div className="survivor-perk-roulette">
            <div className="perk-container">
              <SurvivorPerk />
              <SurvivorPerk />
              <SurvivorPerk />
              <SurvivorPerk />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
