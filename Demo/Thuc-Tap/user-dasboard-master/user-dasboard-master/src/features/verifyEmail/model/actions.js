import {
  verifyEmailStart,
  verifyEmailSuccess,
  verifyEmailFailure,
} from "./reducer";
import VerifyEmailService from "../../../commons/utils/services/VerifyEmailService";
// import loginRepository from "./repository";

/**
 * Handle logic for feature verify email
 * @param {String} email
 * @param {String} verifyCode
 */
export function verifyEmail({ email, emailVerifycode }, callback = undefined) {
  console.log(123123)

  return async dispatch => {
    // URL missing payload
    if (!email || !emailVerifycode) {
      dispatch(verifyEmailFailure({
        errors: [{
          message: 'INVALID_PAYLOAD'
        }]
      }));
    }
    dispatch(verifyEmailStart());
    const { data, errors } = await VerifyEmailService.verifyEmail({
      email, emailVerifycode,
    });

    if (data) {
      dispatch(verifyEmailSuccess({ data }));
      if (callback) {
        callback();
      }
    } else {
      dispatch(verifyEmailFailure({ errors }));
    }
  };
}
