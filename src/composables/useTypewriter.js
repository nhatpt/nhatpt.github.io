import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Drives the terminal "boot" reveal: types a command character-by-character,
 * then signals that the revealed output rows may appear in sequence.
 *
 * Accessibility: if the user prefers reduced motion (or JS hasn't run), the
 * caller renders the final text immediately — `done` starts true in that case,
 * so no content is ever gated behind the animation.
 *
 * @param {string} command  text to "type" (e.g. "whoami")
 * @param {number} steps    number of output rows to reveal after typing
 */
export function useTypewriter(command, steps) {
  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const typed = ref(prefersReduced ? command : '')
  const revealed = ref(prefersReduced ? steps : 0) // how many rows are visible
  const done = ref(prefersReduced)

  let timers = []
  const schedule = (fn, ms) => timers.push(setTimeout(fn, ms))

  onMounted(() => {
    if (prefersReduced) return

    let i = 0
    const typeChar = () => {
      if (i <= command.length) {
        typed.value = command.slice(0, i)
        i++
        schedule(typeChar, 90)
      } else {
        schedule(revealNext, 280)
      }
    }

    let s = 0
    const revealNext = () => {
      if (s < steps) {
        revealed.value = ++s
        schedule(revealNext, 230)
      } else {
        done.value = true
      }
    }

    typeChar()
  })

  onUnmounted(() => {
    timers.forEach(clearTimeout)
    timers = []
  })

  return { typed, revealed, done }
}
