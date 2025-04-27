<script setup lang="ts">
import ProfessionalCardComponent from './ProfessionalCardComponent.vue';

defineProps(['professionalList']);
</script>

<template>
  <ProfessionalCardComponent
    v-for="(item, index) in professionalList.professionals as any"
    :key="item.professionalId"
    :index="index"
    :name="item.name"
    :position="item.position"
    :email="item.email"
    :salary="item.salary"
  />
</template>
