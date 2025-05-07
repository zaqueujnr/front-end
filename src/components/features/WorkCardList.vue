<script setup lang="ts">
import type Work from '@/entity/Work';
import WorkCardComponent from './WorkCardComponent.vue';
defineProps(['workList']);
</script>

<template>
  <WorkCardComponent
    v-for="(item, index) in workList.works as Work[]"
    :key="item.workId"
    :index="index"
    :company-name="item.company.name || '############'"
    :description="item.description"
    :date-end="item.dateEnd"
    :date-init="item.dateInit"
    :type-contract="item.typeContract"
    :time="item.time"
  />
</template>
