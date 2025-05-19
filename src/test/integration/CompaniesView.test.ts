import Company from '@/entity/Company';
import type { CompanyGateway, CompanyList } from '@/infra/gateways/GatewaysTypes';
import CompaniesView from '@/views/CompaniesView.vue';
import { flushPromises, mount } from '@vue/test-utils';

beforeEach(() => {
  // simula scrollTo para todos os elementos HTML
  HTMLElement.prototype.scrollTo = jest.fn();
});

const companiesFirstResponse = [
  new Company(
    'd1a6b8e2-5d73-4f1c-a3f6-f1c8c7d59d13',
    'Indústria Alpha',
    'contato@alpha.com.br',
    '12.345.678/0001-90',
    'Rua das Indústrias, 1000 - São Paulo, SP',
  ),
  new Company(
    'f3e7a4d9-87c9-4e2f-90d5-9cde20c3f9ac',
    'Metalúrgica Beta',
    'sac@metalbetabr.com',
    '98.765.432/0001-12',
    'Av. Ferro, 250 - Belo Horizonte, MG',
  ),
  new Company(
    'ab41f7a6-5be8-4b87-bd72-1a7ad40e0372',
    'AutoMecânica Gama',
    'comercial@gamaauto.com',
    '45.321.678/0001-33',
    'Rod. BR-101, km 120 - Joinville, SC',
  ),
  new Company(
    'c56bd192-b0ed-4d34-bcf7-5e3e1d302c79',
    'Plásticos Delta',
    'contato@delta.com.br',
    '23.456.789/0001-55',
    'Rua Polímeros, 800 - Manaus, AM',
  ),
  new Company(
    '9e3fcb8a-374e-4f2e-961a-3fa4141fa294',
    'Tecnometal Epsilon',
    'epsilon@tecnometal.com',
    '67.890.123/0001-77',
    'Av. Indústria Pesada, 400 - Caxias do Sul, RS',
  ),
];

const companiesSecondResponse = [
  new Company(
    'b8d2e4c1-73c4-4ef1-b930-d9e65f083aad',
    'Engemec Indústrias',
    'contato@engemec.com.br',
    '11.223.344/0001-66',
    'Av. das Máquinas, 350 - Campinas, SP',
  ),
  new Company(
    'e44f994f-97e3-4eaf-a8ae-8915e749bfe3',
    'Termotec Soluções Térmicas',
    'vendas@termotec.com',
    '99.888.777/0001-11',
    'Rua Caldeiras, 90 - Curitiba, PR',
  ),
  new Company(
    'fef4a98a-7a4e-4b61-a3ea-0c6db37a07d9',
    'LogiSteel Transportes Industriais',
    'logistica@logisteel.com',
    '66.555.444/0001-22',
    'Estrada Industrial, 1400 - Contagem, MG',
  ),
];

test('Deve renderizar todos os cards', async () => {
  const companies = [
    new Company(
      'd1a6b8e2-5d73-4f1c-a3f6-f1c8c7d59d13',
      'Indústria Alpha',
      'contato@alpha.com.br',
      '12345678000190',
      'Rua das Indústrias, 1000 - São Paulo, SP',
    ),
    new Company(
      'f3e7a4d9-87c9-4e2f-90d5-9cde20c3f9ac',
      'Metalúrgica Beta',
      'sac@metalbetabr.com',
      '98765432000112',
      'Av. Ferro, 250 - Belo Horizonte, MG',
    ),
    new Company(
      'ab41f7a6-5be8-4b87-bd72-1a7ad40e0372',
      'AutoMecânica Gama',
      'comercial@gamaauto.com',
      '45321678000133',
      'Rod. BR-101, km 120 - Joinville, SC',
    ),
    new Company(
      'c56bd192-b0ed-4d34-bcf7-5e3e1d302c79',
      'Plásticos Delta',
      'contato@delta.com.br',
      '23456789000155',
      'Rua Polímeros, 800 - Manaus, AM',
    ),
    new Company(
      '9e3fcb8a-374e-4f2e-961a-3fa4141fa294',
      'Tecnometal Epsilon',
      'epsilon@tecnometal.com',
      '67890123000177',
      'Av. Indústria Pesada, 400 - Caxias do Sul, RS',
    ),
  ];

  const companyGateway: CompanyGateway = {
    async getCompanies(): Promise<CompanyList> {
      return {
        companies,
        total: 5,
        totalPages: 1,
      };
    },
  };

  const wrapper = mount(CompaniesView, {
    global: {
      provide: { companyGateway },
    },
  });

  await flushPromises();
  const cards = wrapper.findAllComponents({ name: 'CompanyCardComponent' });

  expect(cards.length).toBe(5);
});

