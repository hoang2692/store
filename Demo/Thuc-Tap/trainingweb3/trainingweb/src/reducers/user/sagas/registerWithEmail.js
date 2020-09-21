import { takeEvery, put } from "redux-saga/effects";

import { ACTION, onFailure, onSuccess } from "../redux/registerWithEmail";

function* registerWithEmail(action) {
  try {
    console.log(action.data);
    // var response = yield moduleAPI.getData(action.userId);
    // if (response.status_code === ApiResponseStatusCode.SUCCESS) {
    //   yield put(onSuccess(response.response));
    //   //yield put(hideLoading())
    // } else {
    //   yield put(onFailure(response.status));
    // }
  } catch (error) {
    yield put(onFailure(JSON.stringify(error)));
  }
}

export default function* saga() {
  yield takeEvery(ACTION, registerWithEmail);
}
