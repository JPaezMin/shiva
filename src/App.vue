<script setup>
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <main class="max-w-screen-lg mx-auto site-container">
    <TheHeader />
    <RouterView />
    <TheFooter />
  </main>
</template>

<style scoped>
.site-container {
  padding: 0 1rem;
  @media (min-width: 760px) {
    padding: 0;
  }
}
</style>
