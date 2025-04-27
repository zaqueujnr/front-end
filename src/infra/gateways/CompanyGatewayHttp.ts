import type Http from '../http/Http';
import type { CompanyGateway, Params } from './GatewaysTypes';

export default class CompanyGatewayHttp implements CompanyGateway {
  constructor(
    readonly http: Http,
    readonly baseUrl: string,
  ) {}

  async getCompanies(params?: Params): Promise<any> {
    return await this.http.get(`${this.baseUrl}/company`, params);
  }
}
