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

const productsApi = new ProductsAPI();

function* fetchProductsSaga() {
  try {
    const products = yield call(productsApi.getProducts);
    yield put(fetchProductsSuccess(
      products.Produtos.map(product => {
        const price = {...priceSignature};

        price.value = product.Preco.Por;
        price.installment = product.Preco.Parcelamento;
        price.byParcel = product.Preco.PorParcela;

        return new Product(
          product.Nome,
          product.Avaliacao,
          product.Imagem,
          price,
          product.IdProduto
        )
      })
    ));

  } catch (e) {
    console.error(e);
    put(fetchProductsFailed());
  }
}

function* fetchSingleProductSaga({id}) {
  try {
    const product = yield call(productsApi.getProductById, id);
    yield put(fetchSingleProductSuccess(product));

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
