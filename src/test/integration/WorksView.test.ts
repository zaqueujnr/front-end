import Work from '@/entity/Work';
import type { WorkGateway, WorkList } from '@/infra/gateways/GatewaysTypes';
import WorksView from '@/views/WorksView.vue';
import { flushPromises, mount } from '@vue/test-utils';

beforeEach(() => {
  // simula scrollTo para todos os elementos HTML
  HTMLElement.prototype.scrollTo = jest.fn();
});

test('Deve renderizar todos os cards na primeira pagina', async () => {
  const works = [
    new Work(
      'aaaf1f10-0005-4f10-bbbb-000000000005',
      'Tecnico em Automacao',
      new Date('2024-04-01T00:00:00.000Z'),
      new Date('2024-04-01T00:00:00.000Z'),
      'CLT',
      'manha',
      {
        companyId: 'e90f1f10-0005-4f10-aaaa-000000000005',
        name: 'Automacao Brasil',
      },
    ),
    new Work(
      '4e149fd3-0add-4ff9-9283-9849b629a03c',
      'Montador de maquinas',
      new Date('2024-03-15T00:00:00.000Z'),
      new Date('2024-03-15T00:00:00.000Z'),
      'Temporario',
      'manha',
      {
        companyId: '0a002d45-96e9-4e17-8fc8-273e0ae52cac',
        name: 'Fabrica de Maquinas',
      },
    ),
    new Work(
      'aaaf1f10-0003-4f10-bbbb-000000000003',
      'Montador de maquinas',
      new Date('2024-03-15T00:00:00.000Z'),
      new Date('2024-03-15T00:00:00.000Z'),
      'Temporario',
      'manha',
      {
        companyId: 'e90f1f10-0003-4f10-aaaa-000000000003',
        name: 'Fabrica de Maquinas',
      },
    ),
    new Work(
      '5273588b-d06f-4664-9463-4a31b698181d',
      'Operador de torno mecanico',
      new Date('2024-02-01T00:00:00.000Z'),
      new Date('2024-02-01T00:00:00.000Z'),
      'CLT',
      'noturno',
      {
        companyId: 'ecbead35-2a5f-4a83-882f-ac6e6827c092',
        name: 'Metalurgica Forte',
      },
    ),
    new Work(
      'aaaf1f10-0002-4f10-bbbb-000000000002',
      'Operador de torno mecanico',
      new Date('2024-02-01T00:00:00.000Z'),
      new Date('2024-02-01T00:00:00.000Z'),
      'CLT',
      'noturno',
      {
        companyId: 'e90f1f10-0002-4f10-aaaa-000000000002',
        name: 'Metalurgica Forte',
      },
    ),
    new Work(
      '855797eb-21b3-464e-84bb-33f7e16a95b1',
      'Soldador de estruturas metalicas',
      new Date('2024-01-10T00:00:00.000Z'),
      new Date('2024-01-10T00:00:00.000Z'),
      'CLT',
      'manha',
      {
        companyId: '080c25de-72db-44d5-a027-14f4da7903e7',
        name: 'Industria do Aco',
      },
    ),
    new Work(
      'aaaf1f10-0001-4f10-bbbb-000000000001',
      'Soldador de estruturas metalicas',
      new Date('2024-01-10T00:00:00.000Z'),
      new Date('2024-01-10T00:00:00.000Z'),
      'CLT',
      'manha',
      {
        companyId: 'e90f1f10-0001-4f10-aaaa-000000000001',
        name: 'Industria do Aco',
      },
    ),
    new Work(
      'aaaf1f10-0004-4f10-bbbb-000000000004',
      'Engenheiro Civil',
      new Date('2024-01-01T00:00:00.000Z'),
      new Date('2024-01-01T00:00:00.000Z'),
      'PJ',
      'integral',
      {
        companyId: 'e90f1f10-0004-4f10-aaaa-000000000004',
        name: 'Engenharia Pesada',
      },
    ),
  ];

  const workGateway: WorkGateway = {
    async getWorks(): Promise<WorkList> {
      return {
        works,
        total: 8,
        totalPages: 1,
      };
    },
  };

  const wrapper = mount(WorksView, {
    global: {
      provide: { workGateway },
    },
  });

  await flushPromises();
  const cards = wrapper.findAllComponents({ name: 'WorkCardComponent' });

  expect(cards.length).toBe(8);
});

