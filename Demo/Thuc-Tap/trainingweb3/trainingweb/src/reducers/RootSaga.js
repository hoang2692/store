import { fork, all } from "redux-saga/effects";

// import addCart from "./cart/sagas/addCart";
import registerWithEmail from "./user/sagas/registerWithEmail";

export default function* rootSaga() {
  yield all([fork(registerWithEmail)]);
}
