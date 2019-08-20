import {all, takeLatest, put, call} from 'redux-saga/effects';
import {CartAPI} from "../integrations/CartAPI";
import { ADD_TO_CART, addToCartFailed, addToCartSuccess } from '../ducks/cart';

const cartApi = new CartAPI();

function* addToCartSaga({product}) {

  try {
    const cartProducts = yield call(cartApi.addToCart, product, 1);
    yield put(addToCartSuccess(cartProducts));
    alert('Produto inserido no carrinho com sucesso!');

  } catch (e) {
    console.error(e);
    put(addToCartFailed());
  }
}

function* watchAddToCart() {
  yield takeLatest(ADD_TO_CART, addToCartSaga);
}

export default function* () {
  yield all([
    watchAddToCart(),
  ]);
}
