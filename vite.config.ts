/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // GitHub Pages serves the app under /<repo>/; Netlify and dev serve it at /.
  base: process.env.BASE_PATH || '/',
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    allowedHosts: true
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts'
  }
});
