import React from "react";

import LayoutBackgroundImage from "../../../commons/components/Layout/LayoutBackgroundImage";
import VerifyEmailFormView from "./VerifyEmailFormView";

import "./view.css";

export default function VerifyEmail(props) {
  const {
    loading,
    errors,
    email,
  } = props;

  return (
    <LayoutBackgroundImage id="verify-page">
      <VerifyEmailFormView
        email={email}
        errors={errors}
        loading={loading}
      />
    </LayoutBackgroundImage>
  );
}
