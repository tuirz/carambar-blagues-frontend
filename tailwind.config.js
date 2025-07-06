/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        carambar: {
          yellow: '#FFD700',
          orange: '#FF8C00',
          red: '#DC143C',
          brown: '#8B4513',
        }
      }
    },
  },
  plugins: [],
}
