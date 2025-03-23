import { defineConfig } from 'vite';// ...existing code...












});  },    include: ['src/**/*.{test,spec}.{js,jsx,ts,tsx}'],    setupFiles: ['./src/setupTests.ts'],    environment: 'jsdom',    globals: true,  test: {  plugins: [react()],export default defineConfig({import react from '@vitejs/plugin-react';test: {
  globals: true,
  environment: 'jsdom',
  setupFiles: ['./src/setupTests.ts'],
  include: ['src/**/*.{test,spec}.{js,jsx,ts,tsx}'],
},
// ...existing code...
