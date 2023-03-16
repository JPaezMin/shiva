<template>
  <header class="flex relative justify-between items-center h-24 z-50">
    <div>
      <RouterLink to="/">
        <h1 class="text-xl font-bold logo text-black uppercase">
          Shiva Feshareki <span class="block text-xs font-bold">COMPOSER AND TURNTABLIST</span>
        </h1>
      </RouterLink>
    </div>
    <TheMobileNav v-if="isMobile" />
    <TheNavBar v-else />
  </header>
</template>

<script setup>
import TheNavBar from '@/components/TheNavBar.vue'
import TheMobileNav from '@/components/TheMobileNav.vue'
import { ref, onMounted, onUnmounted } from 'vue'
const isMobile = ref(window.innerWidth <= 1020) // set initial value based on screen width
const handleResize = () => {
  isMobile.value = window.innerWidth <= 1023 // update isMobile based on screen width
}
onMounted(() => {
  window.addEventListener('resize', handleResize) // add event listener to update isMobile on resize
})
onUnmounted(() => {
  window.removeEventListener('resize', handleResize) // remove event listener on component unmount
})
</script>

<style lang="scss" scoped>
.logo {
  font-family: 'Bodoni Moda';
}
</style>
