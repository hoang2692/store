import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "../../../App.css";

export default class Header extends Component {
  state = {};

  _onClickItem = () => {
    var x = document.getElementById("navba");
    if (x.className === "topnav") {
      x.className = "topnav responsive";
    } else {
      x.className = "topnav";
    }
  };

  render() {
    return <div></div>;
  }
}
