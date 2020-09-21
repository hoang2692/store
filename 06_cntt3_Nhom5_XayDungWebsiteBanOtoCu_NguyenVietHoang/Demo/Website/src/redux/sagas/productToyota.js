import { takeLatest, put, all } from "redux-saga/effects";
import axios from "axios";

import {
  GET_TOYOTA_SADAN_SUCCESS,
  GET_TOYOTA_SADAN_REQUEST,
  GET_TOYOTA_SUVTOYOTAS_SUCCESS,
  GET_TOYOTA_SUVTOYOTAS_REQUEST,
  GET_TOYOTA_DADUNG_SUCCESS,
  GET_TOYOTA_DADUNG_REQUEST,
  DELETE_TOYOTA_SADAN_SUCCESS,
  DELETE_TOYOTA_SADAN_REQUEST,
  DELETE_TOYOTA_SUVTOYOTAS_SUCCESS,
  DELETE_TOYOTA_SUVTOYOTAS_REQUEST,
  DELETE_TOYOTA_DADUNG_SUCCESS,
  DELETE_TOYOTA_DADUNG_REQUEST,
  ADD_TOYOTA_SADAN_REQUEST,
  ADD_TOYOTA_SADAN_SUCCESS,
  ADD_TOYOTA_SUVTOYOTAS_SUCCESS,
  ADD_TOYOTA_SUVTOYOTAS_REQUEST,
  ADD_TOYOTA_DADUNG_SUCCESS,
  ADD_TOYOTA_DADUNG_REQUEST,
  GETEDIT_TOYOTA_SADAN_SUCCESS,
  GETEDIT_TOYOTA_SADAN_REQUEST,
  GETEDIT_TOYOTA_DADUNG_SUCCESS,
  GETEDIT_TOYOTA_DADUNG_REQUEST,
  GETEDIT_TOYOTA_SUVTOYOTAS_SUCCESS,
  GETEDIT_TOYOTA_SUVTOYOTAS_REQUEST,
  UPDATE_TOYOTA_SADAN_SUCCESS,
  UPDATE_TOYOTA_SADAN_REQUEST,
  UPDATE_TOYOTA_SUVTOYOTAS_SUCCESS,
  UPDATE_TOYOTA_SUVTOYOTAS_REQUEST,
  UPDATE_TOYOTA_DADUNG_SUCCESS,
  UPDATE_TOYOTA_DADUNG_REQUEST,
} from "./../types/productsToyota";

// sadan
function* getDataSadan() {
  const res = yield axios.get("http://localhost:3000/sadan");
  if (res.status == 200) {
    const data = res.data;
    console.log(data);
    yield put({ type: GET_TOYOTA_SADAN_SUCCESS, payload: data });
  }
}

function* getDataSadanRequest() {
  yield takeLatest(GET_TOYOTA_SADAN_REQUEST, getDataSadan);
}

function* getDataEditSadan({id}) {
  const res = yield axios.get(`http://localhost:3000/sadan/${id}`);
  if (res.status == 200) {
    const data = res.data;
    console.log(data);
    yield put({ type: GETEDIT_TOYOTA_SADAN_SUCCESS, payload: data });
  }
}

function* getDataEditSadanRequest() {
  yield takeLatest(GETEDIT_TOYOTA_SADAN_REQUEST, getDataEditSadan);
}

function* updateSadan({data}) {
  const res = yield axios.put(`http://localhost:3000/sadan/${data.id}`, {name: data.name,price: data.price});
  if (res.status == 200) {
    const data = res.data;
    console.log(data);
    yield put({ type: UPDATE_TOYOTA_SADAN_SUCCESS, payload: data });
  }
}

function* updateSadanRequest() {
  yield takeLatest(UPDATE_TOYOTA_SADAN_REQUEST, updateSadan);
}


function* addDataSadan({data}) {
  const res = yield axios.post("http://localhost:3000/sadan", data);
  if (res.status == 201) {
    const data = res.data;
    console.log(data);
    yield put({ type: ADD_TOYOTA_SADAN_SUCCESS, payload: data });
  }
}

function* addDataSadanRequest() {
  yield takeLatest(ADD_TOYOTA_SADAN_REQUEST, addDataSadan);
}

function* DeleteSadan({id}) {
  const res = yield axios.delete(`http://localhost:3000/sadan/${id}`);
    yield put({ type: DELETE_TOYOTA_SADAN_SUCCESS, payload: id});
}

function* DeleteSadanRequest() {
  yield takeLatest(DELETE_TOYOTA_SADAN_REQUEST, DeleteSadan);
}

//SUV toyotas
function* getDataSUV() {
  const res = yield axios.get("http://localhost:3000/SUVTOYOTAS");
  console.log("suv",res)
  if (res.status == 200) {
    const data = res.data;
    console.log(data);
    yield put({ type: GET_TOYOTA_SUVTOYOTAS_SUCCESS, payload: data });
  }
}

