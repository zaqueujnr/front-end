export default class Company {
  constructor(
    readonly companyId: string,
    readonly name: string,
    readonly email: string,
    readonly cnpj: string,
    readonly endereco: string,
  ) {}
}
