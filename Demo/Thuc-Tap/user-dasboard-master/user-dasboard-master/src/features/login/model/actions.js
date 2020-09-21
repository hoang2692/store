import {
  loginStart,
  loginSuccess,
  loginFailure,
  authenticateStart,
  authenticateSuccess,
  authenticateFailure
} from "./reducer";
import LoginService, {
  LOGIN_TYPES
} from "../../../commons/utils/services/LoginService";
import { storeUserData, resetProfileState } from "../../profile/model/reducer";
import { resetLoginState } from "./reducer";
import profileRepository from "../../profile/model/repository";
import loginRepository from "./repository";

/**
 * Handle logic for feature login
 * @param {String} email
 * @param {String} password
 * @param {Boolean} remember
 */
export function login({ email, password, remember }) {
  return async dispatch => {
    dispatch(loginStart());
    const { data, errors } = await LoginService.login({
      type: LOGIN_TYPES.EMAIL,
      email,
      password
    });

    if (data) {
      if (remember) {
        await loginRepository.saveEmailPassword(email, password);
      } else {
        await loginRepository.clearEmailPassword();
      }

      dispatch(loginSuccess({ data }));
      dispatch(authenticate())

      await loginRepository.saveLoginAccessToken(data.accesstoken);
    } else {
      dispatch(loginFailure({ errors }));
    }
  };
}

/**
 * Handle logic for feature login by social account
 * @param {String} email
 * @param {String} password
 * @param {Boolean} remember
 */
export function loginBySocialAccount(dataLogin) {
  return async dispatch => {
    dispatch(loginStart());
    const { data, errors } = await LoginService.login(dataLogin);
    if (data) {
      dispatch(loginSuccess({ data }));
      dispatch(authenticate());
      await loginRepository.saveLoginAccessToken(data.accesstoken);
    } else {
      dispatch(loginFailure({ errors }));
    }
  };
}

/**
 * Handle logic for check authentication on intial app
 */
export function authenticate() {
  return async dispatch => {
    dispatch(authenticateStart());

    const { data, errors } = await profileRepository.getUserData();
    if (data) {
      dispatch(authenticateSuccess());
      dispatch(storeUserData({ userData: data }));
    } else {
      dispatch(authenticateFailure({ errors }));
    }
  };
}

/**
 * Handle logout
 */
export function logout() {
  return async dispatch => {
    await loginRepository.clearLoginAccessToken();

    dispatch(resetLoginState());
    dispatch(resetProfileState());
  };
}
