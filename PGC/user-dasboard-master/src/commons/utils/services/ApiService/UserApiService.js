import apiService from ".";

/**
 * Define name for entity
 */
const entityName = "users";

/**
 * Create new api service entiry
 */
apiService.createEntity({ name: entityName });

const userApiService = apiService.getEndpoints()[entityName];

/**
 * Define custom methods
 */
userApiService.login = ({ email, password }) => {
  return apiService.handleResponse(() =>
    apiService
      .getAxiosInstance()
      .post("/auth/signIn", { username: email, password })
  );
};

/**
 * Define custom methods
 */
userApiService.loginBySocialAccount = data => {
  return apiService.handleResponse(() =>
  apiService.getAxiosInstance().post("/auth/signInSocial", { ...data })
  );
};

/**
 * Define custom methods
 */
userApiService.register = (
  data = {
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    mobilePhone: ""
  }
) => {
  return apiService.handleResponse(() =>
    apiService.getAxiosInstance().post("/users/register", data)
  );
};

userApiService.getUserData = () => {
  return apiService.handleResponse(() =>
    apiService.getAxiosInstance().get(`${entityName}/getProfile`)
  );
};

userApiService.verifyEmail = data => {
  return apiService.getAxiosInstance().post(`${entityName}/verifyEmail`, data);
};

userApiService.resetPassword = data => {
  return apiService.handleResponse(() =>
    apiService.getAxiosInstance().patch(`${entityName}/resetPassword`, data)
  );
};

/**
 * export api
 */
export default userApiService;
