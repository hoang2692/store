import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "../../../App.css";
import Menu from "../menu";
import Main from "../main";
import { Modules } from "../../../helpers/Constants";

export default class Body extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Menu />
        <Main modules={Modules} />
      </Router>
    );
  }
}
