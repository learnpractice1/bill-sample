import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss({
      theme: {
        extend: {
          colors: {
            indigo: {
              600: '#5a67d8',
              700: '#4c51bf',
            },
          },
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
          },
        },
      },
      variants: {},
      plugins: [],
    }),
  ],
})
