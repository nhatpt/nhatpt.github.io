<script setup>
import { watch, ref, nextTick, onBeforeUnmount } from 'vue'

// `project` is the open project object, or null when closed.
const props = defineProps({
  project: { type: Object, default: null },
})
const emit = defineEmits(['close'])

const dialog = ref(null)
const closeBtn = ref(null)
let lastFocused = null

function focusable() {
  if (!dialog.value) return []
  return Array.from(
    dialog.value.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
  )
}

// Esc closes; Tab is trapped within the dialog so focus can't escape behind it.
function onKeydown(e) {
  if (e.key === 'Escape') {
    emit('close')
    return
  }
  if (e.key !== 'Tab') return
  const items = focusable()
  if (!items.length) return
  const first = items[0]
  const last = items[items.length - 1]
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault()
    last.focus()
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault()
    first.focus()
  }
}

watch(
  () => props.project,
  async (open) => {
    if (open) {
      lastFocused = document.activeElement
      document.addEventListener('keydown', onKeydown)
      document.body.style.overflow = 'hidden' // lock background scroll
      await nextTick()
      closeBtn.value?.focus()
    } else {
      document.removeEventListener('keydown', onKeydown)
      document.body.style.overflow = ''
      lastFocused?.focus?.() // restore focus to the trigger
    }
  }
)

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <transition name="modal">
      <div v-if="project" class="overlay" @click.self="emit('close')">
        <div
          ref="dialog"
          class="modal"
          role="dialog"
          aria-modal="true"
          :aria-label="project.title"
        >
          <button
            ref="closeBtn"
            class="modal__close"
            type="button"
            aria-label="Close"
            @click="emit('close')"
          >
            ✕
          </button>

          <div class="panel__head">
            <span class="panel__tag">// project</span>
            <h2 class="panel__title">{{ project.title }}</h2>
          </div>

          <div class="meta">
            <span><span class="meta__k">year</span> {{ project.year }}</span>
            <span><span class="meta__k">role</span> {{ project.role }}</span>
          </div>

          <p class="overview">{{ project.overview }}</p>

          <h3 class="sub">Highlights</h3>
          <ul class="highlights">
            <li v-for="(h, i) in project.highlights" :key="i">{{ h }}</li>
          </ul>

          <h3 class="sub">Stack</h3>
          <div class="chips">
            <span v-for="tech in project.stack" :key="tech" class="chip">{{ tech }}</span>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: grid;
  place-items: center;
  padding: clamp(16px, 4vw, 40px);
  background: rgba(8, 12, 26, 0.7);
  backdrop-filter: blur(4px);
}
.modal {
  position: relative;
  width: 100%;
  max-width: 640px;
  max-height: 85vh;
  overflow-y: auto;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: clamp(22px, 4vw, 34px);
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.5);
}
.modal__close {
  position: absolute;
  top: 14px;
  right: 14px;
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  font-size: 1rem;
  color: var(--muted);
  background: transparent;
  border: 1px solid var(--line);
  border-radius: 8px;
  cursor: pointer;
  transition:
    color 0.15s ease,
    border-color 0.15s ease;
}
.modal__close:hover {
  color: var(--coral);
  border-color: var(--coral);
}

.meta {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  font-family: var(--mono);
  font-size: 0.85rem;
  color: var(--text);
  margin: 0 0 18px;
}
.meta__k {
  color: var(--muted);
  margin-right: 6px;
}
.overview {
  margin: 0 0 24px;
}
.sub {
  font-family: var(--mono);
  font-size: 0.95rem;
  color: var(--gold);
  margin: 0 0 12px;
}
.highlights {
  margin: 0 0 24px;
  padding-left: 18px;
}
.highlights li {
  margin-bottom: 8px;
}
.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

/* Enter/leave animation, disabled under reduced motion. */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}
.modal-enter-active .modal,
.modal-leave-active .modal {
  transition: transform 0.2s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-from .modal,
.modal-leave-to .modal {
  transform: translateY(12px);
}
@media (prefers-reduced-motion: reduce) {
  .modal-enter-active,
  .modal-leave-active,
  .modal-enter-active .modal,
  .modal-leave-active .modal {
    transition: none;
  }
  .modal-enter-from .modal,
  .modal-leave-to .modal {
    transform: none;
  }
}
</style>
