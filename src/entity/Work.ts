export default class Work {
  public constructor(
    public readonly workId: string,
    public readonly description: string,
    public readonly dateInit: Date,
    public readonly dateEnd: Date,
    public readonly typeContract: string,
    public readonly time: string,
    public readonly company: CompanyRef,
  ) {
    // this.dateInit = Work.formatDate(dateInit);
    // this.dateEnd = Work.formatDate(dateEnd);
  }

  private static formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  }
}

export interface CompanyRef {
  companyId: string;
  name: string;
}
