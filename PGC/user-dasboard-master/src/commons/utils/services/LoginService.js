import userApiService from "./ApiService/UserApiService";
import handleApiResponse from "./ApiService/handleApiResponse";

async function loginWithEmail({ email, password }) {
  try {
    const response = await userApiService.login({ email, password });
    const { data, errors } = response;

    return { data, errors };
  } catch (e) {
    return { errors: [e.message] };
  }
}

async function loginBySocialAccount(dataLogin) {
  try {
    const response = await userApiService.loginBySocialAccount(dataLogin);
    const { data, errors } = response;
    
    console.log(data, errors ,'the response')

    return { data, errors };
  } catch (e) {
    return { errors: [e.message] };
  }
}

/**
 * Define enum login type
 */
export const LOGIN_TYPES = {
  EMAIL: "email",
  FACEBOOK: "facebook",
  GOOGLE: "google",
  TWITTER: "twitter"
};

async function login(dataLogin) {
  try {
    if (dataLogin.type === "email") {
      return await loginWithEmail(dataLogin);
    } else if (dataLogin.type === "facebook") {
      return await loginBySocialAccount(dataLogin);
    } else if (dataLogin.type === "google") {
      return await loginBySocialAccount(dataLogin);
    } else if (dataLogin.type === "twitter") {
      return await loginBySocialAccount(dataLogin);
    }
  } catch (e) {
    return { errors: [e.message] };
  }
}

const loginService = { login, LOGIN_TYPES };

export default loginService;
