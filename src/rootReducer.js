import { combineReducers } from 'redux';
import products from './ducks/products';
import departments from './ducks/departments';

const rootReducer = combineReducers({
  products,
  departments,
});

export default rootReducer;
