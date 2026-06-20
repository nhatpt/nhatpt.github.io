<script setup>
import { profile } from '../data/profile.js'
const year = new Date().getFullYear()
</script>

<template>
  <footer>© {{ year }} · {{ profile.name }}</footer>
</template>

<style scoped>
footer {
  text-align: center;
  color: var(--muted);
  font-family: var(--mono);
  font-size: 0.78rem;
  margin-top: 40px;
  padding-top: 22px;
  border-top: 1px solid var(--line);
}
</style>
