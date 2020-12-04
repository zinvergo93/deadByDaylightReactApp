import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

export default class Music extends Component {
  constructor() {
    super();
    this.state = {
      play: false,
      pause: true,
      volume: 0.5,
      icon: faPlay,
    };
  }

  handlePlayPause = () => {
    let audio = document.getElementById("audio-player");
    if (this.state.play === false) {
      this.setState = {
        play: true,
        pause: false,
        icon: faPause,
      };
      console.log("play clicked");
      return audio.play();
    } else {
      this.setState = {
        play: false,
        pause: true,
        icon: faPlay,
      };
      console.log("pause clicked");
      return audio.pause();
    }
  };

  handleVolumeUp = () => {
    if (this.state.play < 1.0) {
      this.setState = {
        volume: this.state.volume + 0.1,
      };

      console.log("volume up clicked");
      //   return (document.getElementById(
      //     "audio-player"
      //   ).volume = this.state.volume);
    }
  };
  handleVolumeDown = () => {
    if (this.state.play > 0) {
      this.setState = {
        volume: this.state.volume - 0.1,
      };
      console.log("volume down clicked");
      //   return (document.getElementById(
      //     "audio-player"
      //   ).volume = this.state.volume);
    }
  };
  render() {
    return (
      <div className="icons">
        <FontAwesomeIcon
          className="icon-play-pause"
          icon={this.state.icon}
          onClick={this.handlePlayPause}
        />

        <FontAwesomeIcon
          className="icon-plus"
          icon={faPlus}
          onClick={this.handleVolumeUp}
        />
        <FontAwesomeIcon
          className="icon-minus"
          icon={faMinus}
          onClick={this.handleVolumeDown}
        />
      </div>
    );
  }
}
