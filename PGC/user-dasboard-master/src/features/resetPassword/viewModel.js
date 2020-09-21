import React from "react";
import queryString from "query-string";
import ResetPasswordView from "./view";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { resetPassword } from "./model/actions";
import { notification } from "antd";
import i18n from "../../commons/utils/locales/i18n";

export default function ResetPasswordViewModel() {
  const history = useHistory();
  const dispatch = useDispatch();

  // read states
  const errors = useSelector(state => state.resetPasswordState.errors);
  const isFetching = useSelector(state => state.resetPasswordState.isFetching);
  const dataFromURL = queryString.parse(history.location.search);

  const handleOnClickResetPassword = values => {
    dispatch(
      resetPassword({
        ...dataFromURL,
        newPassword: values['newPassword'],
      }, success => {
        if (success) {
          history.push("login");
          notification.success({
            message: i18n.t("resetPassword.reset_password_success"),
            description: i18n.t("resetPassword.reset_password_success_sub")
          });
        }
      })
    );
  };

  return (
    <ResetPasswordView
      onClickResetPassword={handleOnClickResetPassword}
      errors={errors}
      loading={isFetching}
    />
  );
}