test('Deve renderizar com paginação', async () => {
  const worksFirst = [
    new Work(
      'aaaf1f10-0005-4f10-bbbb-000000000005',
      'Tecnico em Automacao',
      new Date('2024-04-01T00:00:00.000Z'),
      new Date('2024-04-01T00:00:00.000Z'),
      'CLT',
      'manha',
      {
        companyId: 'e90f1f10-0005-4f10-aaaa-000000000005',
        name: 'Automacao Brasil',
      },
    ),
    new Work(
      '4e149fd3-0add-4ff9-9283-9849b629a03c',
      'Montador de maquinas',
      new Date('2024-03-15T00:00:00.000Z'),
      new Date('2024-03-15T00:00:00.000Z'),
      'Temporario',
      'manha',
      {
        companyId: '0a002d45-96e9-4e17-8fc8-273e0ae52cac',
        name: 'Fabrica de Maquinas',
      },
    ),
    new Work(
      'aaaf1f10-0003-4f10-bbbb-000000000003',
      'Montador de maquinas',
      new Date('2024-03-15T00:00:00.000Z'),
      new Date('2024-03-15T00:00:00.000Z'),
      'Temporario',
      'manha',
      {
        companyId: 'e90f1f10-0003-4f10-aaaa-000000000003',
        name: 'Fabrica de Maquinas',
      },
    ),
    new Work(
      '5273588b-d06f-4664-9463-4a31b698181d',
      'Operador de torno mecanico',
      new Date('2024-02-01T00:00:00.000Z'),
      new Date('2024-02-01T00:00:00.000Z'),
      'CLT',
      'noturno',
      {
        companyId: 'ecbead35-2a5f-4a83-882f-ac6e6827c092',
        name: 'Metalurgica Forte',
      },
    ),
    new Work(
      'aaaf1f10-0002-4f10-bbbb-000000000002',
      'Operador de torno mecanico',
      new Date('2024-02-01T00:00:00.000Z'),
      new Date('2024-02-01T00:00:00.000Z'),
      'CLT',
      'noturno',
      {
        companyId: 'e90f1f10-0002-4f10-aaaa-000000000002',
        name: 'Metalurgica Forte',
      },
    ),
  ];

  const worksSecond = [
    new Work(
      '855797eb-21b3-464e-84bb-33f7e16a95b1',
      'Soldador de estruturas metalicas',
      new Date('2024-01-10T00:00:00.000Z'),
      new Date('2024-01-10T00:00:00.000Z'),
      'CLT',
      'manha',
      {
        companyId: '080c25de-72db-44d5-a027-14f4da7903e7',
        name: 'Industria do Aco',
      },
    ),
    new Work(
      'aaaf1f10-0001-4f10-bbbb-000000000001',
      'Soldador de estruturas metalicas',
      new Date('2024-01-10T00:00:00.000Z'),
      new Date('2024-01-10T00:00:00.000Z'),
      'CLT',
      'manha',
      {
        companyId: 'e90f1f10-0001-4f10-aaaa-000000000001',
        name: 'Industria do Aco',
      },
    ),
    new Work(
      'aaaf1f10-0004-4f10-bbbb-000000000004',
      'Engenheiro Civil',
      new Date('2024-01-01T00:00:00.000Z'),
      new Date('2024-01-01T00:00:00.000Z'),
      'PJ',
      'integral',
      {
        companyId: 'e90f1f10-0004-4f10-aaaa-000000000004',
        name: 'Engenharia Pesada',
      },
    ),
  ];

  const getWorksMock = jest
    .fn()
    .mockResolvedValueOnce({ works: worksFirst, total: 8, totalPages: 2 })
    .mockResolvedValueOnce({ works: worksSecond, total: 8, totalPages: 2 });

  const workGateway: WorkGateway = {
    getWorks: getWorksMock,
  };

  const wrapper = mount(WorksView, {
    global: {
      provide: {
        workGateway,
      },
    },
  });

  await flushPromises();

  let cards = wrapper.findAllComponents({ name: 'WorkCardComponent' });
  expect(cards).toHaveLength(5);

  const grid = wrapper.findComponent({ name: 'DynamicGridComponent' });
  grid.vm.$emit('loadMore');
  await flushPromises();

  expect(getWorksMock).toHaveBeenCalledWith({
    filters: {
      keywords: '',
    },
    page: 2,
  });

  cards = wrapper.findAllComponents({ name: 'WorkCardComponent' });
  expect(cards).toHaveLength(8);
});

