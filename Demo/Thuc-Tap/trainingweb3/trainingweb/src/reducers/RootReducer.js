import { combineReducers } from "redux";

import addCart from "./cart/redux/addCart";
import registerWithEmail from "./user/redux/registerWithEmail";

const rootReducer = combineReducers({
  addCart,
  registerWithEmail,
});

export default rootReducer;
