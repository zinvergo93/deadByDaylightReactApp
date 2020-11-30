import React from "react";

export default function Killer() {
  return (
    <div>
      <h1>Hello from Killer Roulette page</h1>

      <button>Re-Roll Killer</button>
      <button>Re-Roll Perks</button>

      <div className="killer-roulette">
        <div>Random Killer rendered here</div>
      </div>
      <div className="killer-perk-container">
        <div className="killer-perk-roulette">
          <div className="perk-container">PERK 1</div>
          <div className="perk-container">PERK 2</div>
          <div className="perk-container">PERK 3</div>
          <div className="perk-container">PERK 4</div>
        </div>
      </div>
    </div>
  );
}
