<template>
  <header class="navbar">
    <nav class="navbar-container">
      <RouterLink to="/" class="navbar-brand">
        <span>Kai</span>
      </RouterLink>
      <!-- <p>random test</p> -->

      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink to="/" class="nav-link">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/" class="nav-link">Projects</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/" class="nav-link">Experience</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/" class="nav-link">Blog</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/" class="nav-link">About Me</RouterLink>
        </li>
        <li class="nav-item">
          <button @click="toggleDarkMode">Toggle Dark</button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
// @use "@/styles"
defineProps<{
  toggleDarkMode: () => void
}>()
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  padding: min(4vh, 10px) min(4vw, 24px); // responsive padding: 4% of viewport or max 24px
  // margin: 0 min(4vw, 24px);

  z-index: 100;
  width: 100%;
  background-color: var(--card);
}
.navbar-container {
  @include flex-general;
  justify-content: space-between;

  .navbar-nav {
    @include flex-general;
    @include list-general;
    gap: min(3vw, 16px);

    .nav-item {
      // margin: 10px 10px 10px 10px;
    }
  }
}
</style>
