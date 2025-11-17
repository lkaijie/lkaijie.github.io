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
          <!-- <RouterLink to="/" class="nav-link">About Me</RouterLink> -->
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
// @use '';

// .header {
// }

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

// .navbar {
//   @include flex-general;
//   height: var(--nav-height);
//   background-color: var(--card);
//   border-bottom: 1px solid rgba(var(--text), 0.1);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 0 2rem;
//   position: fixed;
//   top: 0px;
// }

// .navbar-container {
//   width: 100%;
//   max-width: 1200px; // Or your preferred max-width
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// }

// .navbar-brand {
//   font-size: 1.5rem;
//   font-weight: bold;
//   color: var(--text);
// }

// .navbar-nav {
//   display: flex;
//   list-style: none;
//   gap: 1.5rem;
// }

// .nav-link {
//   color: var(--text);
//   font-weight: 500;
//   opacity: 0.8;
//   transition: opacity 0.2s ease;

//   &:hover {
//     opacity: 1;
//   }

//   // This class is automatically added by Vue Router
//   &.router-link-exact-active {
//     opacity: 1;
//     font-weight: 700;
//     // You could add a color here, e.g., your primary brand color
//   }
// }
</style>
