import { takeLatest, put, all } from "redux-saga/effects";


function* onCreate(action) {
  yield put({ type: "ACTION_CREATE_SUCCESS", result: action.data });
}


function* create() {
  yield takeLatest("ACTION_CREATE", onCreate);
}


export default function* () {
  yield all([create()]);
}
