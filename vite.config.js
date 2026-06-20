import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// `nhatpt.github.io` is a GitHub Pages *user site*, served from the domain
// root — so `base` stays '/'. (A project site would need '/repo-name/'.)
export default defineConfig({
  base: '/',
  plugins: [vue()],
})
