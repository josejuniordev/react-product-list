// ACTIONS TYPES
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILED = 'FETCH_PRODUCTS_FAILED';

export const FETCH_SINGLE_PRODUCT = 'FETCH_SINGLE_PRODUCT';
export const FETCH_SINGLE_PRODUCT_SUCCESS = 'FETCH_SINGLE_PRODUCT_SUCCESS';
export const FETCH_SINGLE_PRODUCT_FAILED = 'FETCH_SINGLE_PRODUCT_FAILED';
// INITIAL STATE
const initialState = {
  data: [],
  currentInView: null,
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
    case FETCH_SINGLE_PRODUCT:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        currentInView: product,
        isLoading: false,
      };
    case FETCH_SINGLE_PRODUCT_FAILED:
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

export const fetchSingleProduct = () => ({type: FETCH_SINGLE_PRODUCT});
export const fetchSingleProductSuccess = products => ({type: FETCH_SINGLE_PRODUCT_SUCCESS, products});
export const fetchSingleProductFailed = () => ({type: FETCH_SINGLE_PRODUCT_FAILED});

export default products;
