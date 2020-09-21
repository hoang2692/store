import userApiService from "../../../commons/utils/services/ApiService/UserApiService";
import handleApiResponse from "../../../commons/utils/services/ApiService/handleApiResponse";

/**
 * Get user data
 */
async function getUserData() {
  try {
    const response = await userApiService.getUserData();
    const { data, errors } = response;
    return { data, errors };
  } catch (e) {
    return { data: undefined, errors: [e] };
  }
}

/**
 * Get access token
 */
async function getAccessToken() {
  try {
    const accessToken = await localStorage.getItem("accessToken");
    return { data: accessToken };
  } catch (e) {
    return { data: undefined, errors: [e] };
  }
}

const profileRepository = {
  getUserData,
  getAccessToken
};

export default profileRepository;
