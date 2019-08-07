// ACTIONS TYPES
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILED = 'FETCH_PRODUCTS_FAILED';

// INITIAL STATE
const initialState = {
  data: [],
  isLoading: false,
  productInDetailMode: null,
};

// REDUCER
function products(state = initialState, action) {
  const {type, products} = action;
  switch (type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        data: products,
        isLoading: false,
      };
    case FETCH_PRODUCTS_FAILED:
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
export const fetchProducts = () => ({type: FETCH_PRODUCTS});
export const fetchProductsSuccess = products => ({type: FETCH_PRODUCTS_SUCCESS, products});
export const fetchProductsFailed = () => ({type: FETCH_PRODUCTS_FAILED});

export default products;
