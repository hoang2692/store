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




// //submit
// function* getDatatoSubmit({cate}) {
//   console.log(cate)
//   const res = yield axios.post("https://dboi.info/api/products", {data : cate});
//   console.log("res", res);
//   if (res.status === 200   && res.data.code === 200 ) {
//     const { data } = res.data;
//     console.log(data)
//     yield put({ type: PRODUCT_SUBMIT_SUCCESS, payload: data });

    
//   }
// }


// function* getSubmitProduct() {
//   yield takeLatest(PRODUCT_SUBMIT_REQUEST, getDatatoSubmit);
// }

export default function* () {
  yield all([getIdProduct(),]);
}

