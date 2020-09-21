import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import queryString from 'query-string';
import { notification } from "antd";

import i18n from "../../commons/utils/locales/i18n";

import VerifyEmailView from "./view";
import { routes } from "../router";
import { verifyEmail } from "./model/actions";
// import verifyEmailRepository from "./model/repository";

export default function VerifyEmail() {
  const errors = useSelector(state => state.verifyEmailState.errors);
  const isFetching = useSelector(state => state.verifyEmailState.isFetching);

  const dispatch = useDispatch();
  const history = useHistory();

  const dataFromURL = queryString.parse(history.location.search);

  function onVerifyEmailSuccess() {
    // goto login page
    history.push(routes.login);
    notification.success({
      message: i18n.t("verifyEmail.verify_email_success"),
      description: i18n.t("verifyEmail.verify_email_success_sub")
    });
  }

  // Set email, emailVerifyCode
  useEffect(() => {
    if (!isFetching) {
      console.log('start')
      verifyEmail({ ...dataFromURL }, onVerifyEmailSuccess);
    }
  }, []);

  return (
    <VerifyEmailView
      email={dataFromURL.email}
      errors={errors}
      loading={isFetching}
    />
  );
}
