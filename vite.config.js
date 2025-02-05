import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react-d3-tree'], // Include react-d3-tree in optimized dependencies
  },
  build: {
    rollupOptions: {
      external: ['react-d3-tree'], // Externalize react-d3-tree in production build
    },
  },
});
