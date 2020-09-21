import { takeLatest, put, all } from "redux-saga/effects";
import axios from "axios";
import { LOGIN_ADMIN_SUCCESS, LOGIN_ADMIN_REQUEST } from "../types/login";


//get aventador
function* login({data}) {
    console.log("saga",data)
    if(data.user === "admin@gmail.com" && data.password === "admin")
    {
        const isLogin = true
        yield put({ type: LOGIN_ADMIN_SUCCESS, payload: isLogin });
    }
    else
    {
        console.log("sai")
    }
}

function* loginRequest() {
  yield takeLatest(LOGIN_ADMIN_REQUEST, login);
}


export default function* () {
  yield all([
    loginRequest()
  ]);
}
