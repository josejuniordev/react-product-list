import cartReducer, {
  ADD_TO_CART,
  ADD_TO_CART_FAILED,
  ADD_TO_CART_SUCCESS,
  initialState,
  addToCart,
  addToCartFailed,
  addToCartSuccess
} from './cart';
import Product from '../classes/Product';
import ProductMockData from '../mock/Produto';

import { ProductsHelper } from '../utility/ProductsHelper';
import FullProduct from '../classes/FullProduct';

describe('(Ducks) cart', () => {

  describe('Action Creators', () => {
    it('Should addToCart function return an action of type ADD_TO_CART', () => {
      expect(addToCart(new Product()).type)
        .toBe(ADD_TO_CART);
    });

    it('Should addToCartSuccess function return an action of type ADD_TO_CART_SUCCESS', () => {
      expect(addToCartSuccess([new Product()]).type)
        .toBe(ADD_TO_CART_SUCCESS);
    });

    it('Should addToCartFailed function return an action of type ADD_TO_CART_FAILED', () => {
      expect(addToCartFailed().type)
        .toBe(ADD_TO_CART_FAILED);
    });
  });

  describe('Reducer', () => {
    it('Should return the current state whenever action is unknown', () => {
      expect(cartReducer(initialState, {type: 'UNKNOWN_ACTION'}))
        .toEqual(initialState);
    });

    it('ADD_TO_CART should set isLoading to true', () => {
      expect(
        cartReducer(initialState, addToCart(new FullProduct())).isLoading
      ).toBe(true);
    });

    it('ADD_TO_CART_FAILED should set isLoading to false', () => {
      expect(
        cartReducer(initialState, addToCartFailed()).isLoading
      ).toBe(false);
    });

    it('ADD_TO_CART_SUCCESS should set isLoading to false', () => {
      const fullProductInstance = [ProductsHelper.fullProductFactory(ProductMockData)];

      expect(
        cartReducer(initialState, addToCartSuccess(fullProductInstance)).isLoading
      ).toBe(false);
    });

    it('ADD_TO_CART_SUCCESS should set the same data to data property', () => {
      const fullProductInstance = [ProductsHelper.fullProductFactory(ProductMockData)];

      expect(
        cartReducer(initialState, addToCartSuccess(fullProductInstance)).data
      ).toEqual(fullProductInstance);
    });
  })

});
