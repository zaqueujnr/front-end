import type Http from '../http/Http';
import type { Params, WorkGateway } from './GatewaysTypes';

export default class WorkGatewayHttp implements WorkGateway {
  public constructor(
    public readonly http: Http,
    public readonly baseUrl: string,
  ) {}

  public async getWorks(params?: Params): Promise<{ data: any }> {
    return await this.http.get(`${this.baseUrl}/work`, params);
  }
}
