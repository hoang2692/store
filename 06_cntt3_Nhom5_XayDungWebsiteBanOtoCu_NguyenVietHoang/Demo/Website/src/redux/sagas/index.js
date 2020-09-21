import {  all } from "redux-saga/effects";
import productsToyotaRun from './productToyota';
import productsMerRun from './productMer';
import productsLambor from './productLambor';
import login from './login';

export default function* () {
  yield all([productsToyotaRun(),productsMerRun(),productsLambor(),login()]);
}
