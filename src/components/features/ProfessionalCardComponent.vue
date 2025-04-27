<script setup lang="ts">
defineProps({
  index: { type: Number, default: true },
  name: String,
  position: String,
  email: String,
  salary: String,
});
</script>

<template>
  <div class="rounded-lg bg-gray-100 p-4 shadow-md flex flex-col items-center text-center">
    <div class="w-100% h-100% overflow-hidden rounded-full">
      <img
        class="w-full h-full object-cover"
        :src="`/assets/professional/pexels-${index + 1}.jpg`"
        alt="Imagem"
      />
    </div>
    <div class="mt-4 flex flex-col items-center">
      <div class="text-xs font-bold text-primary-500">{{ name }}</div>
      <div class="mt-1 font-bold text-gray-600">
        <a href="" class="hover:underline">
          {{ position }}
        </a>
      </div>
      <div class="flex items-center gap-2">
        <p class="text-sm font-semibold text-gray-600">Contato:</p>
        <div class="text-sm text-gray-600">{{ email }}</div>
      </div>
      <div class="flex items-center gap-2">
        <p class="text-sm font-semibold text-gray-600">Pretensão:</p>
        <div class="text-sm text-gray-600">{{ salary }}</div>
      </div>
    </div>
  </div>
</template>
