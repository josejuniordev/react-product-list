import {all, takeLatest, call, put} from 'redux-saga/effects';
import {
  FETCH_PRODUCTS,
  FETCH_SINGLE_PRODUCT,
  fetchSingleProductFailed,
  fetchSingleProductSuccess
} from '../ducks/products';
import { fetchProductsFailed, fetchProductsSuccess } from '../ducks/products';
import { ProductsAPI } from '../integrations/ProductsAPI';
import Product, { priceSignature } from '../classes/Product';
import { ProductsHelper } from '../utility/ProductsHelper';

const productsApi = new ProductsAPI();

function* fetchProductsSaga() {
  try {
    const products = yield call(productsApi.getProducts);
    yield put(fetchProductsSuccess(
      ProductsHelper.multipleProductsFactory(products.Produtos)
    ));

  } catch (e) {
    console.error(e);
    put(fetchProductsFailed());
  }
}

function* fetchSingleProductSaga({id}) {
  try {
    const product = yield call(productsApi.getProductById, id);

    yield put(
      fetchSingleProductSuccess(
        ProductsHelper.fullProductFactory(product)
      )
    );

  } catch (e) {
    console.error(e);
    put(fetchSingleProductFailed());
  }
}

function* watchFetchProducts() {
  yield takeLatest(FETCH_PRODUCTS, fetchProductsSaga);
}

function* watchFetchSingleProduct() {
  yield takeLatest(FETCH_SINGLE_PRODUCT, fetchSingleProductSaga);
}

export default function* () {
  yield all([
    watchFetchProducts(),
    watchFetchSingleProduct(),
  ]);
}
