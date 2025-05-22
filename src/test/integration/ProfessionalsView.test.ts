import Professional from '@/entity/Professional';
import type { ProfessionalGateway, ProfessionalList } from '@/infra/gateways/GatewaysTypes';
import ProfessionalsView from '@/views/ProfessionalsView.vue';
import { flushPromises, mount } from '@vue/test-utils';

beforeEach(() => {
  // simula scrollTo para todos os elementos HTML
  HTMLElement.prototype.scrollTo = jest.fn();
});

const professionalsFirstResponse = [
  new Professional(
    'a1f3479b-4e8d-4fc7-9e5f-d83b7ea746b2',
    'João da Silva',
    'joao.silva@fabrica.com',
    'Operador de Máquinas',
    3200,
  ),
  new Professional(
    'eab12d6f-1c3d-4d83-9e93-61fcbd62a401',
    'Maria Oliveira',
    'maria.oliveira@industria.com',
    'Supervisora de Produção',
    6200,
  ),
  new Professional(
    'b36e90de-c1fa-4e21-8ef5-1c9f6cfd1ee7',
    'Carlos Souza',
    'carlos.souza@fabrica.com',
    'Técnico de Manutenção',
    4800,
  ),
  new Professional(
    'c4d8fb23-7d72-4cf6-b6ff-2f85f4c291cb',
    'Fernanda Rocha',
    'fernanda.rocha@industria.com',
    'Engenheira de Produção',
    8900,
  ),
  new Professional(
    '1dbbfe1a-5e9e-493b-9ff4-7339a2ad8cb0',
    'Ricardo Lima',
    'ricardo.lima@metalurgica.com',
    'Soldador',
    3700,
  ),
];

const professionalsSecondResponse = [
  new Professional(
    'f2806a78-f78f-402e-9a9e-6c64e374ed96',
    'Patrícia Nunes',
    'patricia.nunes@automacao.com',
    'Engenheira de Automação',
    9200,
  ),
  new Professional(
    '844e13f1-3e64-43e0-9912-fc9332d12a71',
    'Eduardo Martins',
    'eduardo.martins@fabrica.com',
    'Eletricista Industrial',
    4600,
  ),
  new Professional(
    'dde29479-c113-493e-994e-f15860db8934',
    'Larissa Teixeira',
    'larissa.teixeira@industria.com',
    'Inspetora de Qualidade',
    5100,
  ),
];

test('Deve renderizar todos os cards', async () => {
  const professionals = [
    new Professional(
      'a1f3479b-4e8d-4fc7-9e5f-d83b7ea746b2',
      'João da Silva',
      'joao.silva@fabrica.com',
      'Operador de Máquinas',
      3200,
    ),
    new Professional(
      'eab12d6f-1c3d-4d83-9e93-61fcbd62a401',
      'Maria Oliveira',
      'maria.oliveira@industria.com',
      'Supervisora de Produção',
      6200,
    ),
    new Professional(
      'b36e90de-c1fa-4e21-8ef5-1c9f6cfd1ee7',
      'Carlos Souza',
      'carlos.souza@fabrica.com',
      'Técnico de Manutenção',
      4800,
    ),
    new Professional(
      'c4d8fb23-7d72-4cf6-b6ff-2f85f4c291cb',
      'Fernanda Rocha',
      'fernanda.rocha@industria.com',
      'Engenheira de Produção',
      8900,
    ),
    new Professional(
      '1dbbfe1a-5e9e-493b-9ff4-7339a2ad8cb0',
      'Ricardo Lima',
      'ricardo.lima@metalurgica.com',
      'Soldador',
      3700,
    ),
    new Professional(
      'f2806a78-f78f-402e-9a9e-6c64e374ed96',
      'Patrícia Nunes',
      'patricia.nunes@automacao.com',
      'Engenheira de Automação',
      9200,
    ),
    new Professional(
      '844e13f1-3e64-43e0-9912-fc9332d12a71',
      'Eduardo Martins',
      'eduardo.martins@fabrica.com',
      'Eletricista Industrial',
      4600,
    ),
    new Professional(
      'dde29479-c113-493e-994e-f15860db8934',
      'Larissa Teixeira',
      'larissa.teixeira@industria.com',
      'Inspetora de Qualidade',
      5100,
    ),
  ];

  const professionalGateway: ProfessionalGateway = {
    async getProfessionals(): Promise<ProfessionalList> {
      return {
        professionals,
        total: 8,
        totalPages: 1,
      };
    },
  };

  const wrapper = mount(ProfessionalsView, {
    global: {
      provide: { professionalGateway },
    },
  });

  await flushPromises();
  const cards = wrapper.findAllComponents({ name: 'ProfessionalCardComponent' });

  expect(cards.length).toBe(8);
});

