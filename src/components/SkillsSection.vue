<script setup>
import { skillGroups } from '../data/skills.js'
</script>

<template>
  <!-- STACK -> SkillsSection.vue -->
  <section class="panel" aria-labelledby="stack-title">
    <div class="panel__head">
      <span class="panel__tag">// stack</span>
      <h2 class="panel__title" id="stack-title">Skills</h2>
    </div>

    <div v-for="group in skillGroups" :key="group.label" class="stack-group">
      <p class="stack-group__label">{{ group.label }}</p>
      <div class="chips">
        <span v-for="item in group.items" :key="item" class="chip">{{ item }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stack-group {
  margin-top: 16px;
}
.stack-group:first-of-type {
  margin-top: 0;
}
.stack-group__label {
  font-family: var(--mono);
  font-size: 0.78rem;
  color: var(--gold);
  text-transform: uppercase;
  letter-spacing: 0.8px;
  margin: 0 0 8px;
}
.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>
