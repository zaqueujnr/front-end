import Company from "./Company";

export default class CompanyList {
  public companies: Company[]
  
  constructor() {
    this.companies = []
  }
  addCompany(companyData: Company) {
    const company = new Company(companyData.companyId, companyData.name, companyData.email, companyData.cnpj,
      companyData.endereco
    )
    this.companies.push(company)
  }
  addCompanies(companies: Company[]) {
    companies.forEach(company => this.addCompany(company))
  }
  setCompanies(companies: Company[]) {
    this.removeCompanies()
    this.addCompanies(companies)
  }
  removeCompanies() {
    this.companies = []
  }
  totalCompanies() {
    return this.companies.length
  }
}