import {  all } from "redux-saga/effects";
import cateRun from './categories';
import productsRun from './product';
import productAminRun from './productAmin';
import cartRun from './cart';

export default function* () {
  yield all([cateRun(),productsRun(),productAminRun(),cartRun()]);
}
