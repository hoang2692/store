import userApiService from "../../../commons/utils/services/ApiService/UserApiService";
import handleApiResponse from "../../../commons/utils/services/ApiService/handleApiResponse";
import constants from "../../../commons/constants";

/**
 * Save login access token
 * @param {String} access token
 */
async function saveLoginAccessToken(token) {
  try {
    await localStorage.setItem(constants.STORE_KEYS.LOGIN_ACCESS_TOKEN, token);
  } catch (e) {
    // handle error
    return { errors: [e.toString()] };
  }
}

/**
 * clear login access token
 * @param {String} access token
 */
async function clearLoginAccessToken(token) {
  try {
    await localStorage.removeItem(constants.STORE_KEYS.LOGIN_ACCESS_TOKEN);
  } catch (e) {
    // handle error
    return { errors: [e.toString()] };
  }
}

/**
 * get login access token
 * @returns { token, errors }
 */
async function getLoginAccessToken() {
  try {
    const token = await localStorage.getItem(
      constants.STORE_KEYS.LOGIN_ACCESS_TOKEN
    );
    return { token };
  } catch (e) {
    // handle error
    return { errors: [e.toString()] };
  }
}

/**
 * Get email, password from local
 * @return {String} email
 * @return {String} password
 */
async function getEmailPassword() {
  try {
    const email = await localStorage.getItem(constants.STORE_KEYS.LOCAL_EMAIL);
    const password = await localStorage.getItem(
      constants.STORE_KEYS.LOCAL_PASSWORD
    );
    const remember = await localStorage.getItem(
      constants.STORE_KEYS.LOCAL_REMEMBER
    );
    return { email, password, remember };
  } catch (e) {
    // handle error
    return { errors: [e.toString()] };
  }
}


const loginRepository = {
  saveLoginAccessToken,
  getLoginAccessToken,
  getEmailPassword,

};

export default loginRepository;
