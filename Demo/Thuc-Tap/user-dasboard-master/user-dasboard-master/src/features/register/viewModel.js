import React from "react";

import RegisterView from "./view";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { register } from "./model/actions";
import { notification } from "antd";
import i18n from "../../commons/utils/locales/i18n";

export default function RegisterViewModel() {
  const history = useHistory();
  const dispatch = useDispatch();

  // read states
  const errors = useSelector(state => state.registerState.errors);
  const isFetching = useSelector(state => state.registerState.isFetching);

  const handleOnClickLogin = () => {
    history.push("/login");
  };

  const handleOnClickRegister = values => {
    dispatch(
      register(values, success => {
        if (success) {
          history.push("login");
          notification.success({
            message: i18n.t("register.register_success"),
            description: i18n.t("register.register_success_sub")
          });
        }
      })
    );
  };

  return (
    <RegisterView
      onClickLogin={handleOnClickLogin}
      onClickRegister={handleOnClickRegister}
      errors={errors}
      loading={isFetching}
    />
  );
}