test('Deve renderizar com paginação', async () => {
  const getCompaniesMock = jest
    .fn()
    .mockResolvedValueOnce({ companies: companiesFirstResponse, total: 8, totalPages: 2 })
    .mockResolvedValueOnce({ companies: companiesSecondResponse, total: 8, totalPages: 2 });

  const companyGateway: CompanyGateway = {
    getCompanies: getCompaniesMock,
  };

  const wrapper = mount(CompaniesView, {
    global: {
      provide: {
        companyGateway,
      },
    },
  });

  await flushPromises();

  let cards = wrapper.findAllComponents({ name: 'CompanyCardComponent' });
  expect(cards).toHaveLength(5);

  const grid = wrapper.findComponent({ name: 'DynamicGridComponent' });
  grid.vm.$emit('loadMore');
  await flushPromises();

  expect(getCompaniesMock).toHaveBeenCalledWith({
    filters: {
      keywords: '',
    },
    page: 2,
  });

  cards = wrapper.findAllComponents({ name: 'CompanyCardComponent' });
  expect(cards).toHaveLength(8);
});

test('Deve filtrar por palavra chave', async () => {
  const getCompaniesSpy = jest.fn().mockResolvedValue({
    companies: companiesSecondResponse,
    total: 3,
    totalPages: 1,
  });

  const companyGateway: CompanyGateway = {
    getCompanies: getCompaniesSpy,
  };

  const wrapper = mount(CompaniesView, {
    global: {
      provide: { companyGateway },
    },
  });

  const input = wrapper.findComponent({ name: 'InputSearchComponent' }).find('input');
  input.setValue('a');

  await flushPromises();

  expect(getCompaniesSpy).toHaveBeenCalledWith({
    filters: {
      keywords: 'a',
    },
    page: 1,
  });

  const cards = wrapper.findAllComponents({ name: 'CompanyCardComponent' });
  expect(cards).toHaveLength(3);
});

test('Deve filtrar por palavra chave com paginação', async () => {
  const getCompaniesMock = jest
    .fn()
    .mockResolvedValueOnce({ companies: [] })
    .mockResolvedValueOnce({ companies: companiesFirstResponse, total: 8, totalPages: 2 })
    .mockResolvedValueOnce({ companies: companiesSecondResponse, total: 8, totalPages: 2 });

  const companyGateway: CompanyGateway = {
    getCompanies: getCompaniesMock,
  };

  const wrapper = mount(CompaniesView, {
    global: {
      provide: { companyGateway },
    },
  });

  const input = wrapper.findComponent({ name: 'InputSearchComponent' }).find('input');
  input.setValue('a');

  await flushPromises();

  expect(getCompaniesMock).toHaveBeenCalledWith({
    filters: {
      keywords: 'a',
    },
    page: 1,
  });

  let cards = wrapper.findAllComponents({ name: 'CompanyCardComponent' });
  expect(cards).toHaveLength(5);

  const grid = wrapper.findComponent({ name: 'DynamicGridComponent' });
  grid.vm.$emit('loadMore');

  await flushPromises();

  expect(getCompaniesMock).toHaveBeenCalledWith({
    filters: {
      keywords: 'a',
    },
    page: 2,
  });

  cards = wrapper.findAllComponents({ name: 'CompanyCardComponent' });
  expect(cards).toHaveLength(8);
});

test('Deve filtrar por palavra chave depois remover a pesquisa', async () => {
  const getCompaniesMock = jest
    .fn()
    .mockResolvedValueOnce({ companies: [] })
    .mockResolvedValueOnce({ companies: companiesSecondResponse })
    .mockResolvedValueOnce({ companies: companiesFirstResponse });

  const companyGateway: CompanyGateway = {
    getCompanies: getCompaniesMock,
  };

  const wrapper = mount(CompaniesView, {
    global: {
      provide: { companyGateway },
    },
  });

  const input = wrapper.findComponent({ name: 'InputSearchComponent' }).find('input');
  input.setValue('a');

  await flushPromises();

  expect(getCompaniesMock).toHaveBeenCalledWith({
    filters: {
      keywords: 'a',
    },
    page: 1,
  });

  let cards = wrapper.findAllComponents({ name: 'CompanyCardComponent' });
  expect(cards).toHaveLength(3);

  input.setValue('');

  await flushPromises();

  expect(getCompaniesMock).toHaveBeenCalledWith({
    filters: {
      keywords: '',
    },
    page: 1,
  });

  cards = wrapper.findAllComponents({ name: 'CompanyCardComponent' });
  expect(cards).toHaveLength(5);
});
