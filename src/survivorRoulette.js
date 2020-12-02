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
      <div className="survivor">
        <div className="page-container">
          <div className="survivor-roulette">
            <div className="page-header">
              <h1>Survivor Roulette</h1>
            </div>

            <div className="character-roulette">
              <SurvivorCharacter />
            </div>

            <div className="perk-roulette">
              <div className="perk-container">
                <SurvivorPerk />
                <SurvivorPerk />
                <SurvivorPerk />
                <SurvivorPerk />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
