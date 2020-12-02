import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div className="main-page">
      <div className="page-container">
        <div className="main-image">
          <div className="instructions">
            <p>The rules are simple.</p>
            <p>
              On both Survivor and Killer pages, you are able to roll for a
              random character, and 4 perks.
            </p>
            <p>
              You are also able to re-roll a single perk if you don't have it!
            </p>
            <p>
              (or if you simply don't want to use it, which is highly
              discouraged).
            </p>
            <p>See you in the fog! Click on the links below to navigate.</p>
          </div>
        </div>
        <Link to="/survivor-roulette">Go to Survivor Roulette</Link>
        <Link to="/killer-roulette">Go to Killer Roulette</Link>
      </div>
      <div className="footer">
        <p>
          This is a fan-made page. All rights are reserved. Copyright &#169;
          2016 Behaviour Interactive
        </p>
      </div>
    </div>
  );
};
export default Home;
