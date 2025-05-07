import WorkList from '@/entity/WorkList';

test('Deve criar um workList vazio', () => {
  const workList = new WorkList();

  expect(workList.totalWorks()).toBe(0);
});

test('Deve criar uma lista adicionando trabalhos', () => {
  const workList = new WorkList();
  const works = [
    {
      workId: '001',
      description: 'Desenvolvimento de sistema interno',
      dateInit: new Date('2025-05-01'),
      dateEnd: new Date('2025-05-01'),
      typeContract: 'CLT',
      time: '40h/semana',
      company: {
        companyId: 'c001',
        name: 'Tech Solutions Ltda',
      },
    },
    {
      workId: '002',
      description: 'Manutenção de servidores',
      dateInit: new Date('2025-05-01'),
      dateEnd: new Date('2025-05-01'),
      typeContract: 'PJ',
      time: '20h/semana',
      company: {
        companyId: 'c002',
        name: 'Infra Pro',
      },
    },
    {
      workId: '003',
      description: 'Consultoria em segurança da informação',
      dateInit: new Date('2025-05-01'),
      dateEnd: new Date('2025-05-01'),
      typeContract: 'Freelancer',
      time: '10h/semana',
      company: {
        companyId: 'c003',
        name: 'SecureNet',
      },
    },
  ];
  workList.addWorks(works);
  expect(workList.totalWorks()).toBe(3);
  workList.addWorks([
    {
      workId: '004',
      description: 'Manutenção de servidores',
      dateInit: new Date('2025-05-01'),
      dateEnd: new Date('2025-05-01'),
      typeContract: 'PJ',
      time: '20h/semana',
      company: {
        companyId: 'c002',
        name: 'Infra Pro',
      },
    },
    {
      workId: '005',
      description: 'Consultoria em segurança da informação',
      dateInit: new Date('2025-05-01'),
      dateEnd: new Date('2025-05-01'),
      typeContract: 'Freelancer',
      time: '10h/semana',
      company: {
        companyId: 'c003',
        name: 'SecureNet',
      },
    },
  ]);
  expect(workList.totalWorks()).toBe(5);
});

test('Deve retornar os trabalhos adicionados corretamente', () => {
  const workList = new WorkList();
  const work = {
    workId: '001',
    description: 'Desenvolvimento de sistema',
    dateInit: new Date('2025-05-01'),
    dateEnd: new Date('2025-05-01'),
    typeContract: 'CLT',
    time: '40h/semana',
    company: {
      companyId: 'c001',
      name: 'Empresa X',
    },
  };

  workList.addWorks([work]);
  expect(workList.getWorks()).toEqual([work]);
});

test('Deve remover todos os trabalhos', () => {
  const workList = new WorkList();

  const works = [
    {
      workId: '001',
      description: 'Desenvolvimento de sistema',
      dateInit: new Date('2025-05-01'),
      dateEnd: new Date('2025-05-01'),
      typeContract: 'CLT',
      time: '40h/semana',
      company: {
        companyId: 'c001',
        name: 'Empresa X',
      },
    },
    {
      workId: '002',
      description: 'Desenvolvimento de sistema',
      dateInit: new Date('2025-05-01'),
      dateEnd: new Date('2025-05-01'),
      typeContract: 'CLT',
      time: '40h/semana',
      company: {
        companyId: 'c001',
        name: 'Empresa X',
      },
    },
  ];

  workList.addWorks(works);
  expect(workList.totalWorks()).toBe(2);
  workList.removeWorks();
  expect(workList.totalWorks()).toBe(0);
});

test('Deve limpar a lista e setar os novos trabalhos', () => {
  const workList = new WorkList();

  const works = [
    {
      workId: '001',
      description: 'Desenvolvimento de sistema',
      dateInit: new Date('2025-05-01'),
      dateEnd: new Date('2025-05-01'),
      typeContract: 'CLT',
      time: '40h/semana',
      company: {
        companyId: 'c001',
        name: 'Empresa X',
      },
    },
    {
      workId: '002',
      description: 'Desenvolvimento de sistema',
      dateInit: new Date('2025-05-01'),
      dateEnd: new Date('2025-05-01'),
      typeContract: 'CLT',
      time: '40h/semana',
      company: {
        companyId: 'c001',
        name: 'Empresa X',
      },
    },
  ];

  workList.addWorks(works);
  expect(workList.totalWorks()).toBe(2);
  workList.setWorks(works);
  expect(workList.totalWorks()).toBe(2);
});
