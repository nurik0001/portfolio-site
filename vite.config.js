import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react()],
    base: './',
    preview: {
      port: 3000,
      strictPort: true,
      host: true,
      allowedHosts: ['healthcheck.railway.app', 'localhost', '.railway.app']
    }
  }
})
