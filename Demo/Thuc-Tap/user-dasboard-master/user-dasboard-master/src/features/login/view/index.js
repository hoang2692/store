import React from "react";

import LayoutBackgroundImage from "../../../commons/components/Layout/LayoutBackgroundImage";
import LoginFormView from "./LoginFormView";

import "./view.css";
import "./view.responesive.css";

export default function Login(props) {
  const {
    onPressLogin,
    onPressRegister,
    loading,
    remember,
    email,
    password,
    onPressLoginFacebook,
    onPressLoginGoogle,
    onPressLoginTwitter,
    errors
  } = props;

  return (
    <LayoutBackgroundImage id="login-page">
      <LoginFormView
        loading={loading}
        onPressLogin={onPressLogin}
        onPressRegister={onPressRegister}
        valueRemember={remember}
        onPressLoginFacebook={onPressLoginFacebook}
        onPressLoginGoogle={onPressLoginGoogle}
        onPressLoginTwitter={onPressLoginTwitter}
        valueEmail={email}
        valuePassword={password}
        errors={errors}
        loading={loading}
      />
    </LayoutBackgroundImage>
  );
}
