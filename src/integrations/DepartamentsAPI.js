import httpRequest from './HttpRequest';
import {fetchDepartmentsUrl} from './Defaults';

export class DepartamentsAPI {
  constructor() {
    this._url = fetchDepartmentsUrl;
    this._httpRequest = httpRequest;
    this.getDepartaments = this.getDepartaments.bind(this);
  }

  async getDepartaments() {
    return await this._httpRequest.get(this._url);
  }
}
