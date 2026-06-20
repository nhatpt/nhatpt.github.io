<script setup>
import { profile } from '../data/profile.js'
</script>

<template>
  <!-- PROFILE -> ProfileSection.vue -->
  <section class="panel" aria-labelledby="profile-title">
    <div class="panel__head">
      <span class="panel__tag">// profile</span>
      <h2 class="panel__title" id="profile-title">About</h2>
    </div>
    <p v-for="(para, i) in profile.about" :key="i">{{ para }}</p>
  </section>
</template>

<style scoped>
.panel p {
  margin: 0 0 10px;
  max-width: 70ch;
}
.panel p:last-child {
  margin-bottom: 0;
}
</style>
