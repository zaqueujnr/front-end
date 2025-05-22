import type Work from '@/entity/Work';
import type Http from '../http/Http';
import type { Params, WorkGateway, WorkList } from './GatewaysTypes';

export default class WorkGatewayHttp implements WorkGateway {
  public constructor(
    public readonly http: Http,
    public readonly baseUrl: string,
  ) {}

  public async getWorks(params: Params): Promise<WorkList> {
    const result: WorkList = await this.http.get(`${this.baseUrl}/work`, params);

    const works = result.works.map((work: Work) => ({
      ...work,
      dateInit: new Date(work.dateInit),
      dateEnd: new Date(work.dateEnd),
    }));

    return {
      ...result,
      works,
    };
  }
}
