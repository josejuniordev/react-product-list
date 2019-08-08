import { all, fork } from 'redux-saga/effects';
import productsSaga from './sagas/products';
import departamentsSaga from './sagas/departaments';

export default function* () {
  yield all([
    fork(productsSaga),
    fork(departamentsSaga),
  ]);
}
