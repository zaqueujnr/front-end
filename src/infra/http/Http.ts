import type { Params } from '../gateways/GatewaysTypes';

export default interface Http {
  get<T>(url: string, params: Params): Promise<T>;
  post<T>(): Promise<T>;
}
