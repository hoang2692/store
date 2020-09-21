import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import RenderMain from "./components/RenderMain";

export default class Main extends Component {
  render() {
    const { modules } = this.props;
    const data = modules.sort((a, b) => b.link.length - a.link.length);
    console.log();
    return (
      <Switch>
        <Route exact path="/">
          <RenderMain component="home" link="" name="Trang chủ" />
        </Route>
        <Route path="/home">
          <RenderMain component="home" link="" name="Trang chủ" />
        </Route>
        {data.map((e) => {
          return (
            <Route path={"/" + e.moduleName + e.link} key={e.id}>
              <RenderMain component={e.moduleName + e.link} name={e.title} />
            </Route>
          );
        })}
      </Switch>
    );
  }
}
