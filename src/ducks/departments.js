// ACTIONS TYPES
export const FETCH_DEPARTMENTS = 'FETCH_DEPARTMENTS';
export const FETCH_DEPARTMENTS_SUCCESS = 'FETCH_DEPARTMENTS_SUCCESS';
export const FETCH_DEPARTMENTS_FAILED = 'FETCH_DEPARTMENTS_FAILED';

// INITIAL STATE
export const initialState = {
  data: [],
  isLoading: false,
};

// REDUCER
function departments(state = initialState, action) {
  const {type, departments} = action;
  switch (type) {
    case FETCH_DEPARTMENTS:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_DEPARTMENTS_SUCCESS:
      return {
        ...state,
        data: departments,
        isLoading: false,
      };
    case FETCH_DEPARTMENTS_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return {
        ...state
      }
  }
}

// ACTION CREATORS
export const fetchDepartments = () => ({type: FETCH_DEPARTMENTS});
export const fetchDepartmentsSuccess = departments => ({type: FETCH_DEPARTMENTS_SUCCESS, departments});
export const fetchDepartmentsFailed = () => ({type: FETCH_DEPARTMENTS_FAILED});

export default departments;
