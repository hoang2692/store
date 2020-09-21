import { takeLatest, put, all } from "redux-saga/effects";
import axios from "axios";
import {
  GET_LAMBOR_AVENTADOR_SUCCESS,
  GET_LAMBOR_AVENTADOR_REQUEST,
  GET_LAMBOR_SUV_SUCCESS,
  GET_LAMBOR_SUV_REQUEST,
  GET_LAMBOR_HARUCAN_SUCCESS,
  GET_LAMBOR_HARUCAN_REQUEST,
  DELETE_LAMBOR_AVENTADOR_SUCCESS,
  DELETE_LAMBOR_AVENTADOR_REQUEST,
  DELETE_LAMBOR_HARUCAN_SUCCESS,
  DELETE_LAMBOR_HARUCAN_REQUEST,
  DELETE_LAMBOR_SUV_REQUEST,
  DELETE_LAMBOR_SUV_SUCCESS,
  ADD_LAMBOR_AVENTADOR_SUCCESS,
  ADD_LAMBOR_AVENTADOR_REQUEST,
  ADD_LAMBOR_SUV_SUCCESS,
  ADD_LAMBOR_SUV_REQUEST,
  ADD_LAMBOR_HARUCAN_SUCCESS,
  ADD_LAMBOR_HARUCAN_REQUEST,
  GETEDIT_LAMBOR_AVENTADOR_SUCCESS,
  GETEDIT_LAMBOR_AVENTADOR_REQUEST,
  UPDATE_LAMBOR_AVENTADOR_SUCCESS,
  UPDATE_LAMBOR_AVENTADOR_REQUEST,
  GETEDIT_LAMBOR_SUV_SUCCESS,
  GETEDIT_LAMBOR_SUV_REQUEST,
  UPDATE_LAMBOR_SUV_SUCCESS,
  UPDATE_LAMBOR_SUV_REQUEST,
  GETEDIT_LAMBOR_HARUCAN_SUCCESS,
  GETEDIT_LAMBOR_HARUCAN_REQUEST,
  UPDATE_LAMBOR_HARUCAN_SUCCESS,
  UPDATE_LAMBOR_HARUCAN_REQUEST,
} from "../types/productsLambor";

//get aventador
function* getAventadorData() {
  const res = yield axios.get("http://localhost:3000/aventador");
  if (res.status == 200) {
    const data = res.data;
    yield put({ type: GET_LAMBOR_AVENTADOR_SUCCESS, payload: data });
  }
}

function* getAventadorDataRequest() {
  yield takeLatest(GET_LAMBOR_AVENTADOR_REQUEST, getAventadorData);
}

// Get Edit
function* getDataEditAventador({id}) {
  const res = yield axios.get(`http://localhost:3000/aventador/${id}`);
  if (res.status == 200) {
    const data = res.data;
    console.log(data);
    yield put({ type: GETEDIT_LAMBOR_AVENTADOR_SUCCESS, payload: data });
  }
}

function* getDataEditAventadorRequest() {
  yield takeLatest(GETEDIT_LAMBOR_AVENTADOR_REQUEST, getDataEditAventador);
}

// Update

function* updateAventador({data}) {
  const res = yield axios.put(`http://localhost:3000/aventador/${data.id}`, {name: data.name,price: data.price});
  if (res.status == 200) {
    const data = res.data;
    console.log(data);
    yield put({ type: UPDATE_LAMBOR_AVENTADOR_SUCCESS, payload: data });
  }
}

function* updateAventadorRequest() {
  yield takeLatest(UPDATE_LAMBOR_AVENTADOR_REQUEST, updateAventador);
}


// Add
function* addDataAventador({ data }) {
  const res = yield axios.post("http://localhost:3000/aventador", data);
  if (res.status == 201) {
    const data = res.data;
    console.log(data);
    yield put({ type: ADD_LAMBOR_AVENTADOR_SUCCESS, payload: data });
  }
}

function* addDataAventadorRequest() {
  yield takeLatest(ADD_LAMBOR_AVENTADOR_REQUEST, addDataAventador);
}


// Delete
function* DeleteAventador({ id }) {
  const res = yield axios.delete(`http://localhost:3000/aventador/${id}`);
  yield put({ type: DELETE_LAMBOR_AVENTADOR_SUCCESS, payload: id });
}

function* DeleteAventadorRequest() {
  yield takeLatest(DELETE_LAMBOR_AVENTADOR_REQUEST, DeleteAventador);
}

// End aventador

// get suv
function* getSUVData() {
  const res = yield axios.get("http://localhost:3000/SUV3");
  if (res.status == 200) {
    const data = res.data;
    yield put({ type: GET_LAMBOR_SUV_SUCCESS, payload: data });
  }
}

