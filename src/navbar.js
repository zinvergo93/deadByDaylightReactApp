import React from "react";
import { NavLink } from "react-router-dom";
import Music from "./music";
// import ReactAudioPlayer from "react-audio-player";

function NavBar() {
  return (
    <div className="page-nav">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/survivor-roulette">Survivor Roulette</NavLink>
      <NavLink to="/killer-roulette">Killer Roulette</NavLink>
      {/* <ReactAudioPlayer
        id="audio-player"
        src="Dead by Daylight theme.mp3"
        preload="auto"
        autoPlay
        loop
      />
      <ReactAudioPlayer
        id="audio-player"
        src="Dead by Daylight theme.ogg"
        preload="auto"
        autoPlay
        loop
      /> */}
      <Music />
    </div>
  );
}

export default NavBar;
