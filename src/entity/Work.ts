export default class Work {
  public constructor(
    public readonly workId: string,
    public readonly description: string,
    public readonly dateInit: Date,
    public readonly dateEnd: Date,
    public readonly typeContract: string,
    public readonly time: string,
    public readonly company: CompanyRef,
  ) {}
}

export interface CompanyRef {
  companyId: string;
  name: string;
}
