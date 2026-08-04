import { defineConfig } from 'astro/config'

// Static output for GitHub Pages (CNAME tracebook.ai lives in public/).
// Styling stays on the Tailwind Play CDN in Base.astro — same system
// the original single-page site shipped; a build-time Tailwind can
// replace it later without touching page content.
export default defineConfig({
  site: 'https://tracebook.ai',
  output: 'static',
})
