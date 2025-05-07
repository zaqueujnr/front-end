<script setup lang="ts">
import WorkCardList from '@/components/features/WorkCardList.vue';
import DynamicGridComponent from '@/components/layout/DynamicGridComponent.vue';
import ButtonComponent from '@/components/ui/ButtonComponent/ButtonComponent.vue';
import InputSearchComponent from '@/components/ui/ButtonComponent/InputSearchComponent.vue';
import type Work from '@/entity/Work';
import WorkList from '@/entity/WorkList';
import type { Params } from '@/infra/gateways/GatewaysTypes';
import type { WorkGateway } from '@/infra/gateways/GatewaysTypes';
import { inject, onMounted, reactive, ref, watch } from 'vue';

const workGateway = inject('workGateway') as WorkGateway;
const workList: WorkList = reactive(new WorkList());
const searchQuery = ref('');
const isLoading = ref(false);
let page = 1;

onMounted(async () => {
  await fetchAllWorks();
});

watch(searchQuery, () => {
  buscar();
});

watch(workList, () => {
  isLoading.value = false;
});

const fetchAllWorks = async (): Promise<void> => {
  const workResult = await workGateway.getWorks();
  workList.addWorks(workResult.works);
};

const fetchFiltered = async (): Promise<Work[]> => {
  isLoading.value = true;

  const params: Params = {
    filters: {
      keywords: searchQuery.value,
    },
    page,
  };
  const workResult = await workGateway.getWorks(params);
  return workResult.works;
};

const buscar = async (): Promise<void> => {
  page = 1;
  const works = await fetchFiltered();
  workList.setWorks(works);
};

const buscarMais = async (): Promise<void> => {
  page++;
  const works = await fetchFiltered();
  workList.addWorks(works);
};
</script>

<template>
  <h1 class="font-bold text-gray-600 mb-2">Encontre as vagas..</h1>
  <InputSearchComponent v-model="searchQuery" />
  <ButtonComponent spacing="mt-6" label="Buscar" @click="buscar" />
  <DynamicGridComponent
    :totalList="workList.totalWorks()"
    :limit="9"
    :loading="isLoading"
    @loadMore="buscarMais"
  >
    <WorkCardList :workList="workList" />
  </DynamicGridComponent>
</template>
