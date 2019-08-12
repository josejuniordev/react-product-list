import {all, takeLatest, call, put} from 'redux-saga/effects';
import {FETCH_PRODUCTS} from "../ducks/products";
import { fetchProductsFailed, fetchProductsSuccess } from '../ducks/products';
import { ProductsAPI } from '../integrations/ProductsAPI';

const productsApi = new ProductsAPI();

function* fetchProductsSaga() {
  try {
    const products = yield call(productsApi.getProducts);
    yield put(fetchProductsSuccess(products.Produtos));

  } catch (e) {
    console.error(e);
    put(fetchProductsFailed());
  }
}

function* watchFetchProducts() {
  yield takeLatest(FETCH_PRODUCTS, fetchProductsSaga);
}

export default function* () {
  yield all([
    watchFetchProducts(),
  ]);
}
