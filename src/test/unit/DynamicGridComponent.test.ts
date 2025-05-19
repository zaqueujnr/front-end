import DynamicGridComponent from '@/components/layout/DynamicGridComponent.vue';
import { mount } from '@vue/test-utils';

test('Deve emitir carregar mais quando atingir o fim da rolagem', () => {
  const wrapper = mount(DynamicGridComponent, {
    props: {
      loading: false,
      totalList: 12,
      limit: 9,
    },
  });

  const container = {
    scrollTop: 0,
    clientHeight: 100,
    scrollHeight: 105,
  };

  wrapper.vm.dynamicGridContainer = container;

  Object.defineProperty(container, 'scrollTop', { value: 5 });
  wrapper.vm.onScroll();

  expect(wrapper.emitted('loadMore')).toBeTruthy();
});

test('Não deve emitir carregar mais quando carregamento for verdadeiro', async () => {
  const wrapper = mount(DynamicGridComponent, {
    props: {
      loading: false,
      totalList: 12,
      limit: 9,
    },
  });

  const container = {
    scrollTop: 0,
    clientHeight: 100,
    scrollHeight: 105,
  };

  wrapper.vm.dynamicGridContainer = container;

  Object.defineProperty(container, 'scrollTop', { value: 5 });

  wrapper.vm.onScroll();

  await wrapper.setProps({ loading: true });

  wrapper.vm.onScroll();

  expect(wrapper.emitted('loadMore')?.length).toBe(1);
});

test('Deve chamar scrollForTop quando for a itens só na primeira página', async () => {
  const scrollToMock = jest.fn();
  const wrapper = mount(DynamicGridComponent, {
    props: {
      loading: false,
      totalList: 12,
      limit: 9,
    },
  });

  wrapper.vm.dynamicGridContainer = { scrollTo: scrollToMock };

  await wrapper.setProps({ totalList: 9 });

  expect(scrollToMock).toHaveBeenCalledWith({ top: 0, behavior: 'auto' });
});
