import { registerStart, registerSuccess, registerFailure } from "./reducer";
import userApiService from "../../../commons/utils/services/ApiService/UserApiService";
import handleApiResponse from "../../../commons/utils/services/ApiService/handleApiResponse";
import registerRepository from "./repository";
import i18n from "../../../commons/utils/locales/i18n";

/**
 * Handle logic for register app
 */
export function register(
  {
    username,
    email,
    password,
    confirmPassword,
    firstName,
    lastName,
    mobilePhone
  },
  cb
) {
  return async dispatch => {
    dispatch(registerStart());

    if (confirmPassword !== password) {
      dispatch(
        registerFailure({
          errors: [{ messages: ["confirm_pass_not_match"] }]
        })
      );
      return;
    }

    const { data, errors } = await registerRepository.register({
      username,
      email,
      password,
      firstName,
      lastName,
      mobilePhone
    });

    if (data) {
      dispatch(registerSuccess());
      cb && cb(true);
    } else {
      dispatch(registerFailure({ errors }));
      cb && cb(false);
    }
  };
}
