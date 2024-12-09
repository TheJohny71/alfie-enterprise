/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5E5CE6',
        background: '#F5F5F7',
        gray: {
          100: '#98989D',
          200: '#636366',
          300: '#48484A',
        },
        success: '#34C759',
        warning: '#FF9F0A',
        error: '#FF3B30',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['SF Pro Display', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
