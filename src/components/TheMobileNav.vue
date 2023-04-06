<template>
  <div>
    <button
      class="navbar-toggler"
      type="button"
      aria-controls="headerNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
      :class="{ mobileMenuOpened: showNav }"
      @click="showNav = !showNav"
    >
      <div class="navbar-toggler__icon"><div></div></div>
    </button>
    <nav class="mobile-nav" aria-label="Main" :class="{ open: showNav }">
      <ul class="mobile-nav__list">
        <li class="mobile-nav__item">
          <RouterLink
            to="/about"
            :class="{ active: activeLink === 1 }"
            @click="activeLink = 1"
            class="main-nav__link"
            >About</RouterLink
          >
        </li>
        <li class="mobile-nav__item">
          <RouterLink
            to="/compositions"
            :class="{ active: activeLink === 2 }"
            @click="activeLink = 2"
            class="main-nav__link"
            >Selected Compositions</RouterLink
          >
        </li>
        <li class="mobile-nav__item">
          <RouterLink
            to="/dates"
            :class="{ active: activeLink === 3 }"
            @click="activeLink = 3"
            class="main-nav__link"
            >Live Dates</RouterLink
          >
        </li>
        <li class="mobile-nav__item">
          <RouterLink
            to="/releases"
            :class="{ active: activeLink === 4 }"
            @click="activeLink = 4"
            class="main-nav__link"
            >Releases</RouterLink
          >
        </li>
        <li class="mobile-nav__item">
          <RouterLink
            to="/media"
            :class="{ active: activeLink === 5 }"
            @click="activeLink = 5"
            class="main-nav__link"
            >Watch / Listen</RouterLink
          >
        </li>
        <li class="mobile-nav__item">
          <RouterLink
            to="/press"
            :class="{ active: activeLink === 6 }"
            @click="activeLink = 6"
            class="main-nav__link"
            >Press</RouterLink
          >
        </li>
        <li class="mobile-nav__item">
          <RouterLink
            to="/gallery"
            :class="{ active: activeLink === 7 }"
            @click="activeLink = 7"
            class="main-nav__link"
            >Gallery</RouterLink
          >
        </li>
        <li class="mobile-nav__item">
          <RouterLink
            to="/contact"
            :class="{ active: activeLink === 7 }"
            @click="activeLink = 7"
            class="main-nav__link"
            >Contact</RouterLink
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'

const showNav = ref(false)
const activeLink = ref(1)
const route = useRoute()
const currentRoute = ref(route.fullPath)
watchEffect(() => {
  currentRoute.value = route.fullPath
  showNav.value = false
})
</script>

<style lang="scss" scoped>
.navbar-toggler {
  align-items: center;
  background-color: transparent;
  border-radius: 0.5rem;
  border: 1px solid transparent;
  display: inline-flex;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1;
  margin-left: 1rem;
  padding: 0.9375rem 0;
  outline: none;
  &:hover {
    cursor: pointer;
  }
  &__icon {
    align-items: center;
    background: transparent;
    display: flex;
    height: 60px;
    justify-content: center;
    padding: 1rem;
    width: 60px;
    z-index: 1;
    & > div {
      align-items: center;
      background: black;
      display: flex;
      flex: none;
      height: 2px;
      justify-content: center;
      position: relative;
      transition: all 0.4s ease;
      width: 100%;
      &::before,
      &::after {
        content: '';
        position: absolute;
        z-index: 1;
        top: -10px;
        width: 100%;
        height: 2px;
        background: inherit;
      }
      &::after {
        top: 10px;
      }
    }
  }
  &.mobileMenuOpened {
    .navbar-toggler__icon > div {
      transform: rotate(135deg);
    }
    .navbar-toggler__icon {
      & > div:before,
      & > div:after {
        top: 0;
        transform: rotate(90deg);
      }
    }
  }
}
.mobile-nav {
  backface-visibility: hidden;
  background-color: #1a202c;
  box-shadow: 0 4px 3px -2px rgb(34 43 52 / 10%);
  left: 0;
  padding: 1rem;
  position: absolute;
  right: 0;
  transform: translateY(-400px);
  top: 107px;
  transition: 0.5s transform cubic-bezier(0, 0.12, 0.14, 1);
  user-select: none;
  width: 100%;
  z-index: -999;
  &__list {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  &__item {
    border: 0;
    color: white;
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 1px;
    padding: 0.5rem;
    text-align: center;
    transition: color 0.2s ease;
    word-spacing: 1px;
    .contact-sales-button {
      width: 100%;
    }
  }
  &__link {
    border: 0;
    color: peru;
    display: inline-block;
    font-size: 0.8rem;
    font-weight: 500;
    letter-spacing: 1px;
    text-align: left;
    text-transform: uppercase;
    transition: color 0.2s ease;
    word-spacing: 1px;
    &:after {
      -webkit-transition: width 0.5s ease, background-color 0.5s ease;
      background: transparent;
      content: '';
      display: block;
      height: 2px;
      margin-top: 3px;
      margin: auto;
      transition: width 0.5s ease, background-color 0.5s ease;
      width: 0;
    }
    &.active {
      color: peru;
      &:after {
        background: blue;
        content: '';
        display: block;
        height: 2px;
        margin-top: 3px;
        margin: auto;
        transition: width 0.5s ease, background-color 0.5s ease;
        width: 100%;
      }
    }
    &:active,
    &:active,
    &:visited {
      color: peru;
    }
  }
}
.open {
  transform: translateY(-11px);
}
</style>
