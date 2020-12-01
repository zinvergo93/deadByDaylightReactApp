import React from "react";
import KillerCharacter from "./killerCharacterRoulette";
import KillerPerk from "./killerPerkRoulette";

export default function Killer() {
  return (
    <div>
      <h1>Killer Roulette</h1>

      <div className="killer-roulette">
        <KillerCharacter />
      </div>
      <div className="killer-perk-container">
        <div className="killer-perk-roulette">
          <div className="perk-container">
            <KillerPerk />
            <KillerPerk />
            <KillerPerk />
            <KillerPerk />
          </div>
        </div>
      </div>
    </div>
  );
}
