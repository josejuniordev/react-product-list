// ACTIONS TYPES
export const ADD_TO_CART = 'ADD_TO_CART';
export const ADD_TO_CART_SUCCESS = 'ADD_TO_CART_SUCCESS';
export const ADD_TO_CART_FAILED = 'ADD_TO_CART_FAILED';

// INITIAL STATE
export const initialState = {
  data: [],
  isLoading: false,
};

// REDUCER
function departments(state = initialState, action) {
  const {type, products} = action;
  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_TO_CART_SUCCESS:
      return {
        data: products,
        isLoading: false,
      };
    case ADD_TO_CART_FAILED:
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
export const addToCart = (product) => ({type: ADD_TO_CART, product});
export const addToCartSuccess = products => ({type: ADD_TO_CART_SUCCESS, products});
export const addToCartFailed = () => ({type: ADD_TO_CART_FAILED});

export default departments;
