<script setup lang="ts">
import { MapPinIcon } from '@heroicons/vue/24/outline';
defineProps({
  index: { type: Number, required: true },
  name: String,
  email: String,
  cnpj: String,
  endereco: String,
});
</script>

<template>
  <div class="rounded-lg bg-gray-100 p-4 shadow-md">
    <img class="rounded-lg" :src="`/assets/industry/pexels-${index + 1}.jpg`" alt="" />
    <div class="mt-4">
      <div class="text-xs font-bold text-primary-500 flex">{{ name }}</div>
      <div class="mt-2 text-gray-600 flex items-center flex-wrap">
        <div class="font-bold text-sm text-gray-600 mr-1">Contato:</div>
        <div class="text-sm texte-gray-600">
          {{ email }}
        </div>
      </div>
      <div class="flex items-center gap-2 mt-1">
        <MapPinIcon class="w-4 h-4" />
        <div class="text-sm text-gray-600">{{ endereco }}</div>
      </div>
    </div>
  </div>
</template>
