/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#f5f0e6',
        ink: '#171717',
        lime: '#d7ff64',
        coral: '#ff795e',
      },
      fontFamily: {
        display: ['"Space Pro Text"', 'Arial Black', 'sans-serif'],
        body: ['Enter', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        pill: '999px',
      },
    },
  },
  plugins: [],
}
