import React, { Component } from "react";

export default class Survivor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      survivor: this.props.survivor,
    };
  }
}
