/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: '#6B1E1E',
        gold: '#D4AF37',
        beige: '#F5F5DC',
        bananaGreen: '#4CAF50',
      },
      fontFamily: {
        tamil: ['Noto Sans Tamil', 'sans-serif'],
        heading: ['Playfair Display', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