function* getSUVDataRequest() {
  yield takeLatest(GET_LAMBOR_SUV_REQUEST, getSUVData);
}

// Get Edit
function* getDataEditSUV({id}) {
  const res = yield axios.get(`http://localhost:3000/SUV3/${id}`);
  if (res.status == 200) {
    const data = res.data;
    console.log(data);
    yield put({ type: GETEDIT_LAMBOR_SUV_SUCCESS, payload: data });
  }
}

function* getDataEditSUVRequest() {
  yield takeLatest(GETEDIT_LAMBOR_SUV_REQUEST, getDataEditSUV);
}

// Update

function* updateSUV({data}) {
  const res = yield axios.put(`http://localhost:3000/SUV3/${data.id}`, {name: data.name,price: data.price});
  if (res.status == 200) {
    const data = res.data;
    console.log(data);
    yield put({ type: UPDATE_LAMBOR_SUV_SUCCESS, payload: data });
  }
}

function* updateSUVRequest() {
  yield takeLatest(UPDATE_LAMBOR_SUV_REQUEST, updateSUV);
}


// Add
function* addDataSUV({ data }) {
  const res = yield axios.post("http://localhost:3000/SUV3", data);
  if (res.status == 201) {
    const data = res.data;
    console.log(data);
    yield put({ type: ADD_LAMBOR_SUV_SUCCESS, payload: data });
  }
}

function* addDataSUVRequest() {
  yield takeLatest(ADD_LAMBOR_SUV_REQUEST, addDataSUV);
}



// Delete
function* DeleteSUV({ id }) {
  const res = yield axios.delete(`http://localhost:3000/SUV3/${id}`);
  yield put({ type: DELETE_LAMBOR_SUV_SUCCESS, payload: id });
}

function* DeleteSUVRequest() {
  yield takeLatest(DELETE_LAMBOR_SUV_REQUEST, DeleteSUV);
}

// End SUV

// get harucan
function* getHarucanData() {
  const res = yield axios.get("http://localhost:3000/harucan");
  if (res.status == 200) {
    const data = res.data;
    yield put({ type: GET_LAMBOR_HARUCAN_SUCCESS, payload: data });
  }
}

function* getHaricanDataRequest() {
  yield takeLatest(GET_LAMBOR_HARUCAN_REQUEST, getHarucanData);
}


// Get Edit
function* getDataEditHarucan({id}) {
  const res = yield axios.get(`http://localhost:3000/harucan/${id}`);
  if (res.status == 200) {
    const data = res.data;
    console.log(data);
    yield put({ type: GETEDIT_LAMBOR_HARUCAN_SUCCESS, payload: data });
  }
}

function* getDataEditHarucanRequest() {
  yield takeLatest(GETEDIT_LAMBOR_HARUCAN_REQUEST, getDataEditHarucan);
}

// Update

function* updateHarucan({data}) {
  const res = yield axios.put(`http://localhost:3000/harucan/${data.id}`, {name: data.name,price: data.price});
  if (res.status == 200) {
    const data = res.data;
    console.log(data);
    yield put({ type: UPDATE_LAMBOR_HARUCAN_SUCCESS, payload: data });
  }
}

function* updateHarucanRequest() {
  yield takeLatest(UPDATE_LAMBOR_HARUCAN_REQUEST, updateHarucan);
}


// Add
function* addDataHarucan({ data }) {
  const res = yield axios.post("http://localhost:3000/harucan", data);
  if (res.status == 201) {
    const data = res.data;
    console.log(data);
    yield put({ type: ADD_LAMBOR_HARUCAN_SUCCESS, payload: data });
  }
}

function* addDataHarucanRequest() {
  yield takeLatest(ADD_LAMBOR_HARUCAN_REQUEST, addDataHarucan);
}


// Delete
function* DeleteHarucan({ id }) {
  const res = yield axios.delete(`http://localhost:3000/harucan/${id}`);
  yield put({ type: DELETE_LAMBOR_HARUCAN_SUCCESS, payload: id });
}

function* DeleteHarucanRequest() {
  yield takeLatest(DELETE_LAMBOR_HARUCAN_REQUEST, DeleteHarucan);
}

// End harucan

export default function* () {
  yield all([
    getAventadorDataRequest(),
    getHaricanDataRequest(),
    getSUVDataRequest(),
    DeleteAventadorRequest(),
    DeleteHarucanRequest(),
    DeleteSUVRequest(),
    addDataSUVRequest(),
    addDataHarucanRequest(),
    addDataAventadorRequest(),
    getDataEditAventadorRequest(),
    getDataEditHarucanRequest(),
    getDataEditSUVRequest(),
    updateSUVRequest(),
    updateHarucanRequest(),
    updateAventadorRequest()
  ]);
}
