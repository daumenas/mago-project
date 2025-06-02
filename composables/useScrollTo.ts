import { nextTick } from 'vue'

export function useScrollTo(offset = 80) {
  const navigate = (id: string) => {
    nextTick(() => {
      const el = document.getElementById(id)
      if (el) {
        const y = el.offsetTop - offset
        window.scrollTo({ top: y, behavior: 'smooth' })
      }
    })
  }

  return { navigate }
}
