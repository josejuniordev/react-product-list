import {all, takeLatest} from 'redux-saga/effects';
import {FETCH_DEPARTMENTS} from "../ducks/departments";

function* fetchDepartamentsSaga() {
  alert('entrou')
}

function* watchFetchDepartaments() {
  yield takeLatest(FETCH_DEPARTMENTS, fetchDepartamentsSaga);
}

export default function* () {
  yield all([
    watchFetchDepartaments(),
  ]);
}
