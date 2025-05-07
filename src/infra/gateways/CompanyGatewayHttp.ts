import type Http from '../http/Http';
import type { CompanyGateway, CompanyList, Params } from './GatewaysTypes';

export default class CompanyGatewayHttp implements CompanyGateway {
  public constructor(
    public readonly http: Http,
    public readonly baseUrl: string,
  ) {}

  public async getCompanies(params: Params): Promise<CompanyList> {
    return await this.http.get(`${this.baseUrl}/company`, params);
  }
}
