/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bounceIn: {
          '0%, 20%, 40%, 60%, 80%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeInScale: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'bounce-in-once': 'bounceIn 0.8s ease-out 1 forwards', // Animation that runs once
        'fade-in-scale': 'fadeInScale 0.6s ease-out forwards', // Animation that runs once
      },
    },
  },
  plugins: [],
}