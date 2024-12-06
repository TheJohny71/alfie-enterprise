/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5E5CE6",
        gray: {
          50: "#F5F5F7",
          100: "#E5E5E7",
          200: "#D2D2D7",
          300: "#98989D",
          400: "#86868B",
          500: "#6E6E73",
          600: "#636366",
          700: "#48484A",
          800: "#3A3A3C",
          900: "#1D1D1F",
        },
        success: "#34C759",
        warning: "#FF9F0A",
        error: "#FF3B30",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['SF Pro Display', 'Inter', 'system-ui', 'sans-serif']
      },
      fontSize: {
        xs: ['12px', '16px'],
        sm: ['13px', '18px'],
        base: ['14px', '20px'],
        lg: ['16px', '24px'],
        xl: ['18px', '28px'],
        '2xl': ['20px', '30px'],
        '3xl': ['24px', '32px'],
        '4xl': ['32px', '40px'],
        '5xl': ['40px', '48px'],
      },
      spacing: {
        '4': '4px',
        '8': '8px',
        '12': '12px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '48': '48px',
        '64': '64px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '24px',
          sm: '24px',
          lg: '48px',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1440px',
        },
      },
    },
  },
  plugins: [],
}
