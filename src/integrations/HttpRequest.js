export class HttpRequest {

  async _request(params = {url: undefined, method: undefined, headers: undefined, body: undefined}) {
    return await fetch(params.url, params).then(data => data.json());
  }

  async get(url) {
    const params = {
      url,
      method: 'GET'
    };
   return await this._request(params);
  }
}

export default new HttpRequest();
