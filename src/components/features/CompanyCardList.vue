<script setup lang="ts">
import type Company from '@/entity/Company';
import CompanyCardComponent from './CompanyCardComponent.vue';
defineProps(['companyList']);
</script>

<template>
  <CompanyCardComponent
    v-for="(item, index) in companyList.companies as Company[]"
    :key="item.companyId"
    :index="index"
    :name="item.name"
    :email="item.email"
    :cnpj="item.cnpj"
    :endereco="item.endereco"
  />
</template>
