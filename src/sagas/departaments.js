import {all, takeLatest, put, call} from 'redux-saga/effects';
import {FETCH_DEPARTMENTS, fetchDepartmentsFailed, fetchDepartmentsSuccess} from "../ducks/departments";
import {DepartamentsAPI} from "../integrations/DepartamentsAPI";

const departamentsApi = new DepartamentsAPI();

function* fetchDepartamentsSaga() {
  try {
    const departaments = yield call(departamentsApi.getDepartaments);
    yield put(fetchDepartmentsSuccess(departaments.Departamentos));

  } catch (e) {
    console.error(e);
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
