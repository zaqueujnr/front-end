export default class Work {
  constructor(readonly workId: string, readonly description: string, readonly dateInit: string, readonly dateEnd: string,
    readonly typeContract: string, readonly time: string, readonly company: CompanyRef
  ) {
    this.dateInit = Work.formatDate(dateInit)
    this.dateEnd = Work.formatDate(dateEnd)
  }

  private static formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })
  }
}

export interface CompanyRef {
  companyId: string
  name: string
}
