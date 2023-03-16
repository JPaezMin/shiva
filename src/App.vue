<script setup>
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <main class="max-w-screen-lg mx-auto sm:px-10">
    <TheHeader />
    <RouterView />
    <TheFooter />
  </main>
</template>

<style scoped></style>
