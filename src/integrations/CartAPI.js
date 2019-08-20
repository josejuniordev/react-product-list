import {delay} from "../utility/Utils";
import { appPrefix } from '../constants/settings';

export class CartAPI {
  constructor() {
    this._cartStorageKey = `${appPrefix}products`;
    this.addToCart = this.addToCart.bind(this);
  }

  async addToCart(product) {

    if (!product) {
      return Promise.reject('Por favor, informe produtos antes de continuar');
    }

    return new Promise(async resolve => {
      await delay(1000);

      let currentProducts = [...this._getAllFromStorage()];

      currentProducts.push(product);

      this._addToStorage(currentProducts);

      resolve(currentProducts);
    });

  }

  _getAllFromStorage() {
    const fromStorage = window.localStorage.getItem(this._cartStorageKey);

    if (fromStorage) {
      return JSON.parse(atob(fromStorage));
    }

    return [];
  }

  _addToStorage(items) {
    if (!items) {
      return;
    }

    const encrypted = btoa(JSON.stringify(items));
    window.localStorage.setItem(this._cartStorageKey, encrypted);
  }
}
