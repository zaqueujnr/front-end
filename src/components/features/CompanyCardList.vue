<script setup lang="ts">
import CompanyCardComponent from './CompanyCardComponent.vue';

defineProps(['companyList']);
</script>

<template>
  <CompanyCardComponent
    v-for="(item, index) in companyList.companies as any"
    :key="item.companyId"
    :index="index"
    :name="item.name"
    :email="item.email"
    :cnpj="item.cnpj"
    :endereco="item.endereco"
  />
</template>
