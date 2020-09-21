import _ from "lodash";
import ApiService from "../../../commons/utils/services/ApiService";
import handleApiResponse from "../../../commons/utils/services/ApiService/handleApiResponse";
import userApiService from "../../../commons/utils/services/ApiService/UserApiService";

/**
 * register
 */
async function register({
  username,
  email,
  password,
  firstName,
  lastName,
  mobilePhone
}) {
  try {
    const repsonse = await userApiService.register({
      username,
      email,
      password,
      firstName,
      lastName,
      mobilePhone
    });

    const { data, errors } = repsonse;

    return { data, errors };
  } catch (error) {
    console.log(error);
    return { errors: ["Un-know"] };
  }
}

const registerRepository = {
  register
};

export default registerRepository;
