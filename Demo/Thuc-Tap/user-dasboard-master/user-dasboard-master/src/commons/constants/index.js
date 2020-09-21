const constants = {
  apiUrl: process.env.API_URL || "https://opay.ai:30618/api/v1",
  STORE_KEYS: {
    LOGIN_ACCESS_TOKEN: "loginAccessToken",
    LOCAL_EMAIL: "LOCAL_EMAIl",
    LOCAL_PASSWORD: "LOCAL_PASSWORD",
    LOCAL_REMEMBER: "LOCAL_REMEMBER"
  }
};

export default constants;