function* getDataSUVRequest() {
  yield takeLatest(GET_TOYOTA_SUVTOYOTAS_REQUEST, getDataSUV);
}

function* getDataEditSUV({id}) {
  const res = yield axios.get(`http://localhost:3000/SUVTOYOTAS/${id}`);
  if (res.status == 200) {
    const data = res.data;
    console.log(data);
    yield put({ type: GETEDIT_TOYOTA_SUVTOYOTAS_SUCCESS, payload: data });
  }
}

function* getDataEditSUVRequest() {
  yield takeLatest(GETEDIT_TOYOTA_SUVTOYOTAS_REQUEST, getDataEditSUV);
}

function* updateSUV({data}) {
  const res = yield axios.put(`http://localhost:3000/SUVTOYOTAS/${data.id}`, {name: data.name,price: data.price});
  if (res.status == 200) {
    const data = res.data;
    console.log("SUV",data);
    yield put({ type: UPDATE_TOYOTA_SUVTOYOTAS_SUCCESS, payload: data });
  }
}

function* updateSUVRequest() {
  yield takeLatest(UPDATE_TOYOTA_SUVTOYOTAS_REQUEST, updateSUV);
}

function* addDataSUV({data}) {
  const res = yield axios.post("http://localhost:3000/SUVTOYOTAS", data);
  if (res.status == 201) {
    const data = res.data;
    console.log(data);
    yield put({ type: ADD_TOYOTA_SUVTOYOTAS_SUCCESS, payload: data });
  }
}

function* addDataSUVRequest() {
  yield takeLatest(ADD_TOYOTA_SUVTOYOTAS_REQUEST, addDataSUV);
}

function* DeleteSUV({id}) {
  const res = yield axios.delete(`http://localhost:3000/SUVTOYOTAS/${id}`);
    yield put({ type: DELETE_TOYOTA_SUVTOYOTAS_SUCCESS, payload: id});
}

function* DeleteSUVRequest() {
  yield takeLatest(DELETE_TOYOTA_SUVTOYOTAS_REQUEST, DeleteSUV);
}

// DAUDUNG
function* getDataDadung() {
  const res = yield axios.get("http://localhost:3000/DaDung");
  if (res.status == 200) {
    const data = res.data;
    console.log(data);
    yield put({ type: GET_TOYOTA_DADUNG_SUCCESS, payload: data });
  }
}

function* getDataDadungRequest() {
  yield takeLatest( GET_TOYOTA_DADUNG_REQUEST, getDataDadung);
}

function* getDataEditDaDung({id}) {
  const res = yield axios.get(`http://localhost:3000/DaDung/${id}`);
  if (res.status == 200) {
    const data = res.data;
    console.log("DADUNG",data);
    yield put({ type: GETEDIT_TOYOTA_DADUNG_SUCCESS, payload: data });
  }
}

function* getDataEditDaDungRequest() {
  yield takeLatest(GETEDIT_TOYOTA_DADUNG_REQUEST, getDataEditDaDung);
}

function* updateDaDung({data}) {
  const res = yield axios.put(`http://localhost:3000/DaDung/${data.id}`, {name: data.name,price: data.price});
  if (res.status == 200) {
    const data = res.data;
    console.log("UPdate",data);
    yield put({ type: UPDATE_TOYOTA_DADUNG_SUCCESS, payload: data });
  }
}

function* updateDaDungRequest() {
  yield takeLatest(UPDATE_TOYOTA_DADUNG_REQUEST, updateDaDung);
}

function* addDataDaDung({data}) {
  const res = yield axios.post("http://localhost:3000/DaDung", data);
  if (res.status == 201) {
    const data = res.data;
    console.log(data);
    yield put({ type: ADD_TOYOTA_DADUNG_SUCCESS, payload: data });
  }
}

function* addDataDaDungRequest() {
  yield takeLatest(ADD_TOYOTA_DADUNG_REQUEST, addDataDaDung);
}

function* DeleteDadung({id}) {
  const res = yield axios.delete(`http://localhost:3000/DaDung/${id}`);
    yield put({ type: DELETE_TOYOTA_DADUNG_SUCCESS, payload: id});
}

function* DeleteDadungRequest() {
  yield takeLatest(DELETE_TOYOTA_DADUNG_REQUEST, DeleteDadung);
}


export default function* () {
  yield all([
    getDataSadanRequest(),
    getDataSUVRequest(),
    getDataDadungRequest(),
    DeleteDadungRequest(),
    DeleteSUVRequest(),
    DeleteSadanRequest(),
    addDataSadanRequest(),
    addDataSUVRequest(),
    addDataDaDungRequest(),
    getDataEditDaDungRequest(),
    getDataEditSUVRequest(),
    getDataEditSadanRequest(),
    updateSadanRequest(),
    updateDaDungRequest(),
    updateSUVRequest()
  ]);
}
