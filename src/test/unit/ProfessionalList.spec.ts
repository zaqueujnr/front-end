import ProfessionalList from '@/entity/ProfessionalList';

test('Deve criar um lista de profissionais vazia', () => {
  const professionalList = new ProfessionalList();

  expect(professionalList.totalProfessionals()).toBe(0);
});

test('Deve criar uma lista adicionando profissionais', () => {
  const professionalList = new ProfessionalList();

  const professionals = [
    {
      professionalId: '1b8f14c1-8d35-4e94-a6d1-7d0a71e4b02b',
      name: 'João Silva',
      email: 'joao.silva@empresa.com',
      position: 'Desenvolvedor',
      salary: 5000,
    },
    {
      professionalId: 'e3f30e6d-8b2b-41d1-9b2a-bb24438a1ef6',
      name: 'Maria Oliveira',
      email: 'maria.oliveira@empresa.com',
      position: 'Gerente de TI',
      salary: 8000,
    },
    {
      professionalId: 'aedacb27-285f-44b3-b703-763b8390cdab',
      name: 'Carlos Souza',
      email: 'carlos.souza@empresa.com',
      position: 'Analista de Sistemas',
      salary: 6000,
    },
  ];
  professionalList.addProfessionals(professionals);
  expect(professionalList.totalProfessionals()).toBe(3);
  professionalList.addProfessionals([
    {
      professionalId: '59c9b843-52a4-47b6-a4ed-45f3327e3509',
      name: 'Ana Costa',
      email: 'ana.costa@empresa.com',
      position: 'Designer',
      salary: 4500,
    },
    {
      professionalId: 'fb9d2b98-3781-4d86-9149-bb277be60e7d',
      name: 'Lucas Pereira',
      email: 'lucas.pereira@empresa.com',
      position: 'Engenheiro de Software',
      salary: 9000,
    },
  ]);
  expect(professionalList.totalProfessionals()).toBe(5);
});

test('Deve retornar os profissinais adicionadas corretamente', () => {
  const professionalList = new ProfessionalList();
  const professionals = [
    {
      professionalId: '1b8f14c1-8d35-4e94-a6d1-7d0a71e4b02b',
      name: 'João Silva',
      email: 'joao.silva@empresa.com',
      position: 'Desenvolvedor',
      salary: 5000,
    },
    {
      professionalId: 'e3f30e6d-8b2b-41d1-9b2a-bb24438a1ef6',
      name: 'Maria Oliveira',
      email: 'maria.oliveira@empresa.com',
      position: 'Gerente de TI',
      salary: 8000,
    },
  ];
  professionalList.addProfessionals(professionals);
  expect(professionalList.getProfessionals()).toEqual(professionals);
});

test('Deve remover todos os profisionais', () => {
  const professionalList = new ProfessionalList();
  const professionals = [
    {
      professionalId: '1b8f14c1-8d35-4e94-a6d1-7d0a71e4b02b',
      name: 'João Silva',
      email: 'joao.silva@empresa.com',
      position: 'Desenvolvedor',
      salary: 5000,
    },
    {
      professionalId: 'e3f30e6d-8b2b-41d1-9b2a-bb24438a1ef6',
      name: 'Maria Oliveira',
      email: 'maria.oliveira@empresa.com',
      position: 'Gerente de TI',
      salary: 8000,
    },
  ];
  professionalList.addProfessionals(professionals);
  expect(professionalList.totalProfessionals()).toBe(2);
  professionalList.removeProfessionals();
  expect(professionalList.totalProfessionals()).toBe(0);
});

test('Deve limpar a lista e setar os novos profissionais', () => {
  const professionalList = new ProfessionalList();
  const professionals = [
    {
      professionalId: '1b8f14c1-8d35-4e94-a6d1-7d0a71e4b02b',
      name: 'João Silva',
      email: 'joao.silva@empresa.com',
      position: 'Desenvolvedor',
      salary: 5000,
    },
    {
      professionalId: 'e3f30e6d-8b2b-41d1-9b2a-bb24438a1ef6',
      name: 'Maria Oliveira',
      email: 'maria.oliveira@empresa.com',
      position: 'Gerente de TI',
      salary: 8000,
    },
  ];
  professionalList.addProfessionals(professionals);
  expect(professionalList.totalProfessionals()).toBe(2);
  professionalList.setProfessionals(professionals);
  expect(professionalList.totalProfessionals()).toBe(2);
});
