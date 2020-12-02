import React from "react";
import KillerCharacter from "./killerCharacterRoulette";
import KillerPerk from "./killerPerkRoulette";

export default function Killer() {
  return (
    <div className="killer">
      <div className="page-container">
        <div className="killer-roulette">
          <div className="page-header">
            <h1>Killer Roulette</h1>
          </div>

          <div className="character-roulette">
            <KillerCharacter />
          </div>
          <div className="perk-roulette">
            <div className="perk-container">
              <KillerPerk />
              <KillerPerk />
              <KillerPerk />
              <KillerPerk />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
