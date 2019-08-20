import departmentsReducer, {
  FETCH_DEPARTMENTS,
  FETCH_DEPARTMENTS_FAILED,
  FETCH_DEPARTMENTS_SUCCESS,
  fetchDepartments,
  fetchDepartmentsFailed,
  fetchDepartmentsSuccess, initialState
} from './departments';

import departamentos from '../mock/Departamentos';

describe('(Ducks) departments', () => {

  describe('Action Creators', () => {
    it('fetchDepartments function should return an action of type FETCH_DEPARTMENTS', () => {
      expect(fetchDepartments().type)
        .toBe(FETCH_DEPARTMENTS);
    });

    it('fetchDepartmentsSuccess function should return an action of type FETCH_DEPARTMENTS_SUCCESS', () => {
      expect(fetchDepartmentsSuccess(departamentos.Departamentos).type)
        .toBe(FETCH_DEPARTMENTS_SUCCESS);
    });

    it('fetchDepartmentsFailed function should return an action of type FETCH_DEPARTMENTS_FAILED', () => {
      expect(fetchDepartmentsFailed().type)
        .toBe(FETCH_DEPARTMENTS_FAILED);
    });
  });

  describe('Reducer', () => {
    it('Should return the current state whenever action is unknown', () => {
      expect(departmentsReducer(initialState, {type: 'UNKNOWN_ACTION'}))
        .toEqual(initialState);
    });

    it('FETCH_DEPARTMENTS should set isLoading to true', () => {
      expect(
        departmentsReducer(initialState, fetchDepartments()).isLoading
      ).toBe(true);
    });

    it('FETCH_DEPARTMENTS_FAILED should set isLoading to false', () => {
      expect(
        departmentsReducer(initialState, fetchDepartmentsFailed()).isLoading
      ).toBe(false);
    });

    it('FETCH_DEPARTMENTS_SUCCESS should set isLoading to false', () => {
      expect(
        departmentsReducer(initialState, fetchDepartmentsSuccess(departamentos.Departamentos)).isLoading
      ).toBe(false);
    });

    it('FETCH_DEPARTMENTS_SUCCESS should set the same data to data property', () => {
      expect(
        departmentsReducer(initialState, fetchDepartmentsSuccess(departamentos.Departamentos)).data
      ).toEqual(departamentos.Departamentos);
    });
  })

});
