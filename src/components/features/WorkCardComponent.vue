<script setup lang='ts'>
defineProps({
  description: String,
  dateInit: Date,
  dateEnd: Date,
  typeContract: String,
  time: String,
});
</script>

<template>
  <div class="rounded-lg bg-gray-100 p-4 shadow-md ">
    <img class="rounded-lg" src="https://picsum.photos/300/200" alt="">
    <div class="mt-4">
      <div class="text-xs font-bold text-sky-500">Diamente Energia</div>
      <div class="mt-1 font-bold text-gray-700">
        <a href="" class="hover:underline">
          {{ description }}
        </a>
      </div>
      <div class="mt-2 text-sm text-gray-600">{{ dateInit }}</div>
      <div class="mt-2 text-sm text-gray-600">{{ dateEnd }}</div>
      <div class="mt-2 text-sm text-gray-600">{{ typeContract }}</div>
      <div class="mt-2 text-sm text-gray-600">{{ time }}</div>
    </div>
  </div>
</template>

<style scoped></style>