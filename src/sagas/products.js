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
import FullProduct, { discountSignature, ratingSignature } from '../classes/FullProduct';

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
    const rating = {...ratingSignature};
    rating.quantity = product.Avaliacao.Quantidade;
    rating.stars = product.Avaliacao.Estrelas;

    const pricing = {...priceSignature};
    pricing.from = product.Preco.De;
    pricing.value = product.Preco.Por;
    pricing.installment = product.Preco.Parcelamento;
    pricing.byParcel = product.Preco.PorParcela;

    pricing.discounts = product.Preco.DescontoPagamento.map(item => {

      const discount = {...discountSignature};

      discount.active = item.FlagAtivo;
      discount.icon = item.Ico;
      discount.name = item.Nome;
      discount.description = item.Descricao;
      discount.value = item.Por;
      discount.installment = item.Parcelamento;
      discount.percentage = item.PercentualDesconto;

      return discount;
    });

    yield put(fetchSingleProductSuccess(
      new FullProduct(
        product.IdProduto,
        product.CodigoItem,
        product.Nome,
        rating,
        product.Imagens,
        pricing
      )
    ));

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
