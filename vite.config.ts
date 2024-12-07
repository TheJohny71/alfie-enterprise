import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  base: '/alfie-enterprise/', // Important for GitHub Pages subpath
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      // If you have externals like recharts, keep these lines
      // Otherwise, you can remove this entire rollupOptions block
      external: ['recharts'],
      output: {
        globals: {
          recharts: 'Recharts'
        }
      }
    },
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true
    }
  },
  optimizeDeps: {
    include: ['recharts']
  }
})

