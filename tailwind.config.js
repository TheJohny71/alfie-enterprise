/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5E5CE6',
        background: '#F5F5F7',
      },
      fontFamily: {
        display: ['SF Pro Display', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['SF Pro Text', 'system-ui', 'serif'],
      },
    },
  },
  plugins: [],
}
