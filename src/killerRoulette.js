import React from "react";
import KillerCharacter from "./killerCharacterRoulette";
import KillerPerk from "./killerPerkRoulette";

export default function Killer() {
  return (
    <div>
      <h1>Hello from Killer Roulette page</h1>

      <button>Re-Roll Killer</button>
      <button>Re-Roll Perks</button>

      <div className="killer-roulette">
        <KillerCharacter />
      </div>
      <div className="killer-perk-container">
        <div className="killer-perk-roulette">
          <div className="perk-container">
            <KillerPerk /> PERK 1
          </div>
          <div className="perk-container">PERK 2</div>
          <div className="perk-container">PERK 3</div>
          <div className="perk-container">PERK 4</div>
        </div>
      </div>
    </div>
  );
}
