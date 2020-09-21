import React, { Component } from "react";

import Banner from "../Banner";
import Info from "../Info";
import Address from "../Address";

export default class Render extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Info />
        <Address />
      </div>
    );
  }
}
