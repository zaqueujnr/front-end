import CompanyList from '@/entity/CompanyList';

test('Deve criar um lista de empresas vazia', () => {
  const companyList = new CompanyList();

  expect(companyList.totalCompanies()).toBe(0);
});

test('Deve criar uma lista adicionando empresas', () => {
  const companyList = new CompanyList();

  const companies = [
    {
      companyId: 'd1b1e8f4-4700-4b94-bc59-c7524e5e0b2f',
      name: 'Tech Solutions Ltda',
      email: 'contact@techsolutions.com',
      cnpj: '12.345.678/0001-00',
      endereco: 'Rua A, 123',
    },
    {
      companyId: 'a94f9ad4-99ea-4bda-bec7-d71e3a06c6e6',
      name: 'Infra Pro',
      email: 'infra@pro.com',
      cnpj: '98.765.432/0001-99',
      endereco: 'Av. B, 456',
    },
    {
      companyId: '53f97fe5-2d07-4f5d-b5ac-3e68c9a1b988',
      name: 'SecureNet',
      email: 'secure@net.com',
      cnpj: '01.234.567/0001-88',
      endereco: 'Rua C, 789',
    },
  ];
  companyList.addCompanies(companies);
  expect(companyList.totalCompanies()).toBe(3);
  companyList.addCompanies([
    {
      companyId: 'd53c2bf7-b75d-450d-aad7-d2a9458f7317',
      name: 'GreenTech',
      email: 'green@tech.com',
      cnpj: '23.456.789/0001-01',
      endereco: 'Avenida Verde, 101',
    },
    {
      companyId: 'f42b1fe3-77d1-4e7f-8ad4-5d1b9f542215',
      name: 'Byte Solutions',
      email: 'byte@solutions.com',
      cnpj: '34.567.890/0001-22',
      endereco: 'Rua Digital, 202',
    },
  ]);
  expect(companyList.totalCompanies()).toBe(5);
});

test('Deve retornar as empresas adicionadas corretamente', () => {
  const companyList = new CompanyList();
  const companies = [
    {
      companyId: 'd1b1e8f4-4700-4b94-bc59-c7524e5e0b2f',
      name: 'Tech Solutions Ltda',
      email: 'contact@techsolutions.com',
      cnpj: '12.345.678/0001-00',
      endereco: 'Rua A, 123',
    },
  ];
  companyList.addCompanies(companies);
  expect(companyList.getCompanies()).toEqual(companies);
});

test('Deve remover todos as empresas', () => {
  const companyList = new CompanyList();
  const companies = [
    {
      companyId: 'd1b1e8f4-4700-4b94-bc59-c7524e5e0b2f',
      name: 'Tech Solutions Ltda',
      email: 'contact@techsolutions.com',
      cnpj: '12.345.678/0001-00',
      endereco: 'Rua A, 123',
    },
    {
      companyId: 'a94f9ad4-99ea-4bda-bec7-d71e3a06c6e6',
      name: 'Infra Pro',
      email: 'infra@pro.com',
      cnpj: '98.765.432/0001-99',
      endereco: 'Av. B, 456',
    },
  ];
  companyList.addCompanies(companies);
  expect(companyList.totalCompanies()).toBe(2);
  companyList.removeCompanies();
  expect(companyList.totalCompanies()).toBe(0);
});

test('Deve limpar a lista e setar as novas empresas', () => {
  const companyList = new CompanyList();
  const companies = [
    {
      companyId: 'd1b1e8f4-4700-4b94-bc59-c7524e5e0b2f',
      name: 'Tech Solutions Ltda',
      email: 'contact@techsolutions.com',
      cnpj: '12.345.678/0001-00',
      endereco: 'Rua A, 123',
    },
    {
      companyId: 'a94f9ad4-99ea-4bda-bec7-d71e3a06c6e6',
      name: 'Infra Pro',
      email: 'infra@pro.com',
      cnpj: '98.765.432/0001-99',
      endereco: 'Av. B, 456',
    },
  ];
  companyList.addCompanies(companies);
  expect(companyList.totalCompanies()).toBe(2);
  companyList.setCompanies(companies);
  expect(companyList.totalCompanies()).toBe(2);
});
