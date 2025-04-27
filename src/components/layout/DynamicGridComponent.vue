<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps({
  cols: {
    type: Number,
    default: 6,
  },
  loading: { type: Boolean, default: false },
  totalList: { type: Number, required: true },
  limit: { type: Number, required: true },
});

const dynamicGridContainer = ref<HTMLDivElement | any>(null);

const emit = defineEmits<{
  (e: 'loadMore'): void;
}>();

watch(
  () => props.totalList,
  (newValue) => {
    if (typeof newValue !== 'number') return;
    isFirstPageOfResults(newValue) && scrollForTop();
  },
);

const onScroll = () => {
  const container = dynamicGridContainer.value;
  const viewPortBottom =
    container.scrollTop + container.clientHeight >= container.scrollHeight - 10;
  if (!props.loading && viewPortBottom) emit('loadMore');
};

const scrollForTop = () => {
  if (dynamicGridContainer.value) {
    dynamicGridContainer.value.scrollTo({ top: 0, behavior: 'auto' });
  }
};

const isFirstPageOfResults = (totalList: number): boolean => {
  return totalList < props.limit + 1;
};
</script>

<template>
  <div
    ref="dynamicGridContainer"
    class="dynamic-grid"
    :class="`lg:grid-cols-${props.cols} grid-cols-6`"
    @scroll="onScroll"
  >
    <slot></slot>
  </div>
</template>

<style scoped></style>
