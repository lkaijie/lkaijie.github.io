<template>
  <div class="about-container">
    <!-- <p>ABOUT HOME PAGE</p> -->
    <div class="about-content">
      <div class="name-section">
        <!-- clamp maybe? -->
        <p>Hi! 👋</p>
        <p>I'm Kai</p>
      </div>
      <div class="main-section">
        <p>
          I'm a Software/Data Engineer graduate from the University of Alberta with over 20 months
          of experience developing large applications and ETL pipelines at scale in the private
          sector. I love trying out new technologies, so you'll find a bit of everything here:
        </p>
      </div>
    </div>
    <div class="about-info">
      <div class="about-img">
        <img src="@/assets/media/about_img.svg" alt="Logo" />
      </div>
      <div class="about-links">
        <ul class="links">
          <li><a>linkedin</a></li>
          <li><a>github</a></li>
          <li><a>email</a></li>
          <li><a>blog</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<!-- <style scoped> -->
<style lang="scss" scoped>
.about-container {
  @include flex-general;
  /* margin-top: 60px; */
  // top right bottom left
  margin: 0 20px 0 20px;
  padding: min(5em, 10%);
  // padding-top: 60px;
  height: 100vh;
  .about-info {
    .links {
      @include flex-general;
    }
  }
  .about-content {
    flex-basis: 60%;

    .main-section {
      // padding: min(5em, 8%);
    }
  }

  .about-img {
    // width: 200px;
    // height: auto;
    flex-basis: 40%;
    img {
      max-width: 100%;
      height: auto;
      display: block;
    }
  }
}
// mobile
@media (max-width: 760px) {
  .about-container {
    flex-direction: column-reverse;
    .about-img {
      display: none;
    }
  }
}
</style>
