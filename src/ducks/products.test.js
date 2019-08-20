import productsReducer, {
  FETCH_SINGLE_PRODUCT,
  FETCH_SINGLE_PRODUCT_SUCCESS,
  FETCH_SINGLE_PRODUCT_FAILED,
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILED,
  fetchSingleProduct,
  fetchSingleProductSuccess,
  fetchSingleProductFailed,
  fetchProducts,
  fetchProductsSuccess,
  fetchProductsFailed, initialState,
} from './products';

import products from '../mock/Produtos';
import product from '../mock/Produto';
import { ProductsHelper } from '../utility/ProductsHelper';


describe('(Ducks) products', () => {

  const productsInstances = ProductsHelper.multipleProductsFactory(products.Produtos);
  const fullProductsInstances = ProductsHelper.fullProductFactory(product);

  describe('Action Creators', () => {
    it('fetchProducts function should return an action of type FETCH_PRODUCTS', () => {
      expect(fetchProducts().type)
        .toBe(FETCH_PRODUCTS);
    });

    it('fetchProductsSuccess function should return an action of type FETCH_PRODUCTS_SUCCESS', () => {
      expect(fetchProductsSuccess(productsInstances).type)
        .toBe(FETCH_PRODUCTS_SUCCESS);
    });

    it('fetchProductsFailed function should return an action of type FETCH_PRODUCTS_FAILED', () => {
      expect(fetchProductsFailed().type)
        .toBe(FETCH_PRODUCTS_FAILED);
    });

    it('fetchSingleProduct function should return an action of type FETCH_SINGLE_PRODUCT', () => {
      expect(fetchSingleProduct().type)
        .toBe(FETCH_SINGLE_PRODUCT);
    });

    it('fetchSingleProductSuccess function should return an action of type FETCH_SINGLE_PRODUCT_SUCCESS', () => {
      expect(fetchSingleProductSuccess(productsInstances).type)
        .toBe(FETCH_SINGLE_PRODUCT_SUCCESS);
    });

    it('fetchSingleProductFailed function should return an action of type FETCH_SINGLE_PRODUCT_FAILED', () => {
      expect(fetchSingleProductFailed().type)
        .toBe(FETCH_SINGLE_PRODUCT_FAILED);
    });
  });

  describe('Reducer', () => {
    it('Should return the current state whenever action is unknown', () => {
      expect(productsReducer(initialState, {type: 'UNKNOWN_ACTION'}))
        .toEqual(initialState);
    });

    it('FETCH_PRODUCTS should set isLoading to true', () => {
      expect(
        productsReducer(initialState, fetchProducts()).isLoading
      ).toBe(true);
    });

    it('FETCH_PRODUCTS_FAILED should set isLoading to false', () => {
      expect(
        productsReducer(initialState, fetchProductsFailed()).isLoading
      ).toBe(false);
    });

    it('FETCH_PRODUCTS_SUCCESS should set isLoading to false', () => {
      expect(
        productsReducer(
          initialState,
          fetchProductsSuccess(productsInstances)
        ).isLoading
      ).toBe(false);
    });

    it('FETCH_PRODUCTS_SUCCESS should set the same data to data property', () => {
      expect(
        productsReducer(
          initialState,
          fetchProductsSuccess(productsInstances)
        ).data
      ).toEqual(productsInstances);
    });

    it('FETCH_SINGLE_PRODUCT should set isLoading to true', () => {
      expect(
        productsReducer(initialState, fetchSingleProduct()).isLoading
      ).toBe(true);
    });

    it('FETCH_SINGLE_PRODUCT_FAILED should set isLoading to false', () => {
      expect(
        productsReducer(initialState, fetchSingleProductFailed()).isLoading
      ).toBe(false);
    });

    it('FETCH_SINGLE_PRODUCT_SUCCESS should set isLoading to false', () => {
      expect(
        productsReducer(
          initialState,
          fetchSingleProductSuccess(
            fullProductsInstances
          )
        ).isLoading
      ).toBe(false);
    });

    it('FETCH_SINGLE_PRODUCT_SUCCESS should set the same data to data property', () => {
      expect(
        productsReducer(
          initialState,
          fetchSingleProductSuccess(
            fullProductsInstances
          )
        ).currentInView
      ).toEqual(fullProductsInstances);
    });
  })

});
