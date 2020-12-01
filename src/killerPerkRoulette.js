import React, { Component } from "react";
import axios from "axios";

export default class KillerPerk extends Component {
  constructor() {
    super();
    this.state = {
      killerPerks: [],
    };
  }

  getkillerPerks = () => {
    axios
      .get("http://localhost:5000/killer-perks")
      .then((response) => {
        console.log("grabbing killer perks", response.data);
      })
      .catch((error) => {
        console.log("Error grabbing killer perks", error);
      });
  };

  componentDidMount() {
    this.getkillerPerks();
  }
  render() {
    return <div>Random killer Perk</div>;
  }
}
