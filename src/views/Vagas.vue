<script setup lang="ts">
import WorkCardList from '@/components/features/WorkCardList.vue';
import DynamicGridComponent from '@/components/layout/DynamicGridComponent.vue';
import ButtonComponent from '@/components/ui/ButtonComponent/ButtonComponent.vue';
import InputSearchComponent from '@/components/ui/ButtonComponent/InputSearchComponent.vue';
import { reactive } from 'vue';

const works = reactive([
  { description: 'ROPE ACESS', dateInit: new Date(2024, 4, 8), dateEnd: new Date(2024, 4, 10), typeContract: 'Temporário', time: 'Integral' },
  { description: 'ROPE ACESS', dateInit: new Date(2024, 4, 8), dateEnd: new Date(2024, 4, 10), typeContract: 'Temporário', time: 'Integral' },
  { description: 'ROPE ACESS', dateInit: new Date(2024, 4, 8), dateEnd: new Date(2024, 4, 10), typeContract: 'Temporário', time: 'Integral' },
  { description: 'ROPE ACESS', dateInit: new Date(2024, 4, 8), dateEnd: new Date(2024, 4, 10), typeContract: 'Temporário', time: 'Integral' },
  { description: 'ROPE ACESS', dateInit: new Date(2024, 4, 8), dateEnd: new Date(2024, 4, 10), typeContract: 'Temporário', time: 'Integral' },
])
</script>

<template>
  <main class="pt-20">
    <InputSearchComponent />
    <ButtonComponent label="Enviar" />

    <DynamicGridComponent>
      <WorkCardList :works="works" />
    </DynamicGridComponent>

  </main>
</template>
