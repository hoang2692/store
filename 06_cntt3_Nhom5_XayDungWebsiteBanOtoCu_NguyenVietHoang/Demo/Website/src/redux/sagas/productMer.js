import { takeLatest, put, all } from "redux-saga/effects";
import axios from "axios";

import {
  GET_MER_SALOONS_SUCCESS,
  GET_MER_SALOONS_REQUEST,
  GET_MER_SUV_SUCCESS,
  GET_MER_SUV_REQUEST,
  GET_MER_COPEE_SUCCESS,
  GET_MER_COPEE_REQUEST,
  DELETE_MER_SALOONS_SUCCESS,
  DELETE_MER_SALOONS_REQUEST,
  DELETE_MER_SUV_SUCCESS,
  DELETE_MER_SUV_REQUEST,
  DELETE_MER_COPEE_SUCCESS,
  DELETE_MER_COPEE_REQUEST,
  ADD_MER_SALOONS_SUCCESS,
  ADD_MER_SALOONS_REQUEST,
  ADD_MER_SUV_SUCCESS,
  ADD_MER_SUV_REQUEST,
  ADD_MER_COPEE_SUCCESS,
  ADD_MER_COPEE_REQUEST,
  GETEDIT_MER_SALOONS_SUCCESS,
  GETEDIT_MER_SALOONS_REQUEST,
  UPDATE_MER_SALOONS_SUCCESS,
  UPDATE_MER_SALOONS_REQUEST,
  GETEDIT_MER_SUV_SUCCESS,
  GETEDIT_MER_SUV_REQUEST,
  GETEDIT_MER_COPEE_SUCCESS,
  GETEDIT_MER_COPEE_REQUEST,
  UPDATE_MER_COPEE_SUCCESS,
  UPDATE_MER_COPEE_REQUEST,
  UPDATE_MER_SUV_SUCCESS,
  UPDATE_MER_SUV_REQUEST,
} from "../types/productsMer";

//get saloons
function* getDataSaloons() {
  const res = yield axios.get("http://localhost:3000/saloons");
  if (res.status == 200) {
    const data = res.data;
    yield put({ type: GET_MER_SALOONS_SUCCESS, payload: data });
  }
}

function* getDataSaloonsRequest() {
  yield takeLatest(GET_MER_SALOONS_REQUEST, getDataSaloons);
}

// Get Edit
function* getDataEditSaloons({id}) {
  const res = yield axios.get(`http://localhost:3000/saloons/${id}`);
  if (res.status == 200) {
    const data = res.data;
    console.log(data);
    yield put({ type: GETEDIT_MER_SALOONS_SUCCESS, payload: data });
  }
}

function* getDataEditSaloonsRequest() {
  yield takeLatest(GETEDIT_MER_SALOONS_REQUEST, getDataEditSaloons);
}

// Update

function* updateSaloons({data}) {
  const res = yield axios.put(`http://localhost:3000/saloons/${data.id}`, {name: data.name,price: data.price});
  if (res.status == 200) {
    const data = res.data;
    console.log(data);
    yield put({ type: UPDATE_MER_SALOONS_SUCCESS, payload: data });
  }
}

function* updateSaloonsRequest() {
  yield takeLatest(UPDATE_MER_SALOONS_REQUEST, updateSaloons);
}


// Add

function* addDataSaloons({ data }) {
  const res = yield axios.post("http://localhost:3000/saloons", data);
  if (res.status == 201) {
    const data = res.data;
    console.log(data);
    yield put({ type: ADD_MER_SALOONS_SUCCESS, payload: data });
  }
}

function* addDataSaloonsRequest() {
  yield takeLatest(ADD_MER_SALOONS_REQUEST, addDataSaloons);
}

// Delete

function* DeleteSaloons({ id }) {
  const res = yield axios.delete(`http://localhost:3000/saloons/${id}`);
  yield put({ type: DELETE_MER_SALOONS_SUCCESS, payload: id });
}

function* DeleteSaloonsRequest() {
  yield takeLatest(DELETE_MER_SALOONS_REQUEST, DeleteSaloons);
}

// End Saloons

//get suv
function* getDataSUV() {
  const res = yield axios.get("http://localhost:3000/SUV2");
  if (res.status == 200) {
    const data = res.data;
    yield put({ type: GET_MER_SUV_SUCCESS, payload: data });
  }
}

function* getDataSUVRequest() {
  yield takeLatest(GET_MER_SUV_REQUEST, getDataSUV);
}

