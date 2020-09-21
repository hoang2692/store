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
    return { errors: [e.message] };
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
    return { errors: [e.message] };
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
    return { errors: [e.message] };
  }
}

/**
 * Save email, password to local
 * @param {String} email
 * @param {String} password
 */
async function saveEmailPassword(email, password) {
  try {
    console.log(email);
    await localStorage.setItem(constants.STORE_KEYS.LOCAL_EMAIL, email);
    await localStorage.setItem(constants.STORE_KEYS.LOCAL_PASSWORD, password);
    await localStorage.setItem(constants.STORE_KEYS.LOCAL_REMEMBER, true);
  } catch (e) {
    // handle error
    return { errors: [e.message] };
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
    return { errors: [e.message] };
  }
}

/**
 * Save email, password to local
 */
async function clearEmailPassword() {
  try {
    await localStorage.removeItem(constants.STORE_KEYS.LOCAL_REMEMBER, false);
    await localStorage.removeItem(constants.STORE_KEYS.LOCAL_EMAIL);
    await localStorage.removeItem(constants.STORE_KEYS.LOCAL_PASSWORD);
  } catch (e) {
    // handle error
    return { errors: [e.message] };
  }
}

const loginRepository = {
  saveLoginAccessToken,
  getLoginAccessToken,
  saveEmailPassword,
  getEmailPassword,
  clearEmailPassword,
  clearLoginAccessToken
};

export default loginRepository;
