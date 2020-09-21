import React, { Component } from "react";
import { connect } from "react-redux";

import Render from "./components/Render";
import { registerWithEmail } from "../../../reducers/user/redux/registerWithEmail";

export class Register extends Component {
  state = {
    form: {},
  };

  _onChangeValue = (evt) => {
    this.setState({
      form: { ...this.state.form, [evt.target.name]: evt.target.value },
    });
  };

  _onCreate = () => {
    this.props.registerWithEmail(this.state.form);
  };

  render() {
    return (
      <Render onChangeValue={this._onChangeValue} onCreate={this._onCreate} />
    );
  }
}

const mapStateToProp = (state) => ({});

const mapDispatchToProp = {
  registerWithEmail,
};

export default connect(mapStateToProp, mapDispatchToProp)(Register);
