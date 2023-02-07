import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  root: 'src',
  build: {
    minify: false,
    rollupOptions: {
      output: {
        dir: './'
      }
    }
  },
  plugins: [react()],
})