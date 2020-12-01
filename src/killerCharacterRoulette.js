import React, { Component } from "react";
import axios from "axios";

export default class KillerCharacter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      killers: [],
    };
  }

  getKillers = () => {
    axios
      .get("http://localhost:5000/killers")
      .then((response) => {
        console.log("grabbing data", response.data);
        this.setState({
          killers: this.state.killers.concat(response.data.all_killers),
        });
      })
      .catch((error) => {
        console.log("get killer list error", error);
      });

    // return (this.setState =
    //   survivors: this.state.survivors[Math.floor(Math.random() * survivors.length)]);
  };
  componentDidMount() {
    this.getKillers();
  }
  render() {
    return <div>Random Killer Character</div>;
  }
}
