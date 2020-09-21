import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deviceDetect
} from "react-device-detect";
import publicIp from "public-ip";
import moment from "moment";

import LoginView from "./view";
import { routes } from "../router";
import { login, loginBySocialAccount, authenticate } from "./model/actions";
import loginRepository from "./model/repository";
import loginService from "../../commons/utils/services/LoginService";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const isAuthenticated = useSelector(
    state => state.loginState.isAuthenticated
  );
  const errors = useSelector(state => state.loginState.errors);
  const isFetching = useSelector(state => state.loginState.isFetching);

  const dispatch = useDispatch();
  const history = useHistory();

  function onLoginSuccess() {
    // goto dashboard
    history.push(routes.dashboard);
  }

  // Set email, password if saved
  useEffect(() => {
    const fetchLocalData = async () => {
      const {
        email,
        password,
        remember
      } = await loginRepository.getEmailPassword();

      if (email) setEmail(email);
      if (password) setPassword(password);
      if (remember) setRemember(Boolean(remember));
    };

    fetchLocalData();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      onLoginSuccess();
    } else {
      dispatch(authenticate());
    }
  }, [isAuthenticated]);

  const handleOnPressLogin = values => {
    const { email, password, remember } = values;
    dispatch(login({ email, password, remember }));
  };


  const handleOnPressLoginFacebook = async (respone) => {
    if (respone.error) {
      return;
    }
    const infoDevice = deviceDetect();
    const ipv4 = await publicIp.v4();
    const insertObj = {
      registerType: 'facebook',
      userID: respone && respone.id,
      email: respone && respone.email,
      firstName: respone && respone.first_name,
      lastName: respone && respone.last_name,
      accesstoken: respone && respone.accessToken,
      expirationDate: respone && moment().add(respone.expiresIn, 'seconds'),
      avatar: respone && respone.picture && respone.picture.data && respone.picture.data.url,
      browserName: infoDevice.browserName,
      deviceType: infoDevice.osName,
      ipv4,
    };
    dispatch(loginBySocialAccount({
      type: loginService.LOGIN_TYPES.FACEBOOK,
      ...insertObj
    }));
  };

  const handleOnPressLoginGoogle = async (respone) => {
    if (respone.error) {
      return;
    }
    const { profileObj, tokenObj } = respone;
    const infoDevice = deviceDetect();
    const ipv4 = await publicIp.v4();
    const insertObj = {
      registerType: 'google',
      userID: profileObj && profileObj.googleId,
      email: profileObj && profileObj.email,
      firstName: profileObj && profileObj.familyName,
      lastName: profileObj && profileObj.givenName,
      accesstoken: tokenObj && tokenObj.access_token,
      expirationDate: tokenObj && moment(tokenObj.expires_at),
      avatar: profileObj && profileObj.imageUrl,
      browserName: infoDevice.browserName,
      deviceType: infoDevice.osName,
      ipv4,
    };
    dispatch(loginBySocialAccount({
      type: loginService.LOGIN_TYPES.GOOGLE,
      ...insertObj
    }));
  };

  const handleOnPressRegister = () => {
    history.push(routes.register);
  };

  return (
    <LoginView
      onPressLogin={handleOnPressLogin}
      onPressLoginFacebook={handleOnPressLoginFacebook}
      onPressLoginGoogle={handleOnPressLoginGoogle}
      onPressRegister={handleOnPressRegister}
      email={email}
      password={password}
      remember={remember}
      errors={errors}
      loading={isFetching}
    />
  );
}
