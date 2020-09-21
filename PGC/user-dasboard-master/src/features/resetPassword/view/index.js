import React from "react";

import LayoutBackgroundImage from "../../../commons/components/Layout/LayoutBackgroundImage";
import ResetPasswordFormView from "./ResetPasswordFormView";

import "./styles.css";

export default function ResetPassword(props) {
  const {
    onClickResetPassword,
    loading,
    errors
  } = props;

  return (
    <LayoutBackgroundImage id="reset-password-page">
      <ResetPasswordFormView
        loading={loading}
        onClickResetPassword={onClickResetPassword}
        errors={errors}
      />
    </LayoutBackgroundImage>
  );
}
