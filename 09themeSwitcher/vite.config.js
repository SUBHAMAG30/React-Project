import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ('tailwindcss').config
import tailwindcss from 'tailwindcss'
import { plugin } from 'postcss'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),tailwindcss({
      config: './tailwindcss.config.js',
      darkMode: 'class',
      theme: {
        extend: {},
      },
      plugins: [],
    }),
  ],
})