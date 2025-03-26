<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/about">Sobre Nós</RouterLink>
        <RouterLink to="/">Vagas</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>

header {
  background-color: antiquewhite;
  line-height: 3;
  /* max-height: 100vh; */
  width: 100%;
  position: fixed;
  top:0;
  left: 0;
  z-index: 1000;
}

nav {
  width: 100%;
  font-size: 18px;
  text-align: center;
}

/* nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
} */

/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
 
</style>
