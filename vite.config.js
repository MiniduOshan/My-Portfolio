import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Make sure this import is added

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), // Add the React plugin
    tailwindcss(), // Add the Tailwind plugin
  ],
  
  // --- THIS 'base' PROPERTY IS NOW FIXED ---
  //
  // Because you are using a custom domain (miniduoshan.me),
  // your site is at the root directory. We must set 'base' to '/'
  //
  base: '/',
})