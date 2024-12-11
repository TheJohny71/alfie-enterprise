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
  base: '/alfie-enterprise/',
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      external: ['lucide-react'],
      output: {
        globals: {
          'lucide-react': 'lucide-react',
        },
      },
    },
  },
});
