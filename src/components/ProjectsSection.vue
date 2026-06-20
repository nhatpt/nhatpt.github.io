<script setup>
import { ref } from 'vue'
import { projects } from '../data/projects.js'
import ProjectCard from './ProjectCard.vue'
import ProjectModal from './ProjectModal.vue'

// The currently open project (null = closed). Detail shows in a modal — no router.
const selected = ref(null)
</script>

<template>
  <!-- PROJECTS -> ProjectsSection.vue (+ ProjectCard.vue v-for, ProjectModal.vue) -->
  <section id="projects" class="panel" aria-labelledby="projects-title">
    <div class="panel__head">
      <span class="panel__tag">// projects</span>
      <h2 class="panel__title" id="projects-title">Selected Work</h2>
    </div>

    <div class="cards">
      <ProjectCard
        v-for="project in projects"
        :key="project.slug"
        :project="project"
        @open="selected = project"
      />
    </div>
  </section>

  <ProjectModal :project="selected" @close="selected = null" />
</template>

<style scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 270px), 1fr));
  gap: clamp(14px, 2.5vw, 18px);
  margin-top: 4px;
}
</style>
