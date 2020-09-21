import { combineReducers } from "redux";
import loginReducer from "../features/login/model/reducer";
import registerReducer from "../features/register/model/reducer";
import profileReducer from "../features/profile/model/reducer";
import sendAndRequestReducer from "../features/sendAndRequest/model/reducer";
import verifyEmailReducer from "../features/verifyEmail/model/reducer";
import resetPasswordReducer from "../features/resetPassword/model/reducer";
import apiSettingReducer from "../features/api-setting/model/reducer";
import transactionReducer from "../features/transaction/model/reducer";

export default combineReducers({
  loginState: loginReducer,
  registerState: registerReducer,
  profileState: profileReducer,
  sendAndRequestState: sendAndRequestReducer,
  verifyEmailState: verifyEmailReducer,
  resetPasswordState: resetPasswordReducer,
  apiSettingState: apiSettingReducer,
  transactionState: transactionReducer
});
