<script setup>
import { experience } from '../data/experience.js'
</script>

<template>
  <!-- EXPERIENCE -> ExperienceSection.vue : work history (vs. personal projects) -->
  <section class="panel" aria-labelledby="exp-title">
    <div class="panel__head">
      <span class="panel__tag">// experience</span>
      <h2 class="panel__title" id="exp-title">Work Experience</h2>
    </div>

    <ol class="timeline">
      <li v-for="job in experience" :key="job.company + job.period" class="job">
        <div class="job__period">{{ job.period }}</div>
        <div class="job__body">
          <h3 class="job__role">
            {{ job.role }}
            <span class="job__at">@ {{ job.company }}</span>
          </h3>
          <p v-if="job.location" class="job__loc">{{ job.location }}</p>
          <p class="job__desc">{{ job.description }}</p>
          <div class="job__tags">
            <span v-for="t in job.tech" :key="t" class="tag">{{ t }}</span>
          </div>
        </div>
      </li>
    </ol>
  </section>
</template>

<style scoped>
.timeline {
  list-style: none;
  margin: 0;
  padding: 0;
}
.job {
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 20px;
  padding: 0 0 22px 0;
  position: relative;
}
.job:not(:last-child) {
  margin-bottom: 4px;
}
/* Timeline rail + node on the body column's left edge. */
.job__body {
  position: relative;
  padding-left: 22px;
  border-left: 1px solid var(--line);
}
.job__body::before {
  content: '';
  position: absolute;
  left: -5px;
  top: 6px;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--coral);
  box-shadow: 0 0 0 3px rgba(255, 122, 89, 0.15);
}
.job__period {
  font-family: var(--mono);
  font-size: 0.82rem;
  color: var(--gold);
  padding-top: 2px;
}
.job__role {
  font-family: var(--mono);
  font-size: 1rem;
  font-weight: 700;
  color: var(--text);
  margin: 0 0 2px;
}
.job__at {
  color: var(--coral);
  font-weight: 600;
}
.job__loc {
  color: var(--muted);
  font-size: 0.82rem;
  margin: 0 0 10px;
}
.job__desc {
  color: var(--muted);
  font-size: 0.94rem;
  margin: 0 0 14px;
  max-width: 70ch;
}
.job__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

@media (max-width: 560px) {
  .job {
    grid-template-columns: 1fr;
    gap: 8px;
  }
  /* On mobile the period sits above; drop the rail to avoid a dangling line. */
  .job__body {
    padding-left: 0;
    border-left: none;
  }
  .job__body::before {
    display: none;
  }
}
</style>
