import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Make sure this import is added

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), // Add the React plugin
    tailwindcss(), // Add the Tailwind plugin
  ],
  
  // --- THIS 'base' PROPERTY IS SET FOR YOUR REPO ---
  //
  // This is set based on your "My-Portfolio" repository name.
  //
  base: '/My-Portfolio/',
})