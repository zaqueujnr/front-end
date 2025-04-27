<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <header class="w-full fixed top-0 left-0 z-[1000]">
    <nav class="nav-bar">
      <RouterLink class="nav-link" :class="{ active: route.path === '/' }" to="/"
        >Sobre Nós</RouterLink
      >
      <RouterLink class="nav-link" :class="{ active: route.path === '/works' }" to="/works"
        >Vagas</RouterLink
      >
      <RouterLink
        class="nav-link"
        :class="{ active: route.path === '/professionals' }"
        to="/professionals"
      >
        Profissionais</RouterLink
      >
      <RouterLink class="nav-link" :class="{ active: route.path === '/empresas' }" to="/empresas">
        Empresas</RouterLink
      >
    </nav>
  </header>
</template>

<style scoped></style>
