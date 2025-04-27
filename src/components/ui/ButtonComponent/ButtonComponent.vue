<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  label: String,
  color: { type: String, default: 'primary' },
  variant: { type: String, default: 'solid' },
  rounded: { type: String, default: 'md' },
  spacing: { type: String },
});

const emit = defineEmits(['click']);

const computedClasses = computed(() => {
  const roundedClasses = {
    'rounded-sm': props.rounded === 'sm',
    'rounded-md': props.rounded === 'md',
    'rounded-lg': props.rounded === 'lg',
    'rounded-full': props.rounded === 'full',
  };
  const variantClasses = {
    [`btn-${props.color}`]: props.variant === 'solid',
    [`btn-${props.color}-outline`]: props.variant === 'outline',
  };

  return [roundedClasses, variantClasses];
});
</script>

<template>
  <button :class="['btn', computedClasses, props.spacing]" @click="emit('click')">
    <slot>{{ label }}</slot>
  </button>
</template>
