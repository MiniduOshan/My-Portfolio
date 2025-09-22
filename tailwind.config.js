// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'blue-crackle': 'blueCrackle var(--animation-duration) infinite alternate ease-in-out var(--animation-delay)',
      },
      keyframes: {
        blueCrackle: {
          '0%': { opacity: '0', transform: 'scale(0.5) translateY(0)' },
          '20%': { opacity: '0.8', transform: 'scale(1) translateY(-10px)' },
          '80%': { opacity: '0.8', transform: 'scale(1) translateY(10px)' },
          '100%': { opacity: '0', transform: 'scale(0.5) translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}