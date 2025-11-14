import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
  },
  // Vite dev server automatically handles SPA routing.
  // For production, ensure your hosting provider redirects all routes to index.html
  // (see public/_redirects for Netlify/Vercel configuration)
})
