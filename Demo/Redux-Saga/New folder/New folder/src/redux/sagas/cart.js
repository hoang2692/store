import { takeLatest, put, all } from "redux-saga/effects";
import axios from "axios";

import {
    PRODUCT_GET_REQUEST,
    PRODUCT_GET_SUCCESS,
  
} from "./../types/product";

//get 
function* getData({id}) {
  
  const res = yield axios.get("https://dboi.info/api/categories/" + id);
  if (res.status === 200   && res.data.code === 200 ) {
    const { data } = res.data;
    yield put({ type: PRODUCT_GET_SUCCESS, payload: data });
    
  }
}


function* getIdProduct() {
  yield takeLatest(PRODUCT_GET_REQUEST, getData);
}



export default function* () {
  yield all([getIdProduct(),]);
}
