<script setup lang='ts'>
import { computed } from 'vue';

const props = defineProps({
    cols: {
        type: Number,
        default: 2,
    }
});

const gridClasses = computed(() => {
    return `grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-${props.cols}`;
});

</script>

<template>
    <div :class="gridClasses">
        <slot></slot>
    </div>
</template>

<style scoped></style>