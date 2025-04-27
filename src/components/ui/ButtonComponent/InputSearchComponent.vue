<script setup lang="ts">
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline';
defineProps({
  placeholder: { type: String, default: 'Search for anything..' },
});
const modelValue = defineModel<string>();
</script>

<template>
  <div class="relative">
    <MagnifyingGlassIcon class="icon-input" />
    <input
      v-model="modelValue"
      class="input"
      :placeholder="placeholder"
      type="text"
      name="search"
    />
  </div>
</template>

<style class="sxmksk" scoped></style>
