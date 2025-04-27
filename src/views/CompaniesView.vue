<script setup lang="ts">
import CompanyCardList from '@/components/features/CompanyCardList.vue';
import DynamicGridComponent from '@/components/layout/DynamicGridComponent.vue';
import ButtonComponent from '@/components/ui/ButtonComponent/ButtonComponent.vue';
import InputSearchComponent from '@/components/ui/ButtonComponent/InputSearchComponent.vue';
import CompanyList from '@/entity/CompanyList';
import type Work from '@/entity/Work';
import type { CompanyGateway, Params } from '@/infra/gateways/GatewaysTypes';
import { inject, onMounted, reactive, ref, watch } from 'vue';

const companyGateway = inject('companyGateway') as CompanyGateway;
const companyList: any = reactive(new CompanyList());
const searchQuery = ref('');
const isLoading = ref(false);
let page = 1;

onMounted(async () => {
  await fetchAllCompanies();
});

watch(searchQuery, (_) => {
  buscar();
});

watch(companyList, () => {
  isLoading.value = false;
});

const fetchAllCompanies = async () => {
  const companyResult = await companyGateway.getCompanies();
  companyList.addCompanies(companyResult.companies);
};

const fetchFiltered = async (): Promise<Work[]> => {
  isLoading.value = true;

  const params: Params = {
    filters: {
      keywords: searchQuery.value,
    },
    page,
  };
  const companyResult = await companyGateway.getCompanies(params);
  return companyResult.companies;
};

const buscar = async () => {
  page = 1;
  const companies = await fetchFiltered();
  companyList.setCompanies(companies);
};

const buscarMais = async () => {
  page++;
  const companies = await fetchFiltered();
  companyList.addCompanies(companies);
};
</script>

<template>
  <InputSearchComponent v-model="searchQuery" />
  <ButtonComponent spacing="mt-6" label="Buscar" @click="buscar" />
  <DynamicGridComponent
    :totalList="companyList.totalCompanies()"
    :limit="9"
    :loading="isLoading"
    @loadMore="buscarMais"
  >
    <CompanyCardList :companyList="companyList" />
  </DynamicGridComponent>
</template>
