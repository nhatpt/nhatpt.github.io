<script setup>
import { profile, contact } from '../data/profile.js'
</script>

<template>
  <!-- DETAILS / CONTACT -> ContactSection.vue -->
  <section class="panel" aria-labelledby="contact-title">
    <div class="panel__head">
      <span class="panel__tag">// contact</span>
      <h2 class="panel__title" id="contact-title">Get in touch</h2>
    </div>

    <div class="contact-grid">
      <div v-for="item in contact" :key="item.label" class="contact-item">
        <span class="contact-item__label">{{ item.label }}</span>
        <a
          :href="item.href"
          :target="item.external ? '_blank' : undefined"
          :rel="item.external ? 'noopener' : undefined"
          >{{ item.value }}</a
        >
      </div>
    </div>

    <a class="btn btn--primary" :href="profile.cvUrl" :download="profile.cvFileName"
      >⬇ Download CV</a
    >
  </section>
</template>

<style scoped>
.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr));
  gap: 12px;
  margin: 4px 0 20px;
}
.contact-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 12px 14px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
}
.contact-item__label {
  font-family: var(--mono);
  font-size: 0.72rem;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.6px;
}
.contact-item a {
  color: var(--text);
  text-decoration: none;
  font-weight: 500;
  word-break: break-word;
}
.contact-item a:hover {
  color: var(--coral);
}
</style>
