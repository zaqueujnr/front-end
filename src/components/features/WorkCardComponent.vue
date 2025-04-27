<script setup lang="ts">
defineProps({
  index: { type: Number, required: true },
  description: String,
  dateInit: String,
  dateEnd: String,
  typeContract: String,
  time: String,
  companyName: String,
});
</script>

<template>
  <div class="rounded-lg bg-gray-100 p-4 shadow-md">
    <img class="rounded-lg" :src="`/assets/industry/pexels-${index + 1}.jpg`" alt="" />
    <div class="mt-4">
      <div class="text-xs font-bold text-primary-500">{{ companyName }}</div>
      <div class="mt-1 font-bold text-gray-600">
        <a href="" class="hover:underline">
          {{ description }}
        </a>
      </div>
      <div class="mt-2 text-sm text-gray-600">{{ dateInit }}</div>
      <div class="mt-2 text-sm text-gray-600">{{ dateEnd }}</div>
      <div class="flex items-center gap-2">
        <p class="text-sm font-semibold text-gray-600">Tipo de contratação:</p>
        <div class="text-sm text-gray-600">{{ typeContract }}</div>
      </div>
      <div class="flex items-center gap-2">
        <p class="text-sm font-semibold text-gray-600">Período:</p>
        <div class="text-sm text-gray-600">{{ time }}</div>
      </div>
    </div>
  </div>
</template>
