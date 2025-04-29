<script setup lang="ts">
import ProfessionalCardList from '@/components/features/ProfessionalCardList.vue';
import DynamicGridComponent from '@/components/layout/DynamicGridComponent.vue';
import ButtonComponent from '@/components/ui/ButtonComponent/ButtonComponent.vue';
import InputSearchComponent from '@/components/ui/ButtonComponent/InputSearchComponent.vue';
import type Professional from '@/entity/Professional';
import ProfessionalList from '@/entity/ProfessionalList';
import type { Params, ProfessionalGateway } from '@/infra/gateways/GatewaysTypes';
import { inject, onMounted, reactive, ref, watch } from 'vue';

const professionalGateway = inject('professionalGateway') as ProfessionalGateway;
const professionalList = reactive(new ProfessionalList());
const searchQuery = ref('');
const isLoading = ref(false);
let page = 1;

onMounted(async () => {
  await fetchAllProfessionals();
});

watch(searchQuery, (_) => {
  buscar();
});

watch(professionalList, () => {
  isLoading.value = false;
});

const fetchAllProfessionals = async (): Promise<void> => {
  const professionalResult = await professionalGateway.getProfessionals();
  professionalList.addProfessionals(professionalResult.professionals);
};

const fetchFiltered = async (): Promise<Professional[]> => {
  isLoading.value = true;

  const params: Params = {
    filters: {
      keywords: searchQuery.value,
    },
    page,
  };
  const professionalResult = await professionalGateway.getProfessionals(params);
  return professionalResult.professionals;
};

const buscar = async (): Promise<void> => {
  page = 1;
  const professionals = await fetchFiltered();
  professionalList.setProfessionals(professionals);
};

const buscarMais = async (): Promise<void> => {
  page++;
  const professionals = await fetchFiltered();
  professionalList.addProfessionals(professionals);
};
</script>

<template>
  <h1 class="font-bold text-gray-600 mb-2">Encontre os profissionais..</h1>
  <InputSearchComponent v-model="searchQuery" />
  <ButtonComponent spacing="mt-6" label="Buscar" @click="buscar" />
  <DynamicGridComponent
    :totalList="professionalList.totalProfessionals()"
    :limit="10"
    :loading="isLoading"
    @loadMore="buscarMais"
  >
    <ProfessionalCardList :professionalList="professionalList" />
  </DynamicGridComponent>
</template>
