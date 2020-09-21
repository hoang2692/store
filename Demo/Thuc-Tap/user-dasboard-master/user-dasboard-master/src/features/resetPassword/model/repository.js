import _ from "lodash";
import userApiService from "../../../commons/utils/services/ApiService/UserApiService";

/**
 * resetPassword
 */
async function resetPassword({
  email,
  emailVerifycode,
  newPassword,
 }) {
  try {
    const repsonse = await userApiService.resetPassword({
      email,
      emailVerifycode,
      newPassword,
    });

    const { data, errors } = repsonse;

    return { data, errors };
  } catch (error) {
    console.log(error);
    return { errors: ["Un-know"] };
  }
}

const resetPasswordRepository = {
  resetPassword
};

export default resetPasswordRepository;
