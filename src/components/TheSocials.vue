<template>
  <nav class="main-nav" aria-label="Main">
    <ul class="main-nav__list flex space-x-4">
      <li>
        <a href="https://twitter.com/shivafeshareki" target="_blank" class="nav-link">Twitter</a>
      </li>
      <li>
        <a href="https://www.facebook.com/shivafeshareki/" target="_blank" class="nav-link"
          >Facebook</a
        >
      </li>
      <li>
        <a href="https://www.instagram.com/shivafeshareki/" target="_blank" class="nav-link"
          >Instagram</a
        >
      </li>
      <li>
        <a href="https://soundcloud.com/shivafeshareki" target="_blank" class="nav-link"
          >SoundCloud</a
        >
      </li>
      <li>
        <a
          href="https://open.spotify.com/artist/0mA6mzb38KmmVdSN80q28k?dl_branch=1&si=xSAcjIQ_TD-gyjmo4byUoQ&nd=1"
          target="_blank"
          >Spotify</a
        >
      </li>
      <li><a href="https://linktr.ee/shivafeshareki" target="_blank">LinkTree</a></li>
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
