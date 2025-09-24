import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Optimizaciones de build
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom']
        }
      }
    },
    // Compresión
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    // Optimización de assets
    assetsInlineLimit: 4096,
    // Chunk size warning limit
    chunkSizeWarningLimit: 1000
  },
  // Optimizaciones de desarrollo
  server: {
    hmr: {
      overlay: false
    }
  },
  // Pre-bundling optimizations
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  }
})
