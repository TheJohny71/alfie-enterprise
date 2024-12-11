import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: '/alfie-enterprise/', // Ensure the base path matches your repository name
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});
