export default class Company {
  public constructor(
    public readonly companyId: string,
    public readonly name: string,
    public readonly email: string,
    public readonly cnpj: string,
    public readonly endereco: string,
  ) {}
}
