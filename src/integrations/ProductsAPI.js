import httpRequest from './HttpRequest';
import { fetchProductsUrl } from './Defaults';
import {delay} from "../utility/Utils";
import Produtos from '../mock/Produtos';

export class ProductsAPI {
  constructor() {
    this._url = fetchProductsUrl;
    this._httpRequest = httpRequest;
    this.getProducts = this.getProducts.bind(this);
  }

  async getProducts() {
    return new Promise(async resolve => {
      await delay(1000);
      resolve(Produtos);
    });

    // return await this._httpRequest.get(this._url);
  }
}
