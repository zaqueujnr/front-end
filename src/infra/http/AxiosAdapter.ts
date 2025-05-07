import type { Params } from '../gateways/GatewaysTypes';
import type Http from './Http';
import axios from 'axios';

export default class AxiosAdapter implements Http {
  public constructor() {}
  public async get<T>(url: string, params: Params): Promise<T> {
    const response = await axios.get(url, { params });
    return response.data;
  }
  public post<T>(): Promise<T> {
    throw new Error('Method not implemented.');
  }
}
