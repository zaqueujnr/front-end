export default interface Http {
  get(url: string, params: any): Promise<any>;
  post(): Promise<any>;
}
