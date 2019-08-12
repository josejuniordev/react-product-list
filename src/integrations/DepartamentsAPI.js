import httpRequest from './HttpRequest';
import {fetchDepartmentsUrl} from './Defaults';
import {delay} from "../utility/Utils";
import Departamentos from '../mock/Departamentos';

export class DepartamentsAPI {
  constructor() {
    this._url = fetchDepartmentsUrl;
    this._httpRequest = httpRequest;
    this.getDepartaments = this.getDepartaments.bind(this);
  }

  async getDepartaments() {
    return new Promise(async resolve => {
      await delay(1000);
      resolve(Departamentos);
    });

    // return await this._httpRequest.get(this._url);
  }
}
