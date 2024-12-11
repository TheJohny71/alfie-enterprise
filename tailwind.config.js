/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}" // Ensure it scans all your source files
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5E5CE6",
        background: "#F5F5F7"
      }
    }
  },
  plugins: [] // No plugins to avoid compatibility issues
};
