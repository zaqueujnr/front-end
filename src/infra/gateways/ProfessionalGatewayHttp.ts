import type Http from "../http/Http";
import type { Params, ProfessionalGateway } from "./GatewaysTypes";

export default class ProfessionalGatewayHttp implements ProfessionalGateway {
  constructor(readonly http: Http, readonly baseUrl: string) {}

  async getProfessionals(params?: Params): Promise<any> {
    return await this.http.get(`${this.baseUrl}/professional`, params )
  }

}
