<template>
  <h2>Gallery</h2>
  <div class="grid sm:grid-cols-4 gap-4 grid-cols-1 mt-10">
    <div
      v-for="(image, index) in images"
      :key="image.key"
      class="cursor-pointer"
      @click="showModal(index)"
    >
      <img :src="image.src" alt="Thumbnail" class="w-full h-full object-cover" />
    </div>
    <div
      v-if="isModalVisible"
      class="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-gray-800 bg-opacity-75"
      @click.self="hideModal"
    >
      <div class="max-w-4xl max-h-full overflow-hidden flex justify-center items-center">
        <img :src="modalImage" alt="Modal Image" class="max-w-full max-h-[700px] object-contain" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onUpdated } from 'vue'
const images = [
  { id: 1, src: '/image-gallery/0.jpeg' },
  { id: 2, src: '/image-gallery/1.jpeg' },
  { id: 3, src: '/image-gallery/2.jpeg' },
  { id: 4, src: '/image-gallery/3.jpeg' },
  { id: 5, src: '/image-gallery/4.jpeg' },
  { id: 6, src: '/image-gallery/5.jpeg' },
  { id: 7, src: '/image-gallery/6.jpeg' },
  { id: 8, src: '/image-gallery/7.jpeg' },
  { id: 9, src: '/image-gallery/8.jpeg' },
  { id: 10, src: '/image-gallery/9.jpeg' },
  { id: 11, src: '/image-gallery/10.jpeg' },
  { id: 12, src: '/image-gallery/11.jpeg' },
  { id: 13, src: '/image-gallery/12.jpeg' },
  { id: 14, src: '/image-gallery/13.jpeg' }
]
const isModalVisible = ref(false)
const modalImage = ref('')
const showModal = (index) => {
  isModalVisible.value = true
  modalImage.value = `/image-gallery/${index}.jpeg`
}
const hideModal = () => {
  isModalVisible.value = false
  modalImage.value = ''
  document.body.classList.remove('overflow-hidden')
}
onUpdated(() => {
  if (isModalVisible.value) {
    document.body.classList.add('overflow-hidden')
  } else {
    document.body.classList.remove('overflow-hidden')
  }
})
</script>

<style lang="scss" scoped></style>
