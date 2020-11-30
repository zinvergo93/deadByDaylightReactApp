import React, { Component } from "react";
import Survivor from "./survivor";

export default class SurvivorCharacter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      survivors: [],
    };
  }

  randomSurvivor = () => {
    const randomSurv = this.state.survivors[
      Math.floor(Math.random() * survivors.length)
    ];
    return randomSurv;
  };

  componentDidMount() {
    fetch(`http://localhost:5000/survivors`)
      .then((res) => res.json())
      .then((data) => this.setState({ survivors: data }));
  }
  render() {
    return <div>{this.randomSurvivor}</div>;
  }
}
