import { all, fork } from 'redux-saga/effects';
import productsSaga from './sagas/products';

export default function* rootSaga() {
  yield all([
    productsSaga,
  ]);
}
