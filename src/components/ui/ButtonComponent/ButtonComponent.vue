<script setup lang='ts'>
import { computed } from 'vue';

const props = defineProps({
    label: String,
    color: { type: String, default: 'blue' },
    variant: { type: String, default: 'solid' },
    rounded: { type: String, default: 'md' }
});


const emit = defineEmits(['click']);

const computedClasses = computed(() => {
    const baseClasses = 'px-4 py-2 text-sm font-medium transition focus:outline-none text-white';
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

    return [baseClasses, roundedClasses, variantClasses];
});
</script>

<template>
    <button :class="[computedClasses]" @click="emit('click')">
        <slot>{{ label }}</slot>
    </button>
</template>
