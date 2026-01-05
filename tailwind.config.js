/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        DEFAULT: '5px',
        'sm': '2px',
        'md': '5px',
        'lg': '5px',
        'xl': '5px',
        '2xl': '5px',
        '3xl': '5px',
      },
    },
  },
  plugins: [],
};
