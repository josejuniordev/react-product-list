import {all, takeLatest, put, call} from 'redux-saga/effects';
import {FETCH_DEPARTMENTS, fetchDepartmentsFailed} from "../ducks/departments";
import {DepartamentsAPI} from "../integrations/DepartamentsAPI";

const departamentsApi = new DepartamentsAPI();

function* fetchDepartamentsSaga() {
  try {
    const departaments = yield call(departamentsApi.getDepartaments);
    console.log('departamentos', departaments)
  } catch (e) {
    console.log(e)
    put(fetchDepartmentsFailed());
  }
}

function* watchFetchDepartaments() {
  yield takeLatest(FETCH_DEPARTMENTS, fetchDepartamentsSaga);
}

export default function* () {
  yield all([
    watchFetchDepartaments(),
  ]);
}
