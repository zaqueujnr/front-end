import { mount } from '@vue/test-utils';
import Professional from '@/entity/Professional';
import ProfessionalList from '@/entity/ProfessionalList';
import ProfessionalCardList from '@/components/features/ProfessionalCardList.vue';

const mockProfessionalList = new ProfessionalList();

mockProfessionalList.addProfessionals([
  new Professional(
    'd0f3a8b9-1e5a-4c2f-8d35-5d1ef9c82a01',
    'Ana Silva',
    'ana.silva@example.com',
    'Desenvolvedora Front-End',
    8781,
  ),

  new Professional(
    '4a3b9d5e-88b0-4649-8329-61ce2df8fbd7',
    'Carlos Souza',
    'carlos.souza@example.com',
    'Desenvolvedor Back-End',
    10200,
  ),

  new Professional(
    '2b13a47c-7f8d-4dd2-801e-6c5f790f9a98',
    'Fernanda Oliveira',
    'fernanda.oliveira@example.com',
    'Analista de Sistemas',
    6300,
  ),

  new Professional(
    '9a3d9131-6f6f-4fcb-bd3a-4c2f3eb63b3b',
    'João Pereira',
    'joao.pereira@example.com',
    'Engenheiro de Software',
    12000,
  ),

  new Professional(
    '1c58b2cb-505b-41e2-9de2-d620e186e299',
    'Mariana Costa',
    'mariana.costa@example.com',
    'Product Owner',
    9700,
  ),
]);

test('Renderiza os cards corretamente', () => {
  const wrapper = mount(ProfessionalCardList, {
    props: {
      professionalList: mockProfessionalList,
    },
  });

  const cards = wrapper.findAllComponents({ name: 'ProfessionalCardComponent' });

  const professionalList = mockProfessionalList.getProfessionals();
  expect(cards).toHaveLength(professionalList.length);

  professionalList.forEach((professional, index) => {
    const card = cards[index];

    expect(card.props('index')).toBe(index);
    expect(card.props('name')).toBe(professional.name);
    expect(card.props('email')).toEqual(professional.email);
    expect(card.props('position')).toEqual(professional.position);
    expect(card.props('salary')).toBe(professional.salary);
  });
});

test('Não renderiza nenhum card quando a lista esta vazia', () => {
  const wrapper = mount(ProfessionalCardList, {
    props: {
      professionalList: [],
    },
  });

  expect(wrapper.findAllComponents({ name: 'ProfessionalCardComponent' })).toHaveLength(0);
});
