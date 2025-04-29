import Company from './Company';

export default class CompanyList {
  public companies: Company[];

  public constructor() {
    this.companies = [];
  }
  public addCompany(companyData: Company): void {
    const company = new Company(
      companyData.companyId,
      companyData.name,
      companyData.email,
      companyData.cnpj,
      companyData.endereco,
    );
    this.companies.push(company);
  }
  public addCompanies(companies: Company[]): void {
    companies.forEach((company) => this.addCompany(company));
  }
  public setCompanies(companies: Company[]): void {
    this.removeCompanies();
    this.addCompanies(companies);
  }
  public removeCompanies(): void {
    this.companies = [];
  }
  public totalCompanies(): number {
    return this.companies.length;
  }
}
