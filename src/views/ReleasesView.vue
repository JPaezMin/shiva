<template>
  <h2>Releases</h2>
  <div class="grid gap-4 sm:grid-cols-1 md:grid-cols-2 mt-10">
    <article class="flex items-center p-4 sm:my-4 border border-black shadow-md">
      <img src="../assets/images/turning-world.jpeg" alt="Record cover" class="w-40 h-auto mr-8" />
      <div>
        <p class="text-base text-black font-bold mb-2">Turning World</p>
        <div class="flex items-center">
          <a href="#" class="bg-black text-white py-2 px-4 hover:bg-gray-700">Buy</a>
        </div>
      </div>
    </article>
    <article class="flex items-center p-4 sm:my-4 border border-black shadow-md">
      <img src="../assets/images/other-world.jpg" alt="Record cover" class="w-40 h-auto mr-8" />
      <div>
        <p class="text-base text-black font-bold mb-2">Other World</p>
        <div class="flex items-center">
          <a href="#" class="bg-black text-white py-2 px-4 hover:bg-gray-700">Listen</a>
        </div>
      </div>
    </article>
    <article class="flex items-center p-4 sm:my-4 border border-black shadow-md">
      <img src="../assets/images/nebula.png" alt="Record cover" class="w-40 h-auto mr-8" />
      <div>
        <p class="text-base text-black font-bold mb-2">Nebula</p>
        <div class="flex items-center">
          <a href="#" class="bg-black text-white py-2 px-4 hover:bg-gray-700">Buy</a>
        </div>
      </div>
    </article>
    <article class="flex items-center p-4 sm:my-4 border border-black shadow-md">
      <img src="../assets/images/vapour.jpeg" alt="Record cover" class="w-40 h-auto mr-8" />
      <div>
        <p class="text-base text-black font-bold mb-2">Vapour</p>
        <div class="flex items-center">
          <a href="#" class="bg-black text-white py-2 px-4 hover:bg-gray-700">Buy</a>
        </div>
      </div>
    </article>
  </div>
  <div class="md:flex md:justify-center xl:justify-start w-full">
    <article class="flex items-center p-4 my-8 border border-black">
      <img src="../assets/images/new-forms.jpeg" alt="Record cover" class="w-40 h-auto mr-8" />
      <div>
        <p class="text-base text-black font-bold mb-2">New Forms</p>
        <div class="flex items-center">
          <a href="#" class="bg-black text-white py-2 px-4 hover:bg-gray-700">Buy</a>
          <a href="#" class="bg-black text-white py-2 px-4 hover:bg-gray-700 ml-6"
            >Buy The Remixes</a
          >
        </div>
      </div>
    </article>
  </div>
  <TheScrollToTop />
</template>

<script setup>
import TheScrollToTop from '@/components/TheScrollToTop.vue'
</script>

<style lang="scss" scoped></style>
