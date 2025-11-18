<template>
  <div class="about-container">
    <!-- <p>ABOUT HOME PAGE</p> -->
    <div class="about-content">random content</div>
    <div class="about-img">
      <img src="@/assets/media/about_img.svg" alt="Logo" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<!-- <style scoped> -->
<style lang="scss" scoped>
.about-container {
  @include flex-general;
  /* margin-top: 60px; */
  margin: 0px;
  padding-top: 60px;
  height: 100vh;

  .about-img {
    // width: 200px;
    // height: auto;
    img {
      max-width: 100%;
      height: auto;
      display: block;
    }
  }
}
</style>