test('Deve filtrar por palavra chave', async () => {
  const works = [
    new Work(
      'aaaf1f10-0005-4f10-bbbb-000000000005',
      'Tecnico em Automacao',
      new Date('2024-04-01T00:00:00.000Z'),
      new Date('2024-04-01T00:00:00.000Z'),
      'CLT',
      'manha',
      {
        companyId: 'e90f1f10-0005-4f10-aaaa-000000000005',
        name: 'Automacao Brasil',
      },
    ),
    new Work(
      '4e149fd3-0add-4ff9-9283-9849b629a03c',
      'Montador de maquinas',
      new Date('2024-03-15T00:00:00.000Z'),
      new Date('2024-03-15T00:00:00.000Z'),
      'Temporario',
      'manha',
      {
        companyId: '0a002d45-96e9-4e17-8fc8-273e0ae52cac',
        name: 'Fabrica de Maquinas',
      },
    ),
    new Work(
      'aaaf1f10-0003-4f10-bbbb-000000000003',
      'Montador de maquinas',
      new Date('2024-03-15T00:00:00.000Z'),
      new Date('2024-03-15T00:00:00.000Z'),
      'Temporario',
      'manha',
      {
        companyId: 'e90f1f10-0003-4f10-aaaa-000000000003',
        name: 'Fabrica de Maquinas',
      },
    ),
  ];

  const getWorksSpy = jest.fn().mockResolvedValue({
    works,
    total: 8,
    totalPages: 1,
  });

  const workGateway: WorkGateway = {
    getWorks: getWorksSpy,
  };

  const wrapper = mount(WorksView, {
    global: {
      provide: { workGateway },
    },
  });

  const input = wrapper.findComponent({ name: 'InputSearchComponent' }).find('input');
  input.setValue('manha');

  await flushPromises();

  expect(getWorksSpy).toHaveBeenCalledWith({
    filters: {
      keywords: 'manha',
    },
    page: 1,
  });

  const cards = wrapper.findAllComponents({ name: 'WorkCardComponent' });
  expect(cards).toHaveLength(3);
});

