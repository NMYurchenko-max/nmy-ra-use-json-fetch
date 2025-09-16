import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  // Для GitHub Pages (project pages) база должна совпадать с именем репозитория
  base: mode === 'production' ? '/nmy-ra-use-json-fetch/' : '/',
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      // Только для dev: перенаправляет /notes на локальный бэкенд
      '/notes': {
        target: 'http://localhost:7070',
        changeOrigin: true,
      },
    },
  },
  resolve: {
    // ESM-совместимый способ указать путь к src
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
}));