test('Deve renderizar com paginação', async () => {
  const getProfessionalsMock = jest
    .fn()
    .mockResolvedValueOnce({ professionals: professionalsFirstResponse, total: 5, totalPages: 2 })
    .mockResolvedValueOnce({ professionals: professionalsSecondResponse, total: 3, totalPages: 2 });

  const professionalGateway: ProfessionalGateway = {
    getProfessionals: getProfessionalsMock,
  };

  const wrapper = mount(ProfessionalsView, {
    global: {
      provide: {
        professionalGateway,
      },
    },
  });

  await flushPromises();

  let cards = wrapper.findAllComponents({ name: 'ProfessionalCardComponent' });
  expect(cards).toHaveLength(5);

  const grid = wrapper.findComponent({ name: 'DynamicGridComponent' });
  grid.vm.$emit('loadMore');
  await flushPromises();

  expect(getProfessionalsMock).toHaveBeenCalledWith({
    filters: {
      keywords: '',
    },
    page: 2,
  });

  cards = wrapper.findAllComponents({ name: 'ProfessionalCardComponent' });
  expect(cards).toHaveLength(8);
});

test('Deve filtrar por palavra chave', async () => {
  const professionals = [
    new Professional(
      'f2806a78-f78f-402e-9a9e-6c64e374ed96',
      'Patrícia Nunes',
      'patricia.nunes@automacao.com',
      'Engenheira de Automação',
      9200,
    ),
    new Professional(
      '844e13f1-3e64-43e0-9912-fc9332d12a71',
      'Eduardo Martins',
      'eduardo.martins@fabrica.com',
      'Eletricista Industrial',
      4600,
    ),
    new Professional(
      'dde29479-c113-493e-994e-f15860db8934',
      'Larissa Teixeira',
      'larissa.teixeira@industria.com',
      'Inspetora de Qualidade',
      5100,
    ),
  ];

  const getProfessionalsSpy = jest.fn().mockResolvedValue({
    professionals,
    total: 3,
    totalPages: 1,
  });

  const professionalGateway: ProfessionalGateway = {
    getProfessionals: getProfessionalsSpy,
  };

  const wrapper = mount(ProfessionalsView, {
    global: {
      provide: { professionalGateway },
    },
  });

  const input = wrapper.findComponent({ name: 'InputSearchComponent' }).find('input');
  input.setValue('a');

  await flushPromises();

  expect(getProfessionalsSpy).toHaveBeenCalledWith({
    filters: {
      keywords: 'a',
    },
    page: 1,
  });

  const cards = wrapper.findAllComponents({ name: 'ProfessionalCardComponent' });
  expect(cards).toHaveLength(3);
});

test('Deve filtrar por palavra chave com paginação', async () => {
  const getProfessionalsMock = jest
    .fn()
    .mockResolvedValueOnce({ professionals: [] })
    .mockResolvedValueOnce({ professionals: professionalsFirstResponse, total: 5, totalPages: 2 })
    .mockResolvedValueOnce({ professionals: professionalsSecondResponse, total: 3, totalPages: 2 });

  const professionalGateway: ProfessionalGateway = {
    getProfessionals: getProfessionalsMock,
  };

  const wrapper = mount(ProfessionalsView, {
    global: {
      provide: { professionalGateway },
    },
  });

  const input = wrapper.findComponent({ name: 'InputSearchComponent' }).find('input');
  input.setValue('a');

  await flushPromises();

  expect(getProfessionalsMock).toHaveBeenCalledWith({
    filters: {
      keywords: 'a',
    },
    page: 1,
  });

  let cards = wrapper.findAllComponents({ name: 'ProfessionalCardComponent' });
  expect(cards).toHaveLength(5);

  const grid = wrapper.findComponent({ name: 'DynamicGridComponent' });
  grid.vm.$emit('loadMore');

  await flushPromises();

  expect(getProfessionalsMock).toHaveBeenCalledWith({
    filters: {
      keywords: 'a',
    },
    page: 2,
  });

  cards = wrapper.findAllComponents({ name: 'ProfessionalCardComponent' });
  expect(cards).toHaveLength(8);
});

test('Deve filtrar por palavra chave depois remover a pesquisa', async () => {
  const getProfessionalsMock = jest
    .fn()
    .mockResolvedValueOnce({ professionals: [] })
    .mockResolvedValueOnce({ professionals: professionalsSecondResponse })
    .mockResolvedValueOnce({ professionals: professionalsFirstResponse });

  const professionalGateway: ProfessionalGateway = {
    getProfessionals: getProfessionalsMock,
  };

  const wrapper = mount(ProfessionalsView, {
    global: {
      provide: { professionalGateway },
    },
  });

  const input = wrapper.findComponent({ name: 'InputSearchComponent' }).find('input');
  input.setValue('a');

  await flushPromises();

  expect(getProfessionalsMock).toHaveBeenCalledWith({
    filters: {
      keywords: 'a',
    },
    page: 1,
  });

  let cards = wrapper.findAllComponents({ name: 'ProfessionalCardComponent' });
  expect(cards).toHaveLength(3);

  input.setValue('');

  await flushPromises();

  expect(getProfessionalsMock).toHaveBeenCalledWith({
    filters: {
      keywords: '',
    },
    page: 1,
  });

  cards = wrapper.findAllComponents({ name: 'ProfessionalCardComponent' });
  expect(cards).toHaveLength(5);
});
