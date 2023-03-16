<template>
  <nav class="main-nav border border-black py-2 px-2" aria-label="Main">
    <ul
      class="text-black main-nav__list flex flex-wrap justify-center items-center lg:justify-start sm:space-x-6"
    >
      <li class="w-full sm:w-auto text-center">
        <a href="https://twitter.com/shivafeshareki" target="_blank" class="nav-link">Twitter</a>
      </li>
      <li class="w-full sm:w-auto text-center">
        <a href="https://www.facebook.com/shivafeshareki/" target="_blank" class="nav-link"
          >Facebook</a
        >
      </li>
      <li class="w-full sm:w-auto text-center">
        <a href="https://www.instagram.com/shivafeshareki/" target="_blank" class="nav-link"
          >Instagram</a
        >
      </li>
      <li class="w-full sm:w-auto text-center">
        <a href="https://soundcloud.com/shivafeshareki" target="_blank" class="nav-link"
          >SoundCloud</a
        >
      </li>
      <li class="w-full sm:w-auto text-center">
        <a
          href="https://open.spotify.com/artist/0mA6mzb38KmmVdSN80q28k?dl_branch=1&si=xSAcjIQ_TD-gyjmo4byUoQ&nd=1"
          target="_blank"
          class="nav-link"
          >Spotify</a
        >
      </li>
      <li class="w-full sm:w-auto text-center">
        <a href="https://linktr.ee/shivafeshareki" class="nav-link" target="_blank">LinkTree</a>
      </li>
    </ul>
  </nav>
</template>

<script setup></script>

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
</style>
