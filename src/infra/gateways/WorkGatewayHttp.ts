import type Http from '../http/Http';
import type { Params, WorkGateway } from './GatewaysTypes';

export default class WorkGatewayHttp implements WorkGateway {
  constructor(
    readonly http: Http,
    readonly baseUrl: string,
  ) {}

  async getWorks(params?: Params): Promise<{ data: any }> {
    return await this.http.get(`${this.baseUrl}/work`, params);
  }
}
