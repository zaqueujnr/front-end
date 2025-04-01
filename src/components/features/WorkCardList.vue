<script setup lang='ts'>
import WorkCardComponent from './WorkCardComponent.vue';

defineProps({
    works: {
        type: Array,
        required: true
    },
});

</script>

<template>
    <WorkCardComponent v-for="(item, index) in (works as any)" :key="index" :description="item.description"
        :date-end="item.dateEnd" :date-init="item.dateInit" :type-contract="item.typeContract" :time="item.time" />
</template>

<style scoped></style>