import { mount } from '@vue/test-utils';
import WorkCardList from '@/components/features/WorkCardList.vue';
import WorkList from '@/entity/WorkList';
import Work from '@/entity/Work';

const mockWorkList = new WorkList();

mockWorkList.addWorks([
  new Work(
    'd0f3a8b9-1e5a-4c2f-8d35-5d1ef9c82a01',
    'Desenvolvedor Front-End',
    new Date('2021-01-01'),
    new Date('2022-12-31'),
    'CLT',
    '2 anos',
    { companyId: 'f9e55a4c-843e-45b6-b6f3-97eb0b5e601f', name: 'Empresa A' },
  ),
  new Work(
    '4a3b9d5e-88b0-4649-8329-61ce2df8fbd7',
    'Desenvolvedor Back-End',
    new Date('2020-02-01'),
    new Date('2021-11-30'),
    'PJ',
    '1 ano e 10 meses',
    { companyId: 'e90f2f40-237c-4cd7-b5b3-e08e55db6313', name: 'Empresa B' },
  ),
  new Work(
    '2b13a47c-7f8d-4dd2-801e-6c5f790f9a98',
    'Analista de Sistemas',
    new Date('2019-05-10'),
    new Date('2020-10-15'),
    'CLT',
    '1 ano e 5 meses',
    { companyId: '67a4d3d1-f34d-4ae2-badc-dad9a0d1851b', name: 'Empresa C' },
  ),
  new Work(
    '9a3d9131-6f6f-4fcb-bd3a-4c2f3eb63b3b',
    'Engenheiro de Software',
    new Date('2018-03-01'),
    new Date('2019-04-30'),
    'PJ',
    '1 ano e 2 meses',
    { companyId: '1c58b2cb-505b-41e2-9de2-d620e186e299', name: 'Empresa D' },
  ),
]);

test('Renderiza os cards corretamente', () => {
  const wrapper = mount(WorkCardList, {
    props: {
      workList: mockWorkList,
    },
  });

  const cards = wrapper.findAllComponents({ name: 'WorkCardComponent' });

  const workList = mockWorkList.getWorks();
  expect(cards).toHaveLength(workList.length);

  workList.forEach((work, index) => {
    const card = cards[index];

    expect(card.props('index')).toBe(index);
    expect(card.props('companyName')).toBe(work.company.name);
    expect(card.props('description')).toBe(work.description);
    expect(card.props('dateInit')).toEqual(work.dateInit);
    expect(card.props('dateEnd')).toEqual(work.dateEnd);
    expect(card.props('typeContract')).toBe(work.typeContract);
    expect(card.props('time')).toBe(work.time);
  });
});

test('Não renderiza nenhum card quando a lista esta vazia', () => {
  const wrapper = mount(WorkCardList, {
    props: {
      workList: [],
    },
  });

  expect(wrapper.findAllComponents({ name: 'WorkCardComponent' })).toHaveLength(0);
});
