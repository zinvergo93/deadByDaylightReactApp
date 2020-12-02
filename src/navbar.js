import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(props) {
  return (
    <div className="page-nav">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/survivor-roulette">Survivor Roulette</NavLink>
      <NavLink to="/killer-roulette">Killer Roulette</NavLink>
    </div>
  );
}

export default NavBar;
