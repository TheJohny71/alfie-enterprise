// vite.config.mts - Complete Updated File
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
  base: '/alfie-enterprise/',
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      external: [], // Explicitly define any external dependencies
      output: {
        manualChunks: undefined // Disable manual chunk splitting
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom'] // Include core dependencies
  }
});