test('Deve filtrar por palavra chave com paginação', async () => {
  const worksFirst = [
    new Work(
      'aaaf1f10-0005-4f10-bbbb-000000000005',
      'Tecnico em Automacao',
      new Date('2024-04-01T00:00:00.000Z'),
      new Date('2024-04-01T00:00:00.000Z'),
      'CLT',
      'manha',
      {
        companyId: 'e90f1f10-0005-4f10-aaaa-000000000005',
        name: 'Automacao Brasil',
      },
    ),
    new Work(
      '4e149fd3-0add-4ff9-9283-9849b629a03c',
      'Montador de maquinas',
      new Date('2024-03-15T00:00:00.000Z'),
      new Date('2024-03-15T00:00:00.000Z'),
      'Temporario',
      'manha',
      {
        companyId: '0a002d45-96e9-4e17-8fc8-273e0ae52cac',
        name: 'Fabrica de Maquinas',
      },
    ),
    new Work(
      'aaaf1f10-0003-4f10-bbbb-000000000003',
      'Montador de maquinas',
      new Date('2024-03-15T00:00:00.000Z'),
      new Date('2024-03-15T00:00:00.000Z'),
      'Temporario',
      'manha',
      {
        companyId: 'e90f1f10-0003-4f10-aaaa-000000000003',
        name: 'Fabrica de Maquinas',
      },
    ),
    new Work(
      '5273588b-d06f-4664-9463-4a31b698181d',
      'Operador de torno mecanico',
      new Date('2024-02-01T00:00:00.000Z'),
      new Date('2024-02-01T00:00:00.000Z'),
      'CLT',
      'noturno',
      {
        companyId: 'ecbead35-2a5f-4a83-882f-ac6e6827c092',
        name: 'Metalurgica Forte',
      },
    ),
    new Work(
      'aaaf1f10-0002-4f10-bbbb-000000000002',
      'Operador de torno mecanico',
      new Date('2024-02-01T00:00:00.000Z'),
      new Date('2024-02-01T00:00:00.000Z'),
      'CLT',
      'noturno',
      {
        companyId: 'e90f1f10-0002-4f10-aaaa-000000000002',
        name: 'Metalurgica Forte',
      },
    ),
  ];

  const worksSecond = [
    new Work(
      '855797eb-21b3-464e-84bb-33f7e16a95b1',
      'Soldador de estruturas metalicas',
      new Date('2024-01-10T00:00:00.000Z'),
      new Date('2024-01-10T00:00:00.000Z'),
      'CLT',
      'manha',
      {
        companyId: '080c25de-72db-44d5-a027-14f4da7903e7',
        name: 'Industria do Aco',
      },
    ),
    new Work(
      'aaaf1f10-0001-4f10-bbbb-000000000001',
      'Soldador de estruturas metalicas',
      new Date('2024-01-10T00:00:00.000Z'),
      new Date('2024-01-10T00:00:00.000Z'),
      'CLT',
      'manha',
      {
        companyId: 'e90f1f10-0001-4f10-aaaa-000000000001',
        name: 'Industria do Aco',
      },
    ),
    new Work(
      'aaaf1f10-0004-4f10-bbbb-000000000004',
      'Engenheiro Civil',
      new Date('2024-01-01T00:00:00.000Z'),
      new Date('2024-01-01T00:00:00.000Z'),
      'PJ',
      'integral',
      {
        companyId: 'e90f1f10-0004-4f10-aaaa-000000000004',
        name: 'Engenharia Pesada',
      },
    ),
  ];

  const getWorksMock = jest
    .fn()
    .mockResolvedValueOnce({ works: [] })
    .mockResolvedValueOnce({ works: worksFirst, total: 8, totalPages: 2 })
    .mockResolvedValueOnce({ works: worksSecond, total: 8, totalPages: 2 });

  const workGateway: WorkGateway = {
    getWorks: getWorksMock,
  };

  const wrapper = mount(WorksView, {
    global: {
      provide: { workGateway },
    },
  });

  const input = wrapper.findComponent({ name: 'InputSearchComponent' }).find('input');
  input.setValue('manha');

  await flushPromises();

  expect(getWorksMock).toHaveBeenCalledWith({
    filters: {
      keywords: 'manha',
    },
    page: 1,
  });

  let cards = wrapper.findAllComponents({ name: 'WorkCardComponent' });
  expect(cards).toHaveLength(5);

  const grid = wrapper.findComponent({ name: 'DynamicGridComponent' });
  grid.vm.$emit('loadMore');

  await flushPromises();

  expect(getWorksMock).toHaveBeenCalledWith({
    filters: {
      keywords: 'manha',
    },
    page: 2,
  });

  cards = wrapper.findAllComponents({ name: 'WorkCardComponent' });
  expect(cards).toHaveLength(8);
});