// Get Edit
function* getDataEditSUV({id}) {
  const res = yield axios.get(`http://localhost:3000/SUV2/${id}`);
  if (res.status == 200) {
    const data = res.data;
    console.log(data);
    yield put({ type: GETEDIT_MER_SUV_SUCCESS, payload: data });
  }
}

function* getDataEditSUVRequest() {
  yield takeLatest(GETEDIT_MER_SUV_REQUEST, getDataEditSUV);
}

// Update

function* updateSUV({data}) {
  const res = yield axios.put(`http://localhost:3000/SUV2/${data.id}`, {name: data.name,price: data.price});
  if (res.status == 200) {
    const data = res.data;
    console.log(data);
    yield put({ type: UPDATE_MER_SUV_SUCCESS, payload: data });
  }
}

function* updateSUVRequest() {
  yield takeLatest(UPDATE_MER_SUV_REQUEST, updateSUV);
}

// Add

function* addDataSUV({ data }) {
  const res = yield axios.post("http://localhost:3000/SUV2", data);
  if (res.status == 201) {
    const data = res.data;
    console.log(data);
    yield put({ type: ADD_MER_SUV_SUCCESS, payload: data });
  }
}

function* addDataSUVRequest() {
  yield takeLatest(ADD_MER_SUV_REQUEST, addDataSUV);
}


// Delete

function* DeleteSUV({ id }) {
  const res = yield axios.delete(`http://localhost:3000/SUV2/${id}`);
  yield put({ type: DELETE_MER_SUV_SUCCESS, payload: id });
}

function* DeleteSUVRequest() {
  yield takeLatest(DELETE_MER_SUV_REQUEST, DeleteSUV);
}

// End SUV


// get Copee
function* getDataCopee() {
  const res = yield axios.get("http://localhost:3000/coope");
  if (res.status == 200) {
    const data = res.data;
    yield put({ type: GET_MER_COPEE_SUCCESS, payload: data });
  }
}

function* getDataCopeeRequest() {
  yield takeLatest(GET_MER_COPEE_REQUEST, getDataCopee);
}

// Get Edit
function* getDataEditCopee({id}) {
  const res = yield axios.get(`http://localhost:3000/coope/${id}`);
  if (res.status == 200) {
    const data = res.data;
    console.log(data);
    yield put({ type: GETEDIT_MER_COPEE_SUCCESS, payload: data });
  }
}

function* getDataEditCopeeRequest() {
  yield takeLatest(GETEDIT_MER_COPEE_REQUEST, getDataEditCopee);
}

// Update

function* updateCopee({data}) {
  const res = yield axios.put(`http://localhost:3000/coope/${data.id}`, {name: data.name,price: data.price});
  if (res.status == 200) {
    const data = res.data;
    console.log(data);
    yield put({ type: UPDATE_MER_COPEE_SUCCESS, payload: data });
  }
}

function* updateCopeeRequest() {
  yield takeLatest(UPDATE_MER_COPEE_REQUEST, updateCopee);
}


// Add

function* addDataCopee({ data }) {
  const res = yield axios.post("http://localhost:3000/coope", data);
  if (res.status == 201) {
    const data = res.data;
    console.log(data);
    yield put({ type: ADD_MER_COPEE_SUCCESS, payload: data });
  }
}

function* addDataCopeeRequest() {
  yield takeLatest(ADD_MER_COPEE_REQUEST, addDataCopee);
}

// Delete

function* DeleteCopee({ id }) {
  const res = yield axios.delete(`http://localhost:3000/coope/${id}`);
  yield put({ type: DELETE_MER_COPEE_SUCCESS, payload: id });
}

function* DeleteCopeeRequest() {
  yield takeLatest(DELETE_MER_COPEE_REQUEST, DeleteCopee);
}

// End Copee

export default function* () {
  yield all([
    getDataSaloonsRequest(),
    getDataSUVRequest(),
    getDataCopeeRequest(),
    DeleteCopeeRequest(),
    DeleteSUVRequest(),
    DeleteSaloonsRequest(),
    addDataSUVRequest(),
    addDataSaloonsRequest(),
    addDataCopeeRequest(),
    getDataEditCopeeRequest(),
    getDataEditSUVRequest(),
    getDataEditSaloonsRequest(),
    updateCopeeRequest(),
    updateSaloonsRequest(),
    updateSUVRequest()
  ]);
}
