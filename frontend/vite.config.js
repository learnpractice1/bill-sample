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
            'tiffin-bg': '#F8F4F0',
            'tiffin-text': '#333',
            'tiffin-button': '#E67E22',
            'tiffin-button-hover': '#D35400',
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
