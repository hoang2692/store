import { resetPasswordStart, resetPasswordSuccess, resetPasswordFailure } from "./reducer";
import resetPasswordRepository from "./repository";

/**
 * Handle logic for resetPassword app
 */
export function resetPassword(
  { email, emailVerifycode, newPassword },
  cb = undefined
) {
  return async dispatch => {
    dispatch(resetPasswordStart());

    const { data, errors } = await resetPasswordRepository.resetPassword({
      email,
      emailVerifycode,
      newPassword,
    });

    if (data) {
      dispatch(resetPasswordSuccess());
      cb && cb(true);
    } else {
      dispatch(resetPasswordFailure({ errors }));
      cb && cb(false);
    }
  };
}
