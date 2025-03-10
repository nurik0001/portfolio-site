import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(() => {
  return {
    plugins: [
      react(),
      {
        name: 'configure-response-headers',
        configureServer: (server) => {
          server.middlewares.use((_req, res, next) => {
            res.setHeader('Access-Control-Allow-Origin', '*');
            next();
          });
        }
      }
    ],
    base: './',
    preview: {
      port: 3000,
      strictPort: true,
      host: true,
      allowedHosts: ['healthcheck.railway.app', 'localhost', '.railway.app', '*']
    },
    server: {
      port: 3000,
      strictPort: true,
      host: true,
      cors: true
    }
  }
})
