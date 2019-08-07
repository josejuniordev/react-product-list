import {all, takeLatest} from 'redux-saga/effects';
import {FETCH_PRODUCTS} from "../ducks/products";

function* fetchProductsSaga() {
  console.log('buscar produtos');
}

function* watchFetchProducts() {
  yield takeLatest(FETCH_PRODUCTS, fetchProductsSaga);
}

export default function* () {
  yield all([
    watchFetchProducts(),
  ]);
}
