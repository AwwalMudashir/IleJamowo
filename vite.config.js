import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // external: ['react-d3-tree'], // Externalize react-d3-tree in production build
    },
  },
});
