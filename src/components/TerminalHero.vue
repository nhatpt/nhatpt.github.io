<script setup>
import { profile } from '../data/profile.js'
import { useTypewriter } from '../composables/useTypewriter.js'

// Four reveal rows: whoami output, role, focus, actions.
const { typed, revealed, done } = useTypewriter('whoami', 4)

// A row is visible once the boot reveal has reached its step (or immediately
// under reduced motion, where `revealed` starts at the full count).
const shown = (step) => revealed.value >= step
</script>

<template>
  <!-- HERO -> TerminalHero.vue : the one bold, creative moment. -->
  <header>
    <div class="terminal">
      <div class="terminal__chrome">
        <span class="dots" aria-hidden="true">
          <span class="dot dot--r"></span>
          <span class="dot dot--y"></span>
          <span class="dot dot--g"></span>
        </span>
        <span class="terminal__title">{{ profile.handle }} — zsh</span>
      </div>

      <div class="terminal__body">
        <div class="prompt">
          <span class="user">{{ profile.handle }}@portfolio</span
          ><span class="muted">:</span><span class="path">~</span
          ><span class="muted">$</span>
          <span class="cmd">{{ typed }}</span
          ><span v-if="!done" class="cursor" aria-hidden="true"></span>
        </div>

        <div class="out reveal" :class="{ hide: !shown(1) }">
          <span class="key"># whoami</span>
          <span class="name">{{ profile.name }}</span>
          <span class="muted">{{ profile.handle }}</span>
        </div>
        <div class="out reveal" :class="{ hide: !shown(2) }">
          <span class="key">role&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span class="role">{{ profile.role }}</span>
        </div>
        <div class="out reveal" :class="{ hide: !shown(3) }">
          <span class="key">focus&nbsp;&nbsp;&nbsp;</span>
          <span class="tagline">{{ profile.tagline }}</span>
        </div>

        <div class="terminal__actions reveal" :class="{ hide: !shown(4) }">
          <a
            class="btn btn--primary"
            :href="profile.cvUrl"
            :download="profile.cvFileName"
            >⬇ Download CV</a
          >
          <a class="btn btn--ghost" href="#projects">→ View projects</a>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.terminal {
  background: var(--terminal);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.03) inset,
    0 24px 60px rgba(0, 0, 0, 0.45);
  overflow: hidden;
}

.terminal__chrome {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 11px 14px;
  background: var(--chrome);
  border-bottom: 1px solid var(--line);
}
.dots {
  display: flex;
  gap: 7px;
  flex: 0 0 auto;
}
.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}
.dot--r {
  background: #ff5f57;
}
.dot--y {
  background: #febc2e;
}
.dot--g {
  background: #28c840;
}
.terminal__title {
  flex: 1 1 auto;
  text-align: center;
  font-family: var(--mono);
  font-size: 0.8rem;
  color: var(--muted);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: 41px; /* offset the dots so the title is visually centered */
}

.terminal__body {
  font-family: var(--mono);
  padding: clamp(18px, 4vw, 30px);
  font-size: clamp(0.85rem, 2.4vw, 0.98rem);
  line-height: 1.85;
}

.prompt {
  color: var(--muted);
}
.prompt .user {
  color: var(--gold);
}
.prompt .path {
  color: var(--coral);
}
.prompt .cmd {
  color: var(--text);
}

.out {
  margin: 4px 0 0;
}
.out .key {
  color: var(--muted);
}
.out .name {
  color: var(--text);
  font-size: clamp(1.5rem, 6vw, 2.3rem);
  font-weight: 700;
  letter-spacing: -0.5px;
  display: block;
  line-height: 1.2;
  margin: 6px 0 2px;
}
.out .role {
  color: var(--coral);
  font-weight: 600;
}
.out .tagline {
  color: var(--text);
}
.out .muted {
  color: var(--muted);
}

.cursor {
  display: inline-block;
  width: 9px;
  height: 1.05em;
  transform: translateY(2px);
  background: var(--gold);
  margin-left: 2px;
  animation: blink 1.05s steps(1) infinite;
}
@keyframes blink {
  50% {
    opacity: 0;
  }
}

.terminal__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 22px;
}

/* Reveal: rows fade in as the boot animation progresses. */
.reveal {
  transition: opacity 0.25s ease;
}
.reveal.hide {
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .cursor {
    animation: none;
  }
  .reveal {
    transition: none;
  }
  .reveal.hide {
    opacity: 1; /* never gate content behind motion */
  }
}

@media (max-width: 460px) {
  .terminal__title {
    margin-right: 0;
  }
  .terminal__actions .btn {
    flex: 1 1 100%;
    justify-content: center;
  }
}
</style>
