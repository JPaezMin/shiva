<template>
  <nav aria-label="Main">
    <ul class="flex justify-end space-x-4 capitalize">
      <li>
        <RouterLink
          to="/about"
          :class="{ active: activeLink === 1 }"
          @click="activeLink = 1"
          class="nav-link"
          >About</RouterLink
        >
      </li>
      <li>
        <RouterLink
          to="/compositions"
          :class="{ active: activeLink === 2 }"
          @click="activeLink = 2"
          class="nav-link"
          >Selected Compositions</RouterLink
        >
      </li>
      <li>
        <RouterLink
          to="/dates"
          :class="{ active: activeLink === 3 }"
          @click="activeLink = 3"
          class="nav-link"
          >Live Dates</RouterLink
        >
      </li>
      <li>
        <RouterLink
          to="/releases"
          :class="{ active: activeLink === 4 }"
          @click="activeLink = 4"
          class="nav-link"
          >Releases</RouterLink
        >
      </li>
      <li>
        <RouterLink
          to="/media"
          :class="{ active: activeLink === 5 }"
          @click="activeLink = 5"
          class="nav-link"
          >Media</RouterLink
        >
      </li>
      <li>
        <RouterLink
          to="/press"
          :class="{ active: activeLink === 6 }"
          @click="activeLink = 6"
          class="nav-link"
          >Press</RouterLink
        >
      </li>
      <li>
        <RouterLink
          to="/contact"
          :class="{ active: activeLink === 7 }"
          @click="activeLink = 7"
          class="nav-link"
          >Contact</RouterLink
        >
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const activeLink = ref(1)
</script>

<style lang="scss" scoped>
html:not(.touch) nav a:hover {
  color: #4b5563;
  &:after {
    background: #4b5563;
    width: 100%;
  }
}
.nav-link {
  border: 0;
  display: inline-block;
  font-size: 1rem;
  letter-spacing: 0.0625rem;
  text-align: left;
  text-decoration: none;
  transition: color 0.2s ease;
  &:after {
    background: transparent;
    content: '';
    display: block;
    height: 3px;
    transition: width 0.5s ease, background-color 0.5s ease;
    width: 0;
  }
}
nav ul li a.active {
  color: #4b5563;
  &:after {
    background: #4b5563;
    content: '';
    display: block;
    height: 3px;
    margin-top: 3px;
    margin: auto;
    transition: width 0.5s ease, background-color 0.5s ease;
    width: 100%;
  }
}
</style>
