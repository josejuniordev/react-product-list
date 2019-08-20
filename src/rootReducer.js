import { combineReducers } from 'redux';
import products from './ducks/products';
import departments from './ducks/departments';
import cart from './ducks/cart';

const rootReducer = combineReducers({
  products,
  departments,
  cart
});

export default rootReducer;
