import React from "react";

import LayoutBackgroundImage from "../../../commons/components/Layout/LayoutBackgroundImage";
import RegisterFormView from "./RegisterFormView";

import "./styles.css";
import "./view.responsive.css";

export default function Login(props) {
  const {
    onClickRegister,
    onClickLogin,
    onClickVerifyPhone,
    loading,
    errors
  } = props;

  return (
    <LayoutBackgroundImage id="register-page">
      <RegisterFormView
        loading={loading}
        onClickRegister={onClickRegister}
        onClickLogin={onClickLogin}
        onClickVerifyPhone={onClickVerifyPhone}
        errors={errors}
      />
    </LayoutBackgroundImage>
  );
}
