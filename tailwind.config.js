/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'npr-red': '#C11B17',
        'npr-gold': '#D4AF37',
        'npr-black': '#1A1A1A',
        'npr-dark': '#0F0F0F',
        'npr-gray': '#F8F8F8',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}