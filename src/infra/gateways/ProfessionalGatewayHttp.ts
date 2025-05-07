import type Http from '../http/Http';
import type { Params, ProfessionalGateway, ProfessionalList } from './GatewaysTypes';

export default class ProfessionalGatewayHttp implements ProfessionalGateway {
  public constructor(
    public readonly http: Http,
    public readonly baseUrl: string,
  ) {}

  public async getProfessionals(params: Params): Promise<ProfessionalList> {
    return await this.http.get(`${this.baseUrl}/professional`, params);
  }
}
