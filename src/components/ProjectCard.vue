<script setup>
defineProps({
  project: { type: Object, required: true },
})
defineEmits(['open'])
</script>

<template>
  <!-- ProjectCard.vue : one item in the projects grid. -->
  <article class="card">
    <h3 class="card__title">{{ project.title }}</h3>
    <p class="card__desc">{{ project.summary }}</p>
    <div class="card__tags">
      <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
    </div>
    <button class="card__link" type="button" @click="$emit('open')">
      View Detail →
    </button>
  </article>
</template>

<style scoped>
.card {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  padding: 18px;
  display: flex;
  flex-direction: column;
  transition:
    border-color 0.15s ease,
    transform 0.12s ease;
}
.card:hover {
  border-color: var(--coral);
  transform: translateY(-2px);
}
.card__title {
  font-family: var(--mono);
  font-size: 1rem;
  font-weight: 700;
  margin: 0 0 8px;
  color: var(--text);
}
.card__desc {
  color: var(--muted);
  font-size: 0.92rem;
  margin: 0 0 14px;
}
.card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 16px;
}
.card__link {
  margin-top: auto;
  align-self: flex-start;
  /* reset native button chrome — this is a link-styled button */
  background: none;
  border: 0;
  padding: 0;
  cursor: pointer;
  font-family: var(--mono);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--coral);
}
.card__link:hover {
  color: var(--gold);
}
@media (prefers-reduced-motion: reduce) {
  .card {
    transition: none;
  }
}
</style>
