import React from "react";
import SurvivorCharacter from "./survivorCharacterRoulette";
// import SurvivorPerk from "./survivorPerkRoulette";

export default function Survivor() {
  return (
    <div>
      <h1>Hello from Survivor roulette page</h1>

      <button>Re-Roll Survivor</button>
      <button>Re-Roll Perks</button>
      <div className="survivor-roulette">
        <div>
          Random Survivor rendered here
          <SurvivorCharacter />
        </div>
      </div>
      <div className="survivor-perk-container">
        <div className="survivor-perk-roulette">
          <div className="perk-container">{/* <SurvivorPerk /> */}Perk 1</div>
          <div className="perk-container">{/* <SurvivorPerk /> */}Perk 2</div>
          <div className="perk-container">{/* <SurvivorPerk /> */}Perk 3</div>
          <div className="perk-container">{/* <SurvivorPerk /> */}Perk 4</div>
        </div>
      </div>
    </div>
  );
}
