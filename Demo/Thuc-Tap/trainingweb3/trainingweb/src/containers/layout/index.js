import React, { Component } from "react";

import Header from "./header";
import Body from "./body";
import Footer from "./footer";

export default class index extends Component {
  state = {};
  render() {
    return (
      <div id="root">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}
