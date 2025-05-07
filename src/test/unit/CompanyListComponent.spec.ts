import { mount } from '@vue/test-utils';
import CompanyList from '@/entity/CompanyList';
import Company from '@/entity/Company';
import CompanyCardList from '@/components/features/CompanyCardList.vue';

const mockCompanyList = new CompanyList();

mockCompanyList.addCompanies([
  new Company(
    'd0f3a8b9-1e5a-4c2f-8d35-5d1ef9c82a01',
    'Tech Solutions LTDA',
    'contato@techsolutions.com.br',
    '12.345.678/0001-90',
    'Rua das Inovações, 123 - São Paulo, SP',
  ),
  new Company(
    '4a3b9d5e-88b0-4649-8329-61ce2df8fbd7',
    'Alpha Digital S.A.',
    'rh@alphadigital.com',
    '98.765.432/0001-10',
    'Av. das Américas, 456 - Rio de Janeiro, RJ',
  ),
  new Company(
    '2b13a47c-7f8d-4dd2-801e-6c5f790f9a98',
    'InovaSoft Tecnologia',
    'suporte@inovasoft.com.br',
    '00.112.233/0001-55',
    'Rua do Progresso, 789 - Curitiba, PR',
  ),
  new Company(
    '9a3d9131-6f6f-4fcb-bd3a-4c2f3eb63b3b',
    'Eco Sistemas',
    'vendas@ecosistemas.com',
    '11.223.344/0001-77',
    'Alameda Verde, 321 - Belo Horizonte, MG',
  ),
  new Company(
    'f9e55a4c-843e-45b6-b6f3-97eb0b5e601f',
    'Nexa Informática',
    'comercial@nexainformatica.com.br',
    '22.334.455/0001-88',
    'Praça Central, 12 - Porto Alegre, RS',
  ),
]);

test('Renderiza os cards corretamente', () => {
  const wrapper = mount(CompanyCardList, {
    props: {
      companyList: mockCompanyList,
    },
  });

  const cards = wrapper.findAllComponents({ name: 'CompanyCardComponent' });

  const companyList = mockCompanyList.getCompanies();
  expect(cards).toHaveLength(companyList.length);

  companyList.forEach((company, index) => {
    const card = cards[index];

    expect(card.props('index')).toBe(index);
    expect(card.props('name')).toBe(company.name);
    expect(card.props('email')).toEqual(company.email);
    expect(card.props('cnpj')).toEqual(company.cnpj);
    expect(card.props('endereco')).toBe(company.endereco);
  });
});

test('Não renderiza nenhum card quando a lista esta vazia', () => {
  const wrapper = mount(CompanyCardList, {
    props: {
      companyList: [],
    },
  });

  expect(wrapper.findAllComponents({ name: 'CompanyCardComponent' })).toHaveLength(0);
});
