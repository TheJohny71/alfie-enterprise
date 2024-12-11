import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  base: '/alfie-enterprise/', // Update this based on your GitHub Pages path
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        globals: {}
      }
    }
  }
});
