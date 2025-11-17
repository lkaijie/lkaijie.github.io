<template>
  <div :class="layoutClass">
    <NavBar :toggleDarkMode="toggleDarkMode" />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed, ref, watch } from 'vue'
import NavBar from './components/NavBar.vue'

const route = useRoute()

const layoutClass = computed(() => {
  if (route.path.startsWith('/business')) return 'business-layout'
  if (route.path.startsWith('/personal')) return 'personal-layout'
  return 'default-layout'
})

const isDark = ref(false)

// toggle function (pass this to NavBar)
function toggleDarkMode() {
  isDark.value = !isDark.value
}

// apply/remove ".dark" class from <html>
watch(isDark, (value) => {
  document.documentElement.classList.toggle('dark', value)
})
</script>

<style lang="scss">
:root {
  /* Light mode */
  --bg: #ffffff;
  --text: #111111;
  --card: #f4f4f4;
}

.dark {
  /* Dark mode */
  --bg: #0d0d0d;
  --text: #f5f5f5;
  --card: #1a1a1a;
}
@font-face {
  font-family: 'mc-regular';
  src: url('@/assets/fonts/MinecraftRegular-Bmg3.otf');
}

@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.business-layout {
  // styles for all business pages

  font-size: large;
}

.personal-layout {
  // styles for all personal pages
  // font-size: small;
  font-family: 'mc-regular';
}
</style>
